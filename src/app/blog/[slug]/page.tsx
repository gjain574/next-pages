import { getAllPosts, getPostBySlug } from '@/services/mdx'
import { marked } from 'marked'
import { notFound } from 'next/navigation'

interface BlogPostProps {
  params: {
    slug: string
  }
}

export default function BlogPost({ params }: BlogPostProps) {
  const post = getPostBySlug(params.slug)
  
  if (!post) {
    notFound()
  }

  const htmlContent = marked(post.content)

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="text-gray-600 mb-8">
        {new Date(post.date).toLocaleDateString()}
      </div>
      <div 
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: htmlContent }} 
      />
    </article>
  )
}

export function generateStaticParams() {
  const posts = getAllPosts()
  
  return posts.map((post) => ({
    slug: post.slug,
  }))
} 