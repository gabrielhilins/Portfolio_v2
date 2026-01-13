import React from 'react';

interface DeveloperBadgeProps {
  className?: string;
}

export const DeveloperBadge = ({ className = '' }: DeveloperBadgeProps) => {
  return (
    <div className={`flex flex-col items-center justify-center gap-2 ${className}`}>
      <div className="flex items-center gap-2 text-[10px] tracking-[0.15em] text-gray-500 font-quicksand">
        <span className="uppercase italic opacity-85">desenvolvido por</span>
        <a 
          href="https://ggabstechdesign.com.br" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-iron-red transition-all duration-500 hover:-translate-y-1 group"
        >
          <img 
            src="/Wordmark SVG.svg" 
            alt="GGABS" 
            className="h-5 w-auto grayscale brightness-200 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
          />
        </a>
      </div>
    </div>
  );
};