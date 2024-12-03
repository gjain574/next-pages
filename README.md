# Personal Portfolio & Blog

A modern portfolio website built with Next.js, TypeScript, and Tailwind CSS, showcasing my professional skills, projects, and technical blog posts.

## Project Purpose

This project serves as:
- A professional portfolio to showcase technical skills and projects
- A technical blog platform for sharing knowledge and insights
- A demonstration of modern web development practices
- A personal brand website

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: Markdown files for blog posts
- **Deployment**: [Your deployment platform]

## Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── blog/              # Blog section routes
│   ├── skills/            # Skills showcase routes
│   ├── portfolio/         # Portfolio section routes
│   └── page.tsx           # Homepage
├── components/            # Reusable UI components
│   ├── blog/             # Blog-specific components
│   ├── skills/           # Skills-specific components
│   └── portfolio/        # Portfolio-specific components
├── content/              # Static content and data
│   ├── blog/            # Blog post markdown files
│   ├── skills.ts        # Skills data
│   └── portfolio.ts     # Portfolio data
├── services/            # Data fetching and processing
│   ├── blog.ts         # Blog-related services
│   └── skills.ts       # Skills-related services
└── types/              # TypeScript type definitions
    ├── blog.ts
    └── skills.ts
```

## Key Features

- 🎯 **Skills Showcase**: Visual representation of technical skills and proficiency levels
- 📝 **Technical Blog**: Markdown-based blog posts about technical topics
- 💼 **Portfolio**: Showcase of projects and professional work
- 🎨 **Modern Design**: Clean, responsive interface using Tailwind CSS
- ⚡ **Performance**: Optimized for speed and SEO
- 📱 **Responsive**: Mobile-first design approach

## Getting Started

1. Clone the repository:
```bash
git clone [your-repo-url]
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Organization

### `/app`
Contains all the routes and pages using Next.js App Router.

### `/components`
Reusable UI components organized by feature/section.

### `/content`
Static content including:
- Blog posts in markdown format
- Skills and expertise data
- Other static content

### `/services`
Data fetching and processing logic:
- Blog post retrieval and processing
- Skills data management
- Other data-related services

### `/types`
TypeScript type definitions for:
- Blog post structure
- Skills data
- Component props
- Other type definitions

## Contributing

[Your contribution guidelines if applicable]

## License

[Your chosen license]

## Contact

[Your contact information]
