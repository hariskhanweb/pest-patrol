import React from 'react';

export interface StripProps {
  text?: React.ReactNode;
  variant?: 'yellow' | 'navy';
  className?: string;
}

export default function Strip({
  text = "LIMITED TIME OFFER: 50% Off On Complete Insect Treatment With Extended Warranty",
  variant = 'yellow',
  className = '',
}: StripProps) {
  const isYellow = variant === 'yellow';

  return (
    <div
      className={`w-full py-4 flex items-center justify-center gap-3 px-4 transition-colors duration-300 ${
        isYellow ? 'bg-sunflower text-navy-dark' : 'bg-navy-dark text-white'
      } ${className}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5 shrink-0"
      >
        <path
          fillRule="evenodd"
          d="M5.25 2.25a3 3 0 0 0-3 3v4.318a3 3 0 0 0 .879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 0 0 5.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 0 0-2.122-.879H5.25ZM6.375 7.5a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"
          clipRule="evenodd"
        />
      </svg>
      <span className="font-inter type-xs font-bold tracking-wide text-center">
        {text}
      </span>
    </div>
  );
}
