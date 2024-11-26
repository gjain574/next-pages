"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Sidebar = () => {
    const pathname = usePathname();

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
          <path d="M13.6 13.4675L7.2 7.0675V13.4675H13.6ZM16.8 10.2675C16.8 13.8675 13.8857 16.8675 10.2 16.8675C6.51429 16.8675 3.6 13.8675 3.6 10.2675C3.6 6.6675 6.51429 3.6675 10.2 3.6675C13.8857 3.6675 16.8 6.6675 16.8 10.2675ZM20.4 10.2675C20.4 4.66754 15.8571 0.267542 10.2 0.267542C4.54286 0.267542 0 4.66754 0 10.2675C0 15.8675 4.54286 20.2675 10.2 20.2675C15.8571 20.2675 20.4 15.8675 20.4 10.2675Z" />
        ),
        color: "black",
        title: "x"
      }
    ];
  
    const menuItems = [
      { href: "/", text: "About me" },
      { href: "/blog", text: "Articles" },
      { href: "/skills", text: "My Skills" },
      { href: "/projects", text: "Projects" },
      { href: "/design", text: "Design" }
    ];
  
    return (
      <div className="w-full md:w-72 lg:w-96 fixed h-screen bg-gradient-to-b from-gray-50 to-white border-r border-gray-100 
        md:relative overflow-y-auto">
        <div className="p-4 md:p-8 md:px-12">
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center mb-8">
              <Link href="/" className="mb-4 transform hover:scale-105 transition-transform duration-200">
                <Image 
                  src="/images/gj.jpg" 
                  className="rounded-full w-24 h-24 ring-2 ring-gray-100 shadow-md"
                  width="96"
                  height="96" 
                  alt="Gautam Jain"
                />
              </Link>
              
              <div className="flex gap-3 mb-4">
                {socialLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    className="hover:opacity-80 transition-all duration-200 hover:-translate-y-1"
                    rel="noopener noreferrer"
                    target="_blank"
                    style={{color: link.color}}
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <title>{link.title}</title>
                      {link.icon}
                    </svg>
                  </a>
                ))}
              </div>
            </div>
  
            <h1 className="text-2xl font-bold mb-2 text-gray-800">
              <Link href="/" className="hover:text-blue-600 transition-colors">Gautam Jain</Link>
            </h1>
            
            <span className="text-gray-600 font-medium mb-4">
              Full Stack Developer | UI/UX Designer
            </span>
  
            <p className="text-sm text-gray-500 mb-10 leading-relaxed">
              I like building products, mashing datasets. Interests include networks, history, fintech and product design.
            </p>
          </div>
  
          <nav className="mb-10">
            <ul className="space-y-1">
              {menuItems.map((item, i) => (
                <li key={i}>
              <a 
                href={item.href}
                className={`block px-4 py-2.5 rounded-lg transition-all duration-200 font-medium
                  ${pathname === item.href 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
  
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl mb-8 shadow-sm">
            <h3 className="font-semibold mb-2 text-gray-800">Contact Me 📧</h3>
            <p className="text-sm text-gray-600 mb-4">
              Feel free to reach me out
            </p>
            <a 
              href="mailto:gj.loop8@gmail.com"
              className="block w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition-colors text-center"
            >
              gj.loop8@gmail.com
            </a>
          </div>
        </div>
      </div>
    );
  }
  
  export default Sidebar;
  