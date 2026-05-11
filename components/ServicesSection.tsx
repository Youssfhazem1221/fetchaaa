'use client';
import { motion } from 'motion/react';
import { ArrowRight, Bot, CalendarCheck, Network, Radar, ShieldCheck, Workflow } from 'lucide-react';

const services = [
  {
    title: 'Lead response engine',
    description: 'Capture every inquiry, classify intent, answer instantly, and push only qualified opportunities to the right human.',
    icon: Radar,
    details: ['WhatsApp, email, forms', 'Intent scoring', 'Spam filtering'],
  },
  {
    title: 'Qualification and booking',
    description: 'Run the same qualification logic your best rep would use, then book directly into your calendar and CRM.',
    icon: CalendarCheck,
    details: ['Calendar routing', 'No-show reminders', 'Buyer fit checks'],
  },
  {
    title: 'Operations automation sprint',
    description: 'Connect messy internal tools into one reliable workflow with clear alerts, logs, and human override points.',
    icon: Workflow,
    details: ['CRM sync', 'Webhook logic', 'Team handoffs'],
  },
];

const capabilities = [
  { icon: Bot, label: 'Custom agent logic' },
  { icon: Network, label: 'Tool integrations' },
  { icon: ShieldCheck, label: 'Guardrails and review' },
];

export default function ServicesSection() {
  return (
    <section id="services" className="w-full bg-bg-primary px-5 py-24 md:px-8 lg:px-10">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.4fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 font-mono text-xs text-accent-primary">What we build</div>
            <h2 className="text-4xl font-bold leading-[1.05] text-ink md:text-6xl">
              Revenue workflows with operator discipline.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="max-w-2xl text-lg leading-8 text-text-muted lg:ml-auto"
          >
            Fetch designs the hidden systems between your ads, inboxes, CRM, calendar, and team. The output is not a chatbot demo; it is a working operating layer with logging, escalation, and measurable revenue impact.
          </motion.p>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="group flex min-h-[360px] flex-col rounded-md border border-white/10 bg-surface p-6 transition-all duration-300 hover:border-accent-primary/60 hover:bg-surface-strong"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-paper/10 text-accent-primary">
                  <service.icon className="h-5 w-5" />
                </div>
                <span className="font-mono text-xs text-text-muted">0{index + 1}</span>
              </div>

              <h3 className="mt-8 text-2xl font-bold leading-tight text-ink">{service.title}</h3>
              <p className="mt-4 flex-1 text-base leading-7 text-text-muted">{service.description}</p>

              <div className="mt-8 space-y-3">
                {service.details.map((detail) => (
                  <div key={detail} className="flex items-center justify-between border-t border-white/10 pt-3 font-mono text-xs">
                    <span className="text-text-muted">{detail}</span>
                    <span className="h-2 w-2 rounded-[2px] bg-accent-primary" />
                  </div>
                ))}
              </div>

              <a href="#contact" className="mt-8 inline-flex items-center gap-2 font-bold text-ink transition-colors hover:text-accent-primary">
                Scope this system
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.article>
          ))}
        </div>

        <div className="mt-5 grid gap-3 border-y border-white/10 py-5 md:grid-cols-3">
          {capabilities.map((item) => (
            <div key={item.label} className="flex items-center gap-3 text-sm font-semibold text-text-muted">
              <item.icon className="h-4 w-4 text-accent-secondary" />
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
