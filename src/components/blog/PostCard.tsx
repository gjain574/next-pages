import Link from 'next/link'
import type { BlogPost } from '@/services/mdx'

interface PostCardProps {
  post: Omit<BlogPost, 'content'>
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="p-4 md:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <Link 
        href={`/blog/${post.slug}`}
        className="block"
      >
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-body md:text-h3 font-bold hover:text-blue-600">
          🖋️ &nbsp;{post.title}
          </h3>
          <div className="text-gray-600 text-sm flex items-center hidden md:flex">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block text-gray-dark mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {new Date(post.date).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            })}
          </div>
        </div>
        <p className="text-small md:text-body text-gray-700">
          {post.excerpt}
        </p>
      </Link>
    </article>
  )
} 