'use client';
import { motion } from 'motion/react';
import { useLanguage } from '@/lib/LanguageContext';
import {
  ShoppingCart,
  Utensils,
  Truck,
  Globe,
  Layers,
  Activity,
  Briefcase,
  Users,
  Home,
  GraduationCap,
  Settings,
  Rocket,
  Radar,
} from 'lucide-react';

const nicheIcons = [
  ShoppingCart,
  Utensils,
  Truck,
  Globe,
  Layers,
  Activity,
  Briefcase,
  Users,
  Home,
  GraduationCap,
  Settings,
  Rocket,
];

export default function Niches() {
  const { language, t } = useLanguage();

  // If t.niches is not yet loaded, fallback gracefully
  if (!t.niches) return null;

  const items = t.niches.items.map((item, index) => ({
    ...item,
    icon: nicheIcons[index] || Radar,
    num: String(index + 1).padStart(2, '0'),
  }));

  return (
    <section id="niches" className="w-full border-b border-white/10 bg-bg-secondary px-5 py-24 md:px-8 lg:px-10">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 font-mono text-xs text-accent-primary">{t.niches.badge}</div>
            <h2 className="text-4xl font-bold leading-[1.05] text-ink md:text-6xl">
              {t.niches.title}
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="max-w-2xl text-lg leading-8 text-text-muted lg:ms-auto"
          >
            {t.niches.description}
          </motion.p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.55, delay: (index % 4) * 0.08 }}
              className="group flex min-h-[220px] flex-col rounded-md border border-white/10 bg-surface p-6 transition-all duration-300 hover:border-accent-primary/60 hover:bg-surface-strong"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-paper/10 text-accent-primary group-hover:bg-accent-primary/10 transition-colors">
                  <item.icon className="h-5 w-5" />
                </div>
                <span className="font-mono text-xs text-text-muted">{item.num}</span>
              </div>

              <h3 className="mt-6 text-xl font-bold leading-tight text-ink transition-colors group-hover:text-accent-primary">
                {item.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-text-muted">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
