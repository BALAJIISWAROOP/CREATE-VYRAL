
import React from 'react';
import { CLIENTS } from '../constants';

const Clients: React.FC = () => {
  return (
    <section className="py-24 bg-black border-y border-white/5 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...CLIENTS, ...CLIENTS].map((client, idx) => (
          <div key={`${client.id}-${idx}`} className="mx-12 md:mx-24 flex items-center justify-center grayscale opacity-30 hover:opacity-100 transition-opacity">
            <img src={client.logo} alt={client.name} className="h-8 md:h-12 w-auto object-contain" />
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Clients;
