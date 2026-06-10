import { getAllPosts } from '@/lib/mdx';
import BlogCard from '@/components/BlogCard';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-[#000000] text-white selection:bg-white selection:text-black pt-24 px-6 md:px-12 pb-24">
      <div className="max-w-6xl mx-auto">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-12 font-mono text-xs uppercase tracking-widest"
        >
          <ArrowLeft size={14} />
          Back to Portfolio
        </Link>
        
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6 leading-[1.1]">
          Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-700">Insights</span>
        </h1>
        <p className="text-xl text-zinc-400 font-medium max-w-2xl mb-16">
          Exploring the bleeding edge of artificial intelligence, software engineering, and the future of technology.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <BlogCard 
              key={post.slug} 
              slug={post.slug} 
              meta={post.meta} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}
