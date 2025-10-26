'use client';

import Image from 'next/image';
import Link from 'next/link';

interface RotatingLogoProps {
  size?: number;
  speed?: 'slow' | 'medium' | 'fast';
  className?: string;
  href?: string;
}

export default function RotatingLogo({ 
  size = 60, 
  speed = 'slow', 
  className = '',
  href = 'https://github.com/iamtayyab007'
}: RotatingLogoProps) {
  const getAnimationClass = () => {
    switch (speed) {
      case 'fast':
        return 'animate-spin';
      case 'medium':
        return 'animate-rotate';
      case 'slow':
      default:
        return 'animate-rotate-slow';
    }
  };

  const logoContent = (
    <div className={`w-full h-full ${getAnimationClass()} hover:scale-110 transition-transform duration-300`}>
      <Image
        src="/github-logo.svg"
        alt="GitHub Profile"
        width={size}
        height={size}
        className="w-full h-full object-contain drop-shadow-lg"
        priority
      />
    </div>
  );

  return (
    <div 
      className={`fixed top-20 right-4 z-40 ${className}`}
      style={{ width: size, height: size }}
    >
      {href ? (
        <Link 
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full h-full hover:opacity-80 transition-opacity duration-300"
        >
          {logoContent}
        </Link>
      ) : (
        logoContent
      )}
    </div>
  );
}