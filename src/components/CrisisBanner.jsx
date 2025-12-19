import React from 'react';
import { Phone } from 'lucide-react';

function CrisisBanner() {
  return (
    <div className="fixed top-0 w-full bg-brand-peach text-brand-dark py-2.5 z-[70] border-b border-brand-orange/20 overflow-hidden shadow-sm">
      <div className="flex animate-scroll whitespace-nowrap">
        {[1, 2, 3].map((i) => (
          <span key={i} className="inline-flex items-center gap-3 px-12 border-r border-brand-orange/10">
            <Phone className="w-4 h-4 text-brand-orange" />
            <span className="text-sm font-medium">
              If you are in crisis or need help, please call{' '}
              <a href="tel:988" className="font-bold underline decoration-brand-orange hover:text-brand-orange transition-colors">9-8-8</a>
              {' '}(Suicide & Crisis Lifeline)
            </span>
          </span>
        ))}
      </div>
      
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}

export default CrisisBanner;