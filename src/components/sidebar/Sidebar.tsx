"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Sidebar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const socialLinks = [
    {
      href: "https://x.com/Gautam__Jain",
      icon: (
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      ),
      color: "black",
      title: "x"
    },
    {
      href: "https://github.com/gjain574",
      icon: (
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      ),
      color: "black",
      title: "github"
    },
    {
      href: "https://www.linkedin.com/in/gautam--jain",
      icon: (
        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
      ),
      color: "rgb(0, 119, 181)",
      title: "linkedin"
    },
    {
      href: "https://www.producthunt.com/@Gautam__Jain",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 40 40" className="w-6 h-6">
          <g fill="black" fillRule="evenodd">
            <path fill="#black" d="M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0s20 8.954 20 20"></path>
            <path fill="#fff" d="M22.667 20H17v-6h5.667a3 3 0 0 1 0 6m0-10H13v20h4v-6h5.667a7 7 0 1 0 0-14"></path>
          </g>
        </svg>
      ),
      color: "black",
      title: "x"
    }
  ];
  
  const menuItems = [
    { href: "/", text: "About me", icon: "👋" },
    { href: "/blog", text: "Blog Posts", icon: "🖋️" },
    { href: "/skills", text: "My Skills", icon: "💪" },
    { href: "/projects", text: "Projects", icon: "🛠️" },
    { href: "/design", text: "Design", icon: "🎨" },
    { href: "/creator-stack", text: "Creator Stack", icon: "💡" }
  ];
  
  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-8 right-8 z-50 p-2 bg-gray-light rounded-lg border border-gray-muted text-gray-darker"
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {/* Sidebar Container */}
      <div className={`
        fixed inset-0 z-40 bg-white border-r border-gray-muted
        md:relative md:w-72 lg:w-96 
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        transition-transform duration-300 ease-in-out
      `}>
        <div className="h-full overflow-y-auto">
          <div className="p-8 md:p-12">
            {/* Profile Section */}
            <div className="flex flex-col items-center pt-8 md:pt-4">
              <div className="flex flex-col items-center mb-6">
                <Link 
                  href="/" 
                  className="mb-6 transform hover:scale-105 transition-transform duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <Image 
                    src="/images/gj.jpg" 
                    className="rounded-full w-20 h-20 md:w-24 md:h-24 ring-2 ring-gray-muted shadow-md"
                    width="96"
                    height="96" 
                    alt="Gautam Jain"
                  />
                </Link>
                
                <div className="flex gap-4 mb-4 justify-center items-center">
                  {socialLinks.map((link, i) => (
                    <a
                      key={i}
                      href={link.href}
                      className="text-gray-darker hover:opacity-80 transition-all duration-200 hover:-translate-y-1 hover:bg-gray-muted rounded-full p-2"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24">
                        <title>{link.title}</title>
                        {link.icon}
                      </svg>
                    </a>
                  ))}
                </div>
              </div>

              <h1 className="text-h3 md:text-h2 font-semibold mb-4 text-gray-darker">
                <Link 
                  href="/" 
                  className="hover:text-blue transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Gautam Jain
                </Link>
              </h1>
              
              <span className="text-medium md:text-medium text-gray-dark font-medium mb-6 text-center">
                Full Stack Developer | UI/UX Designer
              </span>

              <p className="text-medium text-gray-dark mb-8 leading-relaxed text-center">
                I like building products, mashing datasets. Interests include networks, history, fintech and product design.
              </p>
            </div>

            {/* Navigation Menu */}
            <nav className="mb-8">
              <ul className="space-y-1">
                {menuItems.map((item, i) => (
                  <li key={i}>
                    <a 
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-2 rounded-lg transition-all duration-200 font-medium text-medium
                        ${pathname === item.href 
                          ? 'text-blue bg-blue-light' 
                          : 'text-gray-dark hover:text-gray-darker hover:bg-gray-muted'
                        }`}
                    >
                      {item.icon}
                      &nbsp;
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Contact Card */}
            <div className="bg-blue-light p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-3 text-gray-darker text-medium">
                Contact Me 📧
              </h3>
              <p className="text-medium text-gray-dark mb-4">
                Feel free to reach me out
              </p>
              <a 
                href="mailto:gj.loop8@gmail.com"
                className="block w-full bg-blue text-gray-light py-3 rounded-lg hover:bg-blue-dark transition-colors text-center text-small"
              >
                gj.loop8@gmail.com
              </a>
            </div>

            {/* Bottom Padding Container */}
            <div className="h-8 md:h-12" />
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-gray-darker bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

export default Sidebar;
  