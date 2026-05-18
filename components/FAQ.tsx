'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = t.faq.items;

  return (
    <section id="faq" className="w-full bg-bg-primary px-5 py-24 md:px-8 lg:px-10">
      <div className="mx-auto max-w-[840px]">
        <div className="text-center">
          <div className="mb-4 font-mono text-xs text-accent-primary">{t.faq.badge}</div>
          <h2 className="text-4xl font-bold leading-tight text-ink md:text-5xl">
            {t.faq.title}
          </h2>
        </div>

        <div className="mt-14 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.article
                key={faq.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="overflow-hidden rounded-md border border-white/10 bg-surface transition-colors duration-200 hover:border-white/20"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between p-5 text-start md:p-6 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <h3 className="text-lg font-bold text-ink md:text-xl">{faq.q}</h3>
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-paper/10 text-ink">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.28, ease: 'easeInOut' }}
                    >
                      <div className="border-t border-white/10 p-5 font-mono text-xs leading-6 text-text-muted md:p-6">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
