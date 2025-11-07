import React from 'react';
import Card from '@/components/ui/Card';

const About: React.FC = () => {
  const skills = [
    { name: 'HTML/CSS', level: 90 },
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'React', level: 90 },
    { name: 'Next.js', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'MongoDB', level: 70 },
    { name: 'Zod', level: 85 },
    { name: 'Postman API', level: 90 },
    { name: 'Redux Toolkit', level: 90 },
    { name: 'Appwrite', level: 85 },
    { name: 'ShadCN UI', level: 95 },
    { name: 'Clerk', level: 90 },
  ];

  const coreCompetence = [
    { name: 'Frontend Development' },
    { name: 'Backend Development' },
    { name: 'REST APIs' },
    { name: 'Authentication Systems' },
    { name: 'State Management (Context API, Redux Toolkit)' },
    { name: 'Responsive UI Design' },
    { name: 'Database Design and Management' },
    { name: 'Problem Solving' },
  ];

  const experiences = [
    {
      title: 'Self Employed',
      period: 'Previous Experience',
      description:
        "Wordpress Development | Google Seo Specialist | Blogging"
    },
    {
      title: 'Present Experience',
      description:
        "Full Stack (MERN) Developer (React + Next.js + Typescript)"
    },
    
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Passionate developer with a love for creating innovative solutions and beautiful user experiences.
          </p>
        </div>

        {/* About & Skills Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* About Text */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              My Story
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                I'm a passionate full-stack developer with over 4 years of experience in creating
                web applications that solve real-world problems. My journey in tech started with
                curiosity about how websites work, and it has evolved into a career focused on
                building scalable, user-friendly applications.
              </p>
              <p>
                I specialize in modern JavaScript frameworks, particularly React and Next.js,
                and I'm experienced in both frontend and backend development. I believe in
                writing clean, maintainable code and staying up-to-date with the latest
                industry trends and best practices.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing
                to open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Skills & Technologies
            </h3>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Competence */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
            Core Competencies
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {coreCompetence.map((item) => (
              <div
                key={item.name}
                className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg text-center text-gray-700 dark:text-purple-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Professional Experience
          </h3>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} hover={false}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {exp.title}
                    </h4>
                    {/* <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {exp.company}
                    </p> */}
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400">{exp.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
