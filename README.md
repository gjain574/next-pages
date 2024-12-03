# Personal Portfolio & Blog

A modern portfolio website built with Next.js, TypeScript, and Tailwind CSS, showcasing my professional skills, projects, and technical blog posts.

## Project Purpose

This project serves as:
- A professional portfolio to showcase technical skills and projects
- A technical blog platform for sharing knowledge and insights

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- Markdown files for blog posts

## Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── blog/               # Blog section routes
│   ├── skills/             # Skills showcase routes
│   ├── portfolio/          # Portfolio section routes
│   └── page.tsx            # Homepage
├── components/             # Reusable UI components
│   ├── blog/               # Blog-specific components
│   ├── skills/             # Skills-specific components
│   └── portfolio/          # Portfolio-specific components
├── content/                # Static content and data
│   ├── blog/               # Blog post markdown files
│   ├── skills.ts           # Skills data
│   └── portfolio.ts        # Portfolio data
├── services/               # Data fetching and processing
│   ├── blog.ts             # Blog-related services
│   └── skills.ts           # Skills-related services
├── types/                  # TypeScript type definitions
│   ├── blog.ts             # Blog-related type definitions
│   └── skills.ts           # Skills-related type definitions
```

## Key Features

- 🎯 **Skills Showcase**: Visual representation of technical skills
- 📝 **Technical Blog**: Markdown-based blog posts
- 💼 **Portfolio**: Showcase of portfolio projects 
- 🎨 **Design Showcase**: Showcases of my design work

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/gjain574/next-pages
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
- Projects data
- Design showcases

### `/services`
Data fetching and processing logic:
- Blog post retrieval and processing
- Skills data management
- Projects data management

### `/types`
TypeScript type definitions