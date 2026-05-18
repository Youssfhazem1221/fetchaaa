'use client';
import { motion } from 'motion/react';
import { ArrowRight, Gauge, ShieldCheck, TimerReset } from 'lucide-react';
import LiveDashboard from './LiveDashboard';
import { useLanguage } from '@/lib/LanguageContext';

const statIcons = [TimerReset, ShieldCheck, Gauge];

export default function Hero() {
  const { language, t } = useLanguage();

  const stats = t.hero.stats.map((stat, index) => ({
    ...stat,
    icon: statIcons[index],
  }));

  return (
    <section className="relative isolate flex min-h-[86svh] w-full items-end overflow-hidden border-b border-white/10 bg-bg-primary px-5 pb-10 pt-28 md:px-8 md:pt-32 lg:px-10">
      <LiveDashboard />

      <div className="relative z-10 mx-auto w-full max-w-[1280px]">
        <motion.div
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-4xl animate-fade-in-up"
        >
          <div className="mb-5 inline-flex items-center gap-3 border-s-2 border-accent-primary bg-paper/10 px-3 py-2 font-mono text-xs text-accent-primary backdrop-blur">
            {t.hero.badge}
          </div>

          <h1 className={`max-w-4xl font-bold text-ink ${
            language === 'ar' 
              ? 'text-4xl leading-[1.15] md:text-6xl lg:text-7xl' 
              : 'text-5xl leading-[0.96] md:text-7xl lg:text-8xl'
          }`}>
            {language === 'ar' ? (
              <>
                <span dir="ltr" className="inline-block">Fetch</span>{' '}
                <span>لأنظمة التشغيل الذكية</span>
              </>
            ) : (
              t.hero.title
            )}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-text-muted md:text-xl">
            {t.hero.description}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex h-[52px] items-center justify-center gap-3 rounded-md bg-accent-primary px-6 text-base font-bold text-bg-primary transition-all hover:bg-paper"
            >
              {t.hero.btnAudit}
              <ArrowRight className={`h-5 w-5 transition-transform ${language === 'ar' ? 'rotate-180' : ''}`} />
            </a>
            <a
              href="#proof"
              className="inline-flex h-[52px] items-center justify-center rounded-md border border-white/15 bg-bg-primary/60 px-6 text-base font-bold text-ink backdrop-blur transition-all hover:border-accent-primary hover:text-accent-primary"
            >
              {t.hero.btnProof}
            </a>
          </div>
        </motion.div>

        <motion.div
          transition={{ duration: 0.7, delay: 0.22, ease: 'easeOut' }}
          className="mt-10 grid max-w-3xl grid-cols-1 border-y border-white/10 bg-bg-primary/70 backdrop-blur sm:grid-cols-3"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className={`flex items-center gap-4 p-4 ${index !== 0 ? 'border-t border-white/10 sm:border-s sm:border-t-0' : ''}`}>
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-paper/10 text-accent-primary">
                <stat.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-2xl font-bold text-ink">{stat.value}</div>
                <div className="font-mono text-[11px] text-text-muted">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

