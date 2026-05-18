'use client';
import { motion } from 'motion/react';
import { useLanguage } from '@/lib/LanguageContext';

export default function CaseStudies() {
  const { language, t } = useLanguage();
  const stats = t.caseStudies.stats;

  return (
    <section className="w-full bg-bg-primary px-5 py-24 md:px-8 lg:px-10">
      <div className="mx-auto max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end"
        >
          <div>
            <div className="mb-4 font-mono text-xs text-accent-primary">{t.caseStudies.badge}</div>
            <h2 className="text-4xl font-bold leading-[1.05] text-ink md:text-6xl">
              {t.caseStudies.title}
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-text-muted lg:ms-auto">
            {t.caseStudies.description}
          </p>
        </motion.div>

        <div className="mt-14 overflow-hidden rounded-md border border-white/10">
          {stats.map((stat, index) => (
            <motion.article
              key={stat.market}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="grid gap-6 border-b border-white/10 bg-surface p-5 last:border-b-0 md:grid-cols-[0.75fr_1.2fr_0.65fr] md:items-center md:p-7"
            >
              <div>
                <div className="font-mono text-xs text-text-muted">{stat.market}</div>
                <h3 className="mt-2 text-3xl font-bold text-ink">{stat.outcome}</h3>
              </div>

              <div className="text-base leading-7 text-text-muted">
                <p className="text-ink">{stat.system}</p>
                <p className="mt-2">{stat.result}</p>
              </div>

              <div className="md:text-end">
                <div className="font-mono text-xs text-text-muted">{t.caseStudies.confidence}</div>
                <div className="mt-2 text-5xl font-bold text-accent-primary">{stat.score}%</div>
                <div className="mt-3 h-2 rounded-[2px] bg-white/10">
                  <motion.div
                    className="h-full rounded-[2px] bg-accent-primary"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${stat.score}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.15 + index * 0.08, ease: 'easeOut' }}
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

