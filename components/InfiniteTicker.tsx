'use client';
import { motion } from 'motion/react';

export default function InfiniteTicker() {
  const text = 'AI OPERATIONS // DONE FOR YOU // 48H FIRST LAUNCH // MENA // EU // US MARKET COVERAGE // CRM SYNC // LEAD RESPONSE // HUMAN HANDOFFS // ';
  
  return (
    <div className="z-20 flex h-14 w-full items-center overflow-hidden border-b border-white/10 bg-paper text-bg-primary">
      <motion.div 
        className="flex whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ ease: 'linear', duration: 28, repeat: Infinity }}
      >
        <div className="flex gap-4 font-mono text-[11px] font-semibold text-bg-primary/70">
          {text.split('//').map((part, i) => (
             <div key={i} className="flex gap-4">
               <span>{part.trim()}</span>
               {i !== text.split('//').length - 1 && <span className="text-bg-primary">{'//'}</span>}
             </div>
          ))}
        </div>
        <div className="ml-4 flex gap-4 font-mono text-[11px] font-semibold text-bg-primary/70">
           {text.split('//').map((part, i) => (
             <div key={i} className="flex gap-4">
               <span>{part.trim()}</span>
               {i !== text.split('//').length - 1 && <span className="text-bg-primary">{'//'}</span>}
             </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
