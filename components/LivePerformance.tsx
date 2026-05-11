'use client';
import { motion, animate, useMotionValue, useTransform } from 'motion/react';
import { useEffect } from 'react';
import { Brain, Database, MessageSquare, MoveRight, UserCheck } from 'lucide-react';

const flow = [
  {
    label: 'Capture',
    title: 'Every channel feeds one intake queue.',
    meta: 'Forms / WhatsApp / Instagram / email',
    icon: MessageSquare,
    tone: 'text-accent-tertiary',
  },
  {
    label: 'Reason',
    title: 'AI scores urgency, fit, and next action.',
    meta: 'Intent / budget / timing / risk',
    icon: Brain,
    tone: 'text-accent-primary',
  },
  {
    label: 'Commit',
    title: 'CRM, calendar, and team alerts stay synced.',
    meta: 'HubSpot / GHL / Slack / Calendly',
    icon: Database,
    tone: 'text-accent-secondary',
  },
];

export default function LivePerformance() {
  const count = useMotionValue(114200);
  const rounded = useTransform(count, Math.round);
  const formatted = useTransform(rounded, (latest) => Intl.NumberFormat('en-US').format(latest));

  useEffect(() => {
    const controls = animate(count, 114420, {
      duration: 1.4,
      ease: 'easeOut',
    });

    const interval = setInterval(() => {
      count.set(count.get() + Math.floor(Math.random() * 3) + 1);
    }, 2500);

    return () => {
      controls.stop();
      clearInterval(interval);
    };
  }, [count]);

  return (
    <section id="proof" className="w-full border-y border-bg-primary/10 bg-paper px-5 py-24 text-bg-primary md:px-8 lg:px-10">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 font-mono text-xs font-semibold text-bg-primary/60">Operating proof</div>
            <h2 className="text-4xl font-bold leading-[1.05] md:text-6xl">
              Inquiry to booked revenue, without the handoff drift.
            </h2>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-3">
            {flow.map((step, index) => (
              <motion.article
                key={step.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="relative rounded-md border border-bg-primary/15 bg-bg-primary p-5 text-ink shadow-[0_18px_60px_rgba(7,9,7,0.18)]"
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-mono text-xs text-text-muted">0{index + 1} / {step.label}</span>
                  <step.icon className={`h-5 w-5 ${step.tone}`} />
                </div>
                <h3 className="text-xl font-bold leading-snug">{step.title}</h3>
                <p className="mt-4 font-mono text-xs leading-6 text-text-muted">{step.meta}</p>
                {index < flow.length - 1 && (
                  <div className="absolute -right-5 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-md border border-bg-primary/20 bg-accent-primary text-bg-primary md:flex">
                    <MoveRight className="h-5 w-5" />
                  </div>
                )}
              </motion.article>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-4 lg:grid-cols-[1fr_0.58fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="rounded-md border border-bg-primary/15 bg-bg-primary p-5 text-ink"
          >
            <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <div className="font-mono text-xs text-text-muted">live volume</div>
                <div className="mt-1 text-3xl font-bold md:text-5xl">
                  <motion.span>{formatted}</motion.span>
                </div>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-accent-primary text-bg-primary">
                <UserCheck className="h-6 w-6" />
              </div>
            </div>

            <div className="grid h-44 grid-cols-12 items-end gap-2">
              {Array.from({ length: 36 }).map((_, index) => (
                <motion.div
                  key={index}
                  className="rounded-t-[3px] bg-accent-primary"
                  style={{ height: `${24 + ((index * 17) % 76)}%` }}
                  animate={{ opacity: [0.28, index % 4 === 0 ? 1 : 0.62, 0.28] }}
                  transition={{ duration: 2.2, delay: index * 0.035, repeat: Infinity }}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="rounded-md border border-bg-primary/15 bg-bg-primary p-5 text-ink"
          >
            <div className="font-mono text-xs text-text-muted">result snapshot</div>
            <div className="mt-8 space-y-5">
              {[
                ['0.4s', 'fastest lead classification'],
                ['14', 'active automations in one build'],
                ['3', 'handoff routes with human override'],
              ].map(([value, label]) => (
                <div key={label} className="border-t border-white/10 pt-4">
                  <div className="text-4xl font-bold text-accent-primary">{value}</div>
                  <div className="mt-1 text-sm font-semibold text-text-muted">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
