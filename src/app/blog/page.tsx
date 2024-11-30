import { getAllPosts } from '@/services/mdx'
import PostCard from '@/components/blog/PostCard'
import Link from 'next/link'

export default function BlogIndex() {
  const posts = getAllPosts()

  return (
    <div className="max-w-4xl px-4 sm:px-6 py-8 sm:py-16 antialiased min-h-screen">
      <nav className="flex items-center space-x-2 mb-6 sm:mb-8 text-xs sm:text-sm sticky top-0 backdrop-blur-sm py-4 z-10">
        <Link href="/" className="bg-gray-dark px-2 py-1 rounded-lg text-gray-light truncate max-w-[120px] sm:max-w-[200px] inline-block font-semibold">
          Home
        </Link>
        <span className="text-gray-darker">/</span>
        <span className="text-gray-darker truncate max-w-[120px] sm:max-w-[200px] inline-block">🖋️ &nbsp;Blog</span>
      </nav>

      <h1 className="text-2xl sm:text-title font-semibold tracking-tight text-gray-darker mb-8">
        Blog Posts
      </h1>
      
      <div className="prose prose-sm sm:prose-lg max-w-none mb-12
        prose-p:text-gray-darker prose-p:leading-relaxed prose-p:text-sm sm:prose-p:text-body">
        <p>
          Welcome to my collection of thoughts and observations, shaped by my experiences across diverse roles - from full-time positions and contract work to trading and investing. These writings explore patterns and insights gained through both hard-won lessons and setbacks.
        </p>
        <p>
          I hope these reflections not only serve as a personal repository of learnings, but also offer valuable perspectives to others navigating their own unique journeys.
        </p>
      </div>

      <div className="grid gap-6">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
} 