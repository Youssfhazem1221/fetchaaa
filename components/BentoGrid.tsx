'use client';
import { motion } from 'motion/react';
import { Building2, CalendarCheck, ShoppingCart } from 'lucide-react';

const cases = [
  {
    id: '01',
    industry: 'Real estate',
    title: 'Respond before the next agent does.',
    metric: '3x faster response',
    lines: ['Facebook lead arrives', 'AI qualifies budget and timeline', 'Calendar slot offered instantly'],
    icon: Building2,
  },
  {
    id: '02',
    industry: 'Clinics',
    title: 'Turn inquiries into confirmed appointments.',
    metric: 'fewer empty slots',
    lines: ['Patient asks on WhatsApp', 'Symptoms and availability checked', 'Reminder flow prevents no-shows'],
    icon: CalendarCheck,
  },
  {
    id: '03',
    industry: 'E-commerce',
    title: 'Recover revenue from support gaps.',
    metric: 'more recovered carts',
    lines: ['Customer stalls at checkout', 'Order issue detected', 'Human escalation only when needed'],
    icon: ShoppingCart,
  },
];

export default function BentoGrid() {
  return (
    <section id="use-cases" className="w-full border-y border-white/10 bg-surface px-5 py-24 md:px-8 lg:px-10">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 font-mono text-xs text-accent-primary">Use cases</div>
            <h2 className="text-4xl font-bold leading-[1.05] text-ink md:text-6xl">
              The workflows that usually pay first.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="max-w-2xl text-lg leading-8 text-text-muted lg:ml-auto"
          >
            We start where response speed and routing accuracy create visible money. That keeps the first sprint focused, measurable, and easy for your team to trust.
          </motion.p>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {cases.map((item, index) => (
            <motion.article
              key={item.industry}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="rounded-md border border-white/10 bg-bg-primary p-6"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-paper/10 text-accent-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-mono text-xs text-text-muted">Industry {item.id}</div>
                    <div className="text-sm font-bold text-ink">{item.industry}</div>
                  </div>
                </div>
                <span className="rounded-[4px] bg-accent-primary px-2 py-1 font-mono text-[11px] font-semibold text-bg-primary">
                  {item.metric}
                </span>
              </div>

              <h3 className="mt-7 text-2xl font-bold leading-tight text-ink">{item.title}</h3>

              <div className="mt-8 space-y-3">
                {item.lines.map((line, lineIndex) => (
                  <div key={line} className="grid grid-cols-[28px_1fr] items-center gap-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-[4px] border border-white/10 font-mono text-[10px] text-text-muted">
                      {lineIndex + 1}
                    </div>
                    <div className="rounded-[4px] bg-white/5 px-3 py-2 text-sm font-semibold text-text-muted">{line}</div>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
