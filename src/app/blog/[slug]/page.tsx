import { getAllPosts, getPostBySlug } from '@/services/mdx'
import { notFound } from 'next/navigation'
import BlogContent from '@/components/blog/BlogContent'

interface BlogPostProps {
  params: {
    slug: string
  }
}

export default async function BlogPost({ params }: BlogPostProps) {
  const awaitedParams = await params;
  const post = await getPostBySlug(awaitedParams.slug)
  
  if (!post) {
    notFound()
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-16 antialiased min-h-screen">
      <nav className="flex items-center space-x-2 mb-6 sm:mb-8 text-xs sm:text-sm sticky top-0 backdrop-blur-sm py-4 z-10">
        <a href="/blog" className="bg-gray-dark px-2 py-1 rounded-lg text-gray-light truncate max-w-[120px] sm:max-w-[200px] inline-block hover:bg-gray-darker hover:text-gray-light hover:shadow-md transition-all duration-200 font-semibold">
          🖋️ &nbsp;Blog
        </a>
        <span className="text-gray-dark">/</span>
        <span className="text-gray-darker truncate max-w-[120px] sm:max-w-[200px] inline-block">{post.title}</span>
      </nav>

      <h1 className="text-2xl sm:text-title font-semibold tracking-tight text-gray-darker mb-3">
        {post.title}
      </h1>
      <div className="text-gray-dark text-xs sm:text-small mb-8 sm:mb-12">
        {new Date(post.date).toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric'
        })}
      </div>

      <BlogContent content={post.content} />
      
      <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-muted py-2 pb-12 sm:pb-16">
        <p className="text-sm sm:text-base text-gray-dark mb-3">
            Like what you read ? Read more <a href="/blog" className="text-blue">Articles</a>
        </p>
        <a 
          href="https://x.com/intent/follow?screen_name=Gautam__Jain&ref_src=twsrc%5Etfw%7Ctwcamp%5Eembeddedtimeline%7Ctwterm%5Escreen-name%3AGautam__Jain%7Ctwcon%5Es2" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm sm:text-base bg-gray-dark text-white px-3 py-1.5 rounded-lg hover:bg-gray-darker hover:shadow-md transition-all duration-200"
        >
          Follow me on X
        </a>
      </div>
    </article>
  )
}

export async function generateMetadata({ params }: BlogPostProps) {
  const awaitedParams = await params;
  const post = await getPostBySlug(awaitedParams.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
    },
  }
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  
  return posts.map((post) => ({
    slug: post.slug,
  }))
} 