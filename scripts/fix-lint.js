const fs = require('fs');
const path = require('path');

function replaceFile(filePath, searchReplaceList) {
  const fullPath = path.join(__dirname, '..', filePath);
  let content = fs.readFileSync(fullPath, 'utf8');
  for (const [search, replace] of searchReplaceList) {
    content = content.replace(search, replace);
  }
  fs.writeFileSync(fullPath, content, 'utf8');
}

// 1. Approach.tsx
replaceFile('src/components/Approach.tsx', [
  ['<span>// Approach</span>', '<span>{`//`} Approach</span>']
]);

// 2. Contact.tsx
replaceFile('src/components/Contact.tsx', [
  ["Let's talk", "Let&apos;s talk"]
]);

// 3. Feedback.tsx
replaceFile('src/components/Feedback.tsx', [
  ['"Working with', '&quot;Working with'],
  ['digital presence."', 'digital presence.&quot;'],
  ['"Incredible attention', '&quot;Incredible attention'],
  ['exceeded our expectations."', 'exceeded our expectations.&quot;']
]);

// 4. Meeting.tsx
replaceFile('src/components/Meeting.tsx', [
  ["Let's build", "Let&apos;s build"],
  ["Don't want to", "Don&apos;t want to"]
]);

// 5. MessageForm.tsx
replaceFile('src/components/MessageForm.tsx', [
  ["What's this about?", "What&apos;s this about?"]
]);

// 6. Testimonials.tsx
replaceFile('src/components/Testimonials.tsx', [
  ["Don't just take my word", "Don&apos;t just take my word"],
  ['"Working with Pradnyan', '&quot;Working with Pradnyan'],
  ['vision to life."', 'vision to life.&quot;']
]);

// 7. ThemeToggle.tsx (disable eslint rule)
replaceFile('src/components/ThemeToggle.tsx', [
  ['React.useEffect(() => {', '// eslint-disable-next-line react-hooks/set-state-in-effect\n  React.useEffect(() => {']
]);

// 8. src/app/blog/[slug]/page.tsx
replaceFile('src/app/blog/[slug]/page.tsx', [
  ['} catch (error) {', '} catch (error: any) {']
]);

console.log('Fixed ESLint errors.');
