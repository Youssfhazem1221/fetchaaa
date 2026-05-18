'use client';
import { motion } from 'motion/react';
import { useLanguage } from '@/lib/LanguageContext';

export default function WhatsAppFloatingCTA() {
  const { language, t } = useLanguage();
  const phoneNumber = '201069237525';
  const prefilledMessage = encodeURIComponent(t.cta.message);
  const waUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${prefilledMessage}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
      className="fixed bottom-5 end-5 z-[9999] md:bottom-8 md:end-8"
    >
      <motion.a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="group flex min-h-[52px] items-center gap-3.5 rounded-md border border-white/10 bg-bg-primary/95 p-2 pe-5 backdrop-blur-xl shadow-[0_24px_80px_rgba(7,9,7,0.85)] transition-all duration-200 hover:border-accent-primary"
        aria-label="Start WhatsApp Live Chat"
      >
        {/* Custom Icon badge strictly mirroring Fetch's native square-rounded geometry */}
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[4px] bg-accent-primary text-bg-primary transition-transform duration-200 group-hover:scale-105">
          <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.15-.173.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413z" />
          </svg>
        </div>

        {/* Native typography pairing: mono text-accent-primary sub-label + sans bold main-label */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-primary opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-primary" />
            </span>
            <span className="font-mono text-[10px] font-semibold text-accent-primary">
              {t.cta.badge}
            </span>
          </div>
          <span className="text-xs font-bold text-ink transition-colors group-hover:text-accent-primary">
            {t.cta.label}
          </span>
        </div>
      </motion.a>
    </motion.div>
  );
}
