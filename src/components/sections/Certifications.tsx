'use client';

import React from 'react';
import Card from '@/components/ui/Card';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      credentialId: 'AWS-SAA-2023-001',
      description: 'Demonstrated expertise in designing distributed systems on AWS platform with focus on scalability, security, and cost optimization.',
      logo: '🏆',
      skills: ['AWS', 'Cloud Architecture', 'Security', 'Scalability']
    },
    {
      title: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      date: '2023',
      credentialId: 'GCP-PD-2023-002',
      description: 'Certified in developing scalable and reliable applications on Google Cloud Platform using best practices.',
      logo: '☁️',
      skills: ['GCP', 'Kubernetes', 'DevOps', 'Microservices']
    },
    {
      title: 'Microsoft Azure Fundamentals',
      issuer: 'Microsoft',
      date: '2022',
      credentialId: 'AZ-900-2022-003',
      description: 'Foundational knowledge of cloud services and how they are provided with Microsoft Azure.',
      logo: '🔷',
      skills: ['Azure', 'Cloud Computing', 'SaaS', 'IaaS']
    },
    {
      title: 'React Developer Certification',
      issuer: 'Meta',
      date: '2023',
      credentialId: 'META-REACT-2023-004',
      description: 'Advanced React development skills including hooks, context, performance optimization, and testing.',
      logo: '⚛️',
      skills: ['React', 'JavaScript', 'Frontend', 'Testing']
    },
    {
      title: 'Node.js Application Developer',
      issuer: 'OpenJS Foundation',
      date: '2022',
      credentialId: 'NODEJS-AD-2022-005',
      description: 'Expertise in building scalable server-side applications using Node.js and related technologies.',
      logo: '🟢',
      skills: ['Node.js', 'Express', 'MongoDB', 'API Development']
    },
    {
      title: 'Certified Kubernetes Administrator',
      issuer: 'Cloud Native Computing Foundation',
      date: '2023',
      credentialId: 'CKA-2023-006',
      description: 'Demonstrated skills in Kubernetes cluster administration, troubleshooting, and application lifecycle management.',
      logo: '⚙️',
      skills: ['Kubernetes', 'Docker', 'Container Orchestration', 'DevOps']
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in-up">
            Certifications & Achievements
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in-up">
            Professional certifications that validate my expertise in modern technologies and best practices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Card 
              key={cert.credentialId} 
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
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Credential ID: <span className="font-mono">{cert.credentialId}</span>
                  </p>
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
                  Currently pursuing: Docker Certified Associate
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