const fs = require('fs');
const path = require('path');
const { GoogleGenAI } = require('@google/genai');

// Ensure the blog directory exists
const BLOG_DIR = path.join(process.cwd(), 'src/content/blog');
if (!fs.existsSync(BLOG_DIR)) {
  fs.mkdirSync(BLOG_DIR, { recursive: true });
}

// Function to generate slug from title
function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

async function generateBlogPost() {
  const apiKey = process.env.GEMINI_API_KEY;
  
  if (!apiKey) {
    console.error('Error: GEMINI_API_KEY environment variable is missing.');
    process.exit(1);
  }

  console.log('Initializing Gemini API...');
  const ai = new GoogleGenAI({ apiKey: apiKey });

  const prompt = `
You are an expert technical writer and software engineering blogger.
Write a compelling, insightful blog post about a random, highly relevant topic in the Tech, IT industry, Artificial Intelligence, or modern Software Engineering.

The output MUST be in raw Markdown format, and it MUST start with YAML frontmatter containing the following fields:
- title (A catchy, professional title)
- date (The current date in YYYY-MM-DD format)
- tags (An array of 3 to 5 relevant string tags)
- excerpt (A short, 1-2 sentence engaging summary)

After the frontmatter, write the body of the blog post. Use appropriate markdown headings (##, ###), bullet points, and code snippets if necessary. The tone should be authoritative but accessible. Ensure the content is at least 500 words long.

Example Frontmatter:
---
title: "The Rise of Agentic AI in Software Architecture"
date: "${new Date().toISOString().split('T')[0]}"
tags: ["AI", "Software Architecture", "Agents"]
excerpt: "Exploring how autonomous agents are redefining the way we build and scale distributed systems."
---

Now, generate the complete blog post:
`;

  try {
    console.log('Generating blog post content...');
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
    });
    
    let text = response.text;
    
    // Clean up potential markdown formatting from the API response
    if (text.startsWith('\`\`\`markdown')) {
      text = text.replace(/^\`\`\`markdown\n/, '').replace(/\n\`\`\`$/, '');
    } else if (text.startsWith('\`\`\`')) {
      text = text.replace(/^\`\`\`\n/, '').replace(/\n\`\`\`$/, '');
    }

    // Extract title from frontmatter to create the filename
    const titleMatch = text.match(/title:\s*"([^"]+)"/);
    if (!titleMatch) {
      throw new Error('Could not parse title from generated frontmatter.');
    }

    const title = titleMatch[1];
    const slug = generateSlug(title);
    const dateStr = new Date().toISOString().split('T')[0];
    const filename = `${dateStr}-${slug}.md`;
    const filepath = path.join(BLOG_DIR, filename);

    fs.writeFileSync(filepath, text, 'utf8');
    console.log(`Successfully generated and saved blog post: ${filepath}`);
    
  } catch (error) {
    console.error('Failed to generate blog post:', error);
    process.exit(1);
  }
}

generateBlogPost();
