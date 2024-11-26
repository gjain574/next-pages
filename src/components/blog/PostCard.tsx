import Link from 'next/link'
import type { BlogPost } from '@/services/mdx'

interface PostCardProps {
  post: Omit<BlogPost, 'content'>
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <Link 
        href={`/blog/${post.slug}`}
        className="block"
      >
        <h2 className="text-2xl font-bold mb-2 hover:text-blue-600">
          {post.title}
        </h2>
        <div className="text-gray-600 text-sm mb-4">
          {new Date(post.date).toLocaleDateString()}
        </div>
        <p className="text-gray-700">
          {post.excerpt}
        </p>
        {post.tags && (
          <div className="mt-4 flex gap-2">
            {post.tags.map(tag => (
              <span 
                key={tag}
                className="px-2 py-1 bg-gray-100 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </Link>
    </article>
  )
} 