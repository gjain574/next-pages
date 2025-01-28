import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { creatorStackContent } from '@/content/creator-stack';

export const metadata: Metadata = {
    title: 'Creator Stack',
    description: 'Tools I use as a creator',
    icons: {
      icon: '/gj.svg',
      shortcut: '/gj.svg',
      apple: '/gj.svg'
    },
    openGraph: {
      title: '💡 Creator Stack - Gautam Jain', 
      images: '/gj.svg',
      description: 'Tools I use as a creator',
      type: 'website',
    },
};

const Stack = () => {
  const tools = creatorStackContent;

  return (
    <main className="max-w-4xl px-4 sm:px-6 py-8 sm:py-16 antialiased min-h-screen">
        <nav className="flex items-center space-x-2 mb-6 sm:mb-8 text-xs sm:text-sm sticky top-0 backdrop-blur-sm py-4 z-10">
            <Link href="/" className="bg-gray-dark px-2 py-1 rounded-lg text-gray-light truncate max-w-[120px] sm:max-w-[200px] inline-block font-semibold">
            Home
            </Link>
            <span className="text-gray-darker">/</span>
            <span className="text-gray-darker truncate max-w-[120px] sm:max-w-[200px] inline-block">💡 &nbsp;Creator Stack</span>
        </nav>
        <h1 className="text-2xl sm:text-title font-semibold tracking-tight text-gray-darker mb-8">
            Creator Stack
        </h1>
        <div className="prose prose-sm sm:prose-lg max-w-none mb-8 prose-p:text-gray-darker prose-p:leading-relaxed prose-p:text-sm sm:prose-p:text-body">
            <p>
                Tools I use as a creator.
            </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-6 font-semibold w-64 md:text-lg text-gray-darker text-medium">Name</th>
                <th className="text-left py-4 px-6 font-semibold md:text-lg text-gray-darker text-medium">Description</th>
              </tr>
            </thead>
            <tbody>
              {tools.map((tool, i) => (
                <tr 
                  key={i} 
                  className="border-b border-border hover:bg-gray-muted hover:shadow-sm transition-colors text-medium md:text-base"
                >
                  <td className="py-4 px-6">
                    <a 
                      href={`${tool.link}?ref=jaingautam.com`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 hover:text-primary transition-colors"
                    >
                      <Image 
                        src={tool.imageUrl} 
                        alt={tool.name}
                        width={34}
                        height={34}
                        className="rounded-lg object-cover"
                      />
                      <span className="text-gray-darker">{tool.name}</span>
                    </a>
                  </td>
                  <td className="py-4 px-6 text-gray-dark w-full sm:w-auto">{tool.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </main>
    // <div className="min-h-screen">
    //   <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
    //     <h1 className="text-4xl font-bold mb-8"></h1>
    //     <p className="text-lg text-muted-foreground mb-12">
          
    //     </p>
    //   </main>
    // </div>
  );
};

export default Stack;