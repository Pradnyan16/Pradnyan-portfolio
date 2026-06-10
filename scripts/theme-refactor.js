const fs = require('fs');
const path = require('path');

const directoriesToScan = [
  path.join(__dirname, '../src/components'),
  path.join(__dirname, '../src/app')
];

const replacementMap = {
  'bg-[#000000]': 'bg-transparent',
  'bg-[#0a0a0a]': 'bg-zinc-100 dark:bg-[#0a0a0a]',
  'bg-[#111111]': 'bg-zinc-200 dark:bg-[#111111]',
  'hover:text-black': 'hover:text-white dark:hover:text-black',
  'hover:text-white': 'hover:text-black dark:hover:text-white',
  'group-hover:text-white': 'group-hover:text-black dark:group-hover:text-white',
  'group-hover:border-white/30': 'group-hover:border-black/30 dark:group-hover:border-white/30',
  'border-white/10': 'border-black/10 dark:border-white/10',
  'border-white/30': 'border-black/30 dark:border-white/30',
  'hover:bg-white/10': 'hover:bg-black/10 dark:hover:bg-white/10',
  'hover:bg-white/5': 'hover:bg-black/5 dark:hover:bg-white/5',
  'hover:bg-white': 'hover:bg-black dark:hover:bg-white',
  'bg-white/10': 'bg-black/10 dark:bg-white/10',
  'bg-white/5': 'bg-black/5 dark:bg-white/5',
  'text-zinc-300': 'text-zinc-700 dark:text-zinc-300',
  'text-zinc-400': 'text-zinc-600 dark:text-zinc-400',
  'text-black': 'text-white dark:text-black',
  'text-white': 'text-black dark:text-white',
  'border-white': 'border-black dark:border-white',
  'bg-white': 'bg-black dark:bg-white',
};

// Sort keys by length descending to match longest tokens first
const sortedKeys = Object.keys(replacementMap).sort((a, b) => b.length - a.length);

// Build a single regex pattern using word boundaries or specific delimiters
// Since tailwind classes can contain special chars like [, #, /, we need to escape them.
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// We want to match exact classes. Tailwind classes are separated by spaces or quotes.
// Negative lookbehind and lookahead for non-whitespace/quote characters
const pattern = new RegExp(`(?<=['"\\s\\\`])(${sortedKeys.map(escapeRegExp).join('|')})(?=['"\\s\\\`])`, 'g');

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      if (['ThemeToggle.tsx', 'ThemeProvider.tsx', 'layout.tsx', 'Navbar.tsx', 'mdx.ts'].includes(file)) {
        continue;
      }
      
      let content = fs.readFileSync(fullPath, 'utf8');
      const originalContent = content;
      
      content = content.replace(pattern, (match) => {
        return replacementMap[match] || match;
      });
      
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated ${file}`);
      }
    }
  }
}

for (const dir of directoriesToScan) {
  processDirectory(dir);
}

console.log('Refactoring complete.');
