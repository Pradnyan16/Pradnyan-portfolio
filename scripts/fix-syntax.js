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

// Revert the JSON array syntax errors
replaceFile('src/components/Feedback.tsx', [
  ['quote: &quot;Working with', 'quote: "Working with'],
  ['digital presence.&quot;,', 'digital presence.",'],
  ['quote: &quot;Incredible attention', 'quote: "Incredible attention'],
  ['exceeded our expectations.&quot;,', 'exceeded our expectations.",'],
  ['"{item.quote}"', '&quot;{item.quote}&quot;']
]);

replaceFile('src/components/Testimonials.tsx', [
  ['quote: &quot;Working with Pradnyan', 'quote: "Working with Pradnyan'],
  ['vision to life.&quot;,', 'vision to life.",'],
  ['"{testimonial.quote}"', '&quot;{testimonial.quote}&quot;']
]);

console.log('Fixed syntax errors.');
