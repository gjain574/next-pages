'use client'

import { useEffect } from 'react'

interface GistProps {
  id: string
}

export default function Gist({ id }: GistProps) {
  useEffect(() => {
    const gistEl = document.getElementById(`gist-${id}`)
    if (!gistEl) return
    
    // Check if script already exists
    const existingScript = gistEl.querySelector('script')
    if (existingScript) return

    const script = document.createElement('script')
    script.src = `https://gist.github.com/${id}.js`
    gistEl.appendChild(script)

    return () => {
      gistEl.removeChild(script)
    }
  }, [id])

  return <div id={`gist-${id}`} className="gist-container" />
}