import { getAllPosts } from '@/services/mdx'
import PostCard from '@/components/blog/PostCard'

export default function BlogIndex() {
  const posts = getAllPosts().map(({ content, ...rest }) => rest)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
      
      <div className="prose prose-slate mb-12">
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