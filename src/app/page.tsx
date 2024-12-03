import { getAllPosts } from '@/services/mdx';
import PostCard from '@/components/blog/PostCard';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gautam Jain',
  description: 'Full-stack developer and UI/UX designer who loves building products. Experienced with Node.js and React, focusing on Chrome extensions and browser ecosystem.',
  icons: {
    icon: '/gj.svg',
    shortcut: '/gj.svg',
    apple: '/gj.svg'
  },
  openGraph: {
    title: 'Gautam Jain - Full-stack Developer & UI/UX Designer', 
    images: '/gj.svg',
    description: 'Full-stack developer and UI/UX designer who loves building products. Experienced with Node.js and React, focusing on Chrome extensions and browser ecosystem.',
    type: 'website',
  },
};

export default function Home() {
  // Get latest 3 posts
  const latestPosts = getAllPosts()
    .slice(0, 3);

  return (
    <main className="max-w-4xl px-4 sm:px-6 py-8 sm:py-16 antialiased min-h-screen">
      <nav className="flex items-center space-x-2 mb-6 sm:mb-8 text-xs sm:text-sm sticky top-0 backdrop-blur-sm py-4 z-10">
          <Link href="/" className="bg-gray-dark px-2 py-1 rounded-lg text-gray-light truncate max-w-[120px] sm:max-w-[200px] inline-block font-semibold">
          Home
          </Link>
          <span className="text-gray-darker">/</span>
          <span className="text-gray-darker truncate max-w-[120px] sm:max-w-[200px] inline-block">👋 &nbsp;About Me</span>
      </nav>

      <h1 className="text-2xl sm:text-title font-semibold tracking-tight text-gray-darker mb-8">
        About Me
      </h1>
      <div className="prose prose-sm sm:prose-lg max-w-none mb-8 prose-p:text-gray-darker prose-p:leading-relaxed prose-p:text-sm sm:prose-p:text-body">
        <p>
          Hi, I&apos;m Gautam Jain, a full-stack developer and UI/UX designer who loves building products.
          While I primarily work with Node.js and React, I believe in choosing the right tools for each
          unique challenge. I enjoy crafting solutions that combine robust functionality with
          thoughtful design.
        </p>
      </div>
      
      <div className="my-12">
        <h3 className="text-body md:text-h3 font-semibold md:font-normal mb-3 md:mb-4">
          Current Focus
        </h3>
        <p className="text-sm md:text-body text-gray-800 leading-relaxed bg-white p-4 md:p-6 rounded-lg shadow-sm">
          Currently focused on building Chrome extensions and exploring the browser extension ecosystem. Learning and sharing my journey in public.
        </p>
      </div>

      <div className="flex justify-between items-center mb-3 md:mb-4">
        <h3 className="text-body md:text-h3 font-semibold md:font-normal">
          Latest Articles
        </h3>
        <Link 
            href="/blog" 
            className="text-sm md:text-body text-blue-600 hover:text-blue-700 transition-colors flex items-center space-x-1 group"
          >
            <span>View all posts</span>
            <span className="group-hover:translate-x-0.5 transition-transform">→</span>
        </Link>
      </div>

      <div className="grid gap-6">
        {latestPosts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </main>
  );
}