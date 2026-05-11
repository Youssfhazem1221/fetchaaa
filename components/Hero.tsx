'use client';
import { motion } from 'motion/react';
import { ArrowRight, Gauge, ShieldCheck, TimerReset } from 'lucide-react';
import LiveDashboard from './LiveDashboard';

const stats = [
  { label: 'First launch', value: '48h', icon: TimerReset },
  { label: 'Lead coverage', value: '24/7', icon: ShieldCheck },
  { label: 'Reply target', value: '<60s', icon: Gauge },
];

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[86svh] w-full items-end overflow-hidden border-b border-white/10 bg-bg-primary px-5 pb-10 pt-28 md:px-8 md:pt-32 lg:px-10">
      <LiveDashboard />

      <div className="relative z-10 mx-auto w-full max-w-[1280px]">
        <motion.div
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-4xl"
        >
          <div className="mb-5 inline-flex items-center gap-3 border-l-2 border-accent-primary bg-paper/10 px-3 py-2 font-mono text-xs text-accent-primary backdrop-blur">
            AI automation agency / live operations buildouts
          </div>

          <h1 className="max-w-4xl text-5xl font-bold leading-[0.96] text-ink md:text-7xl lg:text-8xl">
            Fetch AI Operations
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-text-muted md:text-xl">
            Done-for-you systems that answer leads, qualify buyers, book appointments, update CRMs, and route human handoffs before revenue goes cold.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex h-[52px] items-center justify-center gap-3 rounded-md bg-accent-primary px-6 text-base font-bold text-bg-primary transition-all hover:bg-paper"
            >
              Book a systems audit
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#proof"
              className="inline-flex h-[52px] items-center justify-center rounded-md border border-white/15 bg-bg-primary/60 px-6 text-base font-bold text-ink backdrop-blur transition-all hover:border-accent-primary hover:text-accent-primary"
            >
              See operating proof
            </a>
          </div>
        </motion.div>

        <motion.div
          transition={{ duration: 0.7, delay: 0.22, ease: 'easeOut' }}
          className="mt-10 grid max-w-3xl grid-cols-1 border-y border-white/10 bg-bg-primary/70 backdrop-blur sm:grid-cols-3"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className={`flex items-center gap-4 p-4 ${index !== 0 ? 'border-t border-white/10 sm:border-l sm:border-t-0' : ''}`}>
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
