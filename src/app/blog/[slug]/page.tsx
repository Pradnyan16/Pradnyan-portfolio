import { getPostBySlug, getPostSlugs } from '@/lib/mdx';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({
    slug: slug.replace(/\.md$/, ''),
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  let post;
  try {
    post = getPostBySlug(resolvedParams.slug);
  } catch (error) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-transparent text-black dark:text-white selection:bg-white selection:text-black pt-24 px-6 md:px-12 pb-24">
      <div className="max-w-3xl mx-auto">
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors mb-12 font-mono text-xs uppercase tracking-widest"
        >
          <ArrowLeft size={14} />
          Back to Blog
        </Link>
        
        <div className="mb-12 border-b border-black/10 dark:border-white/10 pb-12">
          <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-500 font-mono mb-6">
            <span className="flex items-center gap-1">
              <Calendar size={14} />
              {new Date(post.meta.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })}
            </span>
            <span className="hidden sm:inline">::</span>
            <div className="flex gap-2">
              {post.meta.tags.map(tag => (
                <span key={tag} className="flex items-center gap-1 bg-black/5 dark:bg-white/5 px-2 py-1 uppercase tracking-wider text-[10px]">
                  <Tag size={10} />
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[1.1] mb-6">
            {post.meta.title}
          </h1>
          
          <p className="text-xl text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed">
            {post.meta.excerpt}
          </p>
        </div>

        <div className="prose prose-invert prose-lg max-w-none prose-h2:text-3xl prose-h2:font-black prose-h2:uppercase prose-h2:tracking-tighter prose-h2:mt-16 prose-h3:text-2xl prose-h3:font-bold prose-p:text-zinc-300 prose-p:leading-relaxed prose-a:text-white prose-a:underline-offset-4 hover:prose-a:text-zinc-300 transition-colors">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </div>
    </article>
  );
}
