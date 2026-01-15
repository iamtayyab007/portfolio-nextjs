'use client';

import React from 'react';
import Card from '@/components/ui/Card';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: 'The Complete JavaScript Course 2024: From Zero to Hero',
      issuer: 'Udemy',
      date: '2024',
      certificateURL: 'https://www.udemy.com/certificate/UC-ff6f284c-9271-4922-a5bf-56cd5113befd/',
      description:
        'Comprehensive, hands-on mastery of modern JavaScript including ES6+, DOM manipulation, asynchronous programming (Promises, async/await), data structures, OOP & functional patterns, modules, tooling, and real-world projects.',
      logo: (
        <img src="/Project/udemy-logo.png" alt="Udemy" className="w-10 h-10 invert-0" />
      ),
      skills: [
        'JavaScript',
        'ES6+',
        'DOM',
        'Async/Await',
        'Promises',
        'OOP',
        'Functional Programming',
        'Modules',
        'Tooling'
      ]
    },
    {
      title: 'Javascript Programming Essentials',
      issuer: 'Coursera',
      date: '2025',
      certificateURL: 'https://coursera.org/share/96df6f9eb519851c2ef8e8d76dbb6438',
      description:
        'This course introduces the core concepts of JavaScript development, covering modern ES6 features, key data structures, and DOM manipulation. Learn to use functions, events, and error-handling techniques while exploring arrays, AJAX, and debugging. Understand promises, async/await, and how to dynamically modify and style DOM elements. By the end, you’ll be able to build interactive, data-driven web pages using JavaScript’s essential tools, libraries, and services.',
      logo: (
        <img src="/Project/coursera-logo.png" alt="Udemy" className="w-10 h-10 invert-0" />
      ),
      skills: [
        'Software Development',
        'Git (Version Control System)',
        'Ajax',
        'Javascript',
        'Event-Driven Programming',
        'OOP (Object Oriented Programming)',
        'Debugging',
        'Json',
        'Web Development',
        'Computer Programming'
      ]
    },
    {
      title: 'React- The complete guide 2025 (Incl. NextJS, Redux)',
      issuer: 'Udemy',
      date: '2025',
       certificateURL: 'https://www.udemy.com/certificate/UC-c1f0f068-6576-4b45-988a-f6206821bd74/',
      description: 'This course is a complete guide to React.js, starting with the basics and taking you to advanced concepts. Learn to build dynamic, interactive, and high-performance applications using React, React Hooks, Redux, and Next.js. Gain hands-on experience with component design, state management, forms, routing, authentication, animations, unit testing, and fullstack app development. With practical projects, real-world examples, and no prior React knowledge required, you’ll finish as a confident React developer ready to build and deploy modern web applications.',
      logo:(<img src="/Project/udemy-logo.png" alt="Udemy" className="w-10 h-10 invert-0" />),
      skills: [
  'React.js',
  'React Hooks',
  'Redux & Redux Toolkit',
  'Next.js',
  'JavaScript',
  'TypeScript',
  'Front-end Development',
  'UI/UX Design',
  'React Router',
  'State Management',
  'Unit Testing',
  'Styled Components',
  'HTTP & API Integration',
  'Authentication',
  'Animations'
]

    },
   {
  title: 'JavaScript Fullstack Capstone Project',
  issuer: 'Coursera',
  date: '2025',
  credentialUrl: 'https://coursera.org/share/2e8172055e0707d8af6c4cb9f7050a26',
  description: 'Developed a full-stack web application integrating front-end and back-end technologies using JavaScript, React, Node.js, Express, and MongoDB. Applied DevOps and Agile practices by implementing CI/CD pipelines and creating user stories. Deployed the application on the cloud using containerization and serverless technologies, demonstrating proficiency in modern web development and deployment workflows.',
  logo:  <img src="/Project/coursera-logo.png" alt="Udemy" className="w-10 h-10 invert-0" />,
  skills: [
    'JavaScript',
    'React.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Full-Stack Web Development',
    'Front-End Development',
    'Back-End Development',
    'Cloud Development',
    'CI/CD',
    'Kubernetes',
    'Application Deployment',
    'Database Management',
    'NoSQL',
    'DevOps',
    'Software Architecture',
    'Application Design'
  ]
},

    {
  title: 'Developing Frontend Apps with React',
  issuer: 'Coursera',
  date: '2025',
  credentialUrl: 'https://coursera.org/share/049d32bb2738e27991dcbbced99cee86',
  description: 'Gained hands-on experience in developing interactive and dynamic front-end web applications using React, JSX, and modern JavaScript (ES6). Built reusable UI components, managed state with hooks and Redux, and implemented forms and event-driven functionality. Demonstrated React proficiency by creating projects such as a shopping cart while applying best practices in front-end and full-stack development.',
  logo: <img src="/Project/coursera-logo.png" alt="Udemy" className="w-10 h-10 invert-0" />,
  skills: [
    'React.js',
    'React Redux',
    'JavaScript',
    'JSX',
    'Hooks',
    'Front-End Web Development',
    'Full-Stack Web Development',
    'Event-Driven Programming',
    'UI Components',
    'Web Applications',
    'Web Development',
    'Data Structures',
    'Cascading Style Sheets (CSS)',
    'JavaScript Frameworks'
  ]
},
   {
  title: 'Developing Back-End Apps with Node.js and Express',
  issuer: 'Coursera',
  date: '2025',
  credentialUrl: 'https://coursera.org/share/a773dfe11d43d56ee663534fc76f434e',
  description: 'Developed and deployed server-side applications using the Node.js runtime environment. Utilized npm for package management, integrated third-party libraries and frameworks such as Express, and implemented RESTful APIs for web and cloud applications. Gained hands-on experience with asynchronous programming using callbacks and promises, focusing on scalable, efficient, and secure back-end development.',
  logo: <img src="/Project/coursera-logo.png" alt="Udemy" className="w-10 h-10 invert-0" />,
  skills: [
    'Node.js',
    'Express',
    'JavaScript',
    'Server-Side Development',
    'Web Servers',
    'RESTful API',
    'JSON',
    'Full-Stack Web Development',
    'Back-End Web Development',
    'Cloud Applications',
    'Authentication',
    'Web Applications',
    'Computer Science'
  ]
},

   
  ];

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-green-500 mb-4 animate-fade-in-up">
            Certifications & Achievements
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in-up">
            Professional certifications that validate my expertise in modern technologies and best practices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Card 
              key={cert.credentialUrl ?? cert.title}
              className="group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-bl-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {cert.logo}
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                    {cert.date}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {cert.title}
                </h3>
                
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                  {cert.issuer}
                </p>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  {cert.certificateURL ? (
                    <a
                      href={cert.certificateURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
                    >
                      <span className="mr-1">View Certificate</span>
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 3h7v7M21 3l-9 9M3 21l9-9" />
                      </svg>
                    </a>
                  ) : (
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Credential ID: <span className="font-mono">{cert.credentialUrl}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center justify-center p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl animate-fade-in-up">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Continuous Learning
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Always expanding my knowledge and staying current with industry trends
              </p>
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                  Currently pursuing: Navttc Fullstack Javascript Course
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;