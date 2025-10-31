'use client';

import React from 'react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Image from 'next/image';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Financial Dashboard App in NextJS',
      description: 'Built a full-featured dashboard using Next.js, TypeScript, and Tailwind CSS — completed as part of the official Next.js Fundamentals certification.',
      image: '/project/nextjs-dashboard.png',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS','Next-Auth','Zod'],
      liveUrl: 'https://financial-system-steel.vercel.app/',
      githubUrl: 'https://github.com/example/ecommerce',
    },
    {
      title: 'Health Care (Appointment App in NextJs)',
      description: 'Built a Health Care Appointment App with Next.js and Tailwind CSS, leveraging Appwrite for backend services, Zod and React Hook Form for validation, and TanStack Table for data management with Sentry integration for error tracking.',
      image: '/project/health-care.png',
      technologies: ['NextJS', 'Appwrite', 'Tailwind', 'ShadCN','Sentry','React-Hook-Form','tanstack table'],
      liveUrl: 'https://tk-healthcare.vercel.app/',
      githubUrl: 'https://github.com/iamtayyab007/tk-healthcare',
    },
    {
      title: 'Droply (Inspired by Dropbox)',
      description: 'A modern cloud storage platform inspired by Dropbox, built with Next.js and Clerk for authentication. It uses NeonDB (serverless PostgreSQL) for data storage, Tailwind CSS and Hero UI for a sleek and responsive interface, React Hook Form and Zod for robust form validation, ImageKit for optimized file uploads and delivery, and Framer Motion for smooth, engaging animations.',
      image: '/project/droply.png',
      technologies: ['Next.js','NeonDB (Serverless PostgreSQL)','Clerk','Hero UI','Tailwind CSS','React Hook Form','Zod','ImageKit','Framer Motion'],
      liveUrl: 'https://droply-git-main-muhammad-tayyabs-projects-8bad2fa4.vercel.app',
      githubUrl: 'https://github.com/iamtayyab007/droply',
    },
    {
      title: 'Social Media Analytics',
      description: 'A comprehensive analytics dashboard for social media metrics with data visualization, reporting features, and automated insights.',
      image: '/api/placeholder/400/250',
      technologies: ['Vue.js', 'D3.js', 'Python', 'FastAPI', 'Redis'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example/analytics',
    },
    {
      title: 'Recipe Sharing Platform',
      description: 'A community-driven recipe sharing platform where users can create, share, and discover new recipes with rating and review systems.',
      image: '/api/placeholder/400/250',
      technologies: ['Next.js', 'Prisma', 'NextAuth.js', 'Cloudinary'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example/recipes',
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with Next.js and Tailwind CSS, featuring smooth animations and optimized performance.',
      image: '/api/placeholder/400/250',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example/portfolio',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience in web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-lg mb-4 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
                <div className="aspect-video flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-gray-400 dark:text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={250}
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Project Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-3 pt-4">
                  <Button
                    size="sm"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                    className="flex-1"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    Live Demo
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                    className="flex-1"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Code
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open('https://github.com', '_blank')}
          >
            View More Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;