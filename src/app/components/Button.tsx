import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: 'solid' | 'outline' | 'white' | 'navy' | 'yellow';
  rounded?: 'full' | 'md' | 'none';
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  href,
  variant = 'solid',
  rounded = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) {
  // Base styling for all buttons
  const baseClasses = "inline-flex items-center justify-center font-inter type-xs font-bold tracking-wide transition-all duration-200 px-5 py-2";
  
  // Border radius based on the rounded prop
  const roundedClasses = rounded === 'full' 
    ? 'rounded-full' 
    : rounded === 'none' 
      ? 'rounded-none' 
      : 'rounded-md';
  
  // Style variants
  const variantClasses = variant === 'outline' 
    ? "border-2 border-navy-dark bg-sunflower text-navy-dark hover:bg-navy-dark hover:text-white hover:shadow-lg w-full md:max-w-[225px] cursor-pointer"
    : variant === 'white'
    ? "border-2 border-transparent bg-white text-navy-dark hover:bg-navy-dark hover:text-white shadow-lg w-full md:max-w-[225px] cursor-pointer"
    : variant === 'navy'
    ? "border-2 border-transparent bg-navy-dark text-white hover:bg-sunflower hover:text-navy-dark shadow-lg w-full md:max-w-[225px] cursor-pointer"
    : variant === 'yellow' || variant === 'solid'
    ? "border-2 border-transparent bg-sunflower text-navy-dark hover:bg-navy-dark hover:text-white shadow-lg w-full md:max-w-[225px] cursor-pointer"
    : "border-2 border-transparent bg-sunflower text-navy-dark hover:bg-navy-dark hover:text-white shadow-lg w-full md:max-w-[225px] cursor-pointer";

  // Combine all classes, allowing custom classes to be appended
  const combinedClasses = `${baseClasses} ${roundedClasses} ${variantClasses} ${className}`.trim();

  // If href is provided, render as a Next.js Link (acting as an anchor)
  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  // Otherwise, render as a standard HTML button (handling onClick, etc.)
  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
