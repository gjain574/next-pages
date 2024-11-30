'use client'

import { marked } from 'marked'
import Gist from './Gist'

interface BlogContentProps {
  content: string
}

export default function BlogContent({ content }: BlogContentProps) {
  const segments = content.split(/(gist:[\w\d]+\/[\w\d]+(?:#[\w\s-]+)*)/g).map((segment, index) => {
    const gistMatch = segment.match(/^gist:([\w\d]+\/[\w\d]+(?:#[\w\s-]+)*)$/)
    
    if (gistMatch) {
      return {
        type: 'gist',
        content: gistMatch[1],
        key: `gist-${index}`
      }
    }
    
    return {
      type: 'markdown',
      content: segment,
      key: `markdown-${index}`
    }
  })

  return (
    <div
      className="prose prose-sm sm:prose-lg max-w-none
      prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-gray-darker
      prose-h1:text-xl sm:prose-h1:text-h1 
      prose-h2:text-lg sm:prose-h2:text-h2 
      prose-h3:text-base sm:prose-h3:text-h3
      prose-p:text-gray-darker prose-p:leading-relaxed prose-p:text-sm sm:prose-p:text-body
      prose-a:text-blue prose-a:no-underline hover:prose-a:underline
      prose-strong:font-semibold prose-strong:text-gray-darker
      prose-ul:my-4 sm:prose-ul:my-6 prose-li:my-1 sm:prose-li:my-2 prose-li:text-gray-darker prose-li:text-sm sm:prose-li:text-body
      prose-blockquote:border-l-2 prose-blockquote:border-gray-muted
      prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-dark
      prose-code:text-xs sm:prose-code:text-small prose-code:bg-gray-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
      prose-pre:bg-gray-muted prose-pre:border prose-pre:border-gray-muted
      prose-img:rounded-lg prose-img:shadow-sm"
    >
      {segments.map(segment => {
        if (segment.type === 'gist') {
          return <Gist key={segment.key} id={segment.content} />
        }
        
        if (segment.content.trim()) {
          return (
            <div
              key={segment.key}
              dangerouslySetInnerHTML={{ 
                __html: marked(segment.content) 
              }}
            />
          )
        }
        
        return null
      })}
    </div>
  )
} 