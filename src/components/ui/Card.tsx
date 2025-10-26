import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className, hover = true, ...props }) => {
  return (
    <div 
      className={cn(
        'bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6',
        'transition-all duration-300 ease-in-out',
        hover && 'hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-2 hover:scale-[1.02]',
        'animate-fade-in-up',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;