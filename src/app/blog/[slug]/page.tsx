import { getAllPosts, getPostBySlug } from '@/services/mdx'
import { marked } from 'marked'
import { notFound } from 'next/navigation'

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

  const htmlContent = marked(post.content)

  return (
    <article className="max-w-4xl mx-auto px-6 py-16 antialiased min-h-screen">
      <h1 className="text-title font-semibold tracking-tight text-gray-darker mb-3">
        {post.title}
      </h1>
      <div className="text-gray-dark text-small mb-12">
        {new Date(post.date).toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric'
        })}
      </div>
      <div 
        className="prose prose-lg max-w-none
          prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-gray-darker
          prose-h1:text-h1 prose-h2:text-h2 prose-h3:text-h3
          prose-p:text-gray-darker prose-p:leading-relaxed prose-p:text-body
          prose-a:text-blue prose-a:no-underline hover:prose-a:underline
          prose-strong:font-semibold prose-strong:text-gray-darker
          prose-ul:my-6 prose-li:my-2 prose-li:text-gray-darker prose-li:text-body
          prose-blockquote:border-l-2 prose-blockquote:border-gray-muted
          prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-dark
          prose-code:text-small prose-code:bg-gray-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
          prose-pre:bg-gray-muted prose-pre:border prose-pre:border-gray-muted
          prose-img:rounded-lg prose-img:shadow-sm"
        dangerouslySetInnerHTML={{ __html: htmlContent }} 
      />
      
      <div className="mt-8 pt-8 border-t border-gray-muted py-2 pb-16">
        <p className="text-gray-dark mb-3">
            Like what you read ? Read more <a href="/blog" className="text-blue">Articles</a>
        </p>
        <a 
          href="https://x.com/intent/follow?screen_name=Gautam__Jain&ref_src=twsrc%5Etfw%7Ctwcamp%5Eembeddedtimeline%7Ctwterm%5Escreen-name%3AGautam__Jain%7Ctwcon%5Es2" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-gray-dark text-white px-3 py-1.5 rounded-lg hover:bg-gray-darker hover:shadow-md transition-all duration-200"
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