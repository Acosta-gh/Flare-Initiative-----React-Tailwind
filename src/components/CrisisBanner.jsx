import React from 'react';
import { Phone } from 'lucide-react';

function CrisisBanner() {
  return (
    <div className="bg-red-600 text-white py-2 overflow-hidden relative">
      <div className="animate-scroll whitespace-nowrap">
        <span className="inline-flex items-center gap-2 px-8">
          <Phone className="w-4 h-4" />
          <span className="text-sm">
            If you are experiencing a crisis or need help, please call{' '}
            <a 
              href="tel:988" 
              className="font-bold underline hover:text-red-100"
            >
              9-8-8
            </a>
            {' '}(Suicide & Crisis Lifeline)
          </span>
        </span>
        <span className="inline-flex items-center gap-2 px-8">
          <Phone className="w-4 h-4" />
          <span className="text-sm">
            If you are experiencing a crisis or need help, please call{' '}
            <a 
              href="tel:988" 
              className="font-bold underline hover:text-red-100"
            >
              9-8-8
            </a>
            {' '}(Suicide & Crisis Lifeline)
          </span>
        </span>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          display: inline-block;
          animation: scroll 20s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}

export default CrisisBanner;