'use client';
import { motion } from 'motion/react';
import { FileSearch, Hammer, PlugZap, SlidersHorizontal } from 'lucide-react';

const processSteps = [
  {
    title: 'Map the leak',
    desc: 'We review lead sources, reply windows, calendar gaps, CRM fields, and team handoffs to find the first workflow worth automating.',
    icon: FileSearch,
  },
  {
    title: 'Build the system',
    desc: 'We design the agent logic, qualification rules, routing paths, and edge-case guardrails around the way your team already sells.',
    icon: Hammer,
  },
  {
    title: 'Connect the stack',
    desc: 'We wire the workflow into your CRM, inboxes, calendar, messaging tools, and internal alerts so the system changes real operations.',
    icon: PlugZap,
  },
  {
    title: 'Tune the floor',
    desc: 'We watch the logs, refine prompts and routing, add coverage where demand appears, and keep the automation accountable.',
    icon: SlidersHorizontal,
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="w-full bg-bg-primary px-5 py-24 md:px-8 lg:px-10">
      <div className="mx-auto max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="mb-4 font-mono text-xs text-accent-primary">Process</div>
          <h2 className="text-4xl font-bold leading-[1.05] text-ink md:text-6xl">
            A build sprint with operational discipline.
          </h2>
        </motion.div>

        <div className="mt-14 grid border-t border-white/10 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="relative border-b border-white/10 py-8 lg:border-b-0 lg:border-r lg:px-6"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="font-mono text-sm text-text-muted">0{index + 1}</span>
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-paper/10 text-accent-secondary">
                  <step.icon className="h-5 w-5" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-ink">{step.title}</h3>
              <p className="mt-4 text-base leading-7 text-text-muted">{step.desc}</p>
              <div className="mt-8 h-2 w-full rounded-[2px] bg-white/10">
                <motion.div
                  className="h-full rounded-[2px] bg-accent-primary"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${64 + index * 10}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.2 + index * 0.08, ease: 'easeOut' }}
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
