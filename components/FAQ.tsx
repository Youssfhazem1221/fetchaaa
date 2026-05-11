'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus } from 'lucide-react';

const faqs = [
  {
    q: 'How fast can you launch our workflow?',
    a: 'Standard intake, qualification, CRM sync, and calendar workflows can launch in 48 hours. More complex systems with custom data sources or approvals usually take a focused sprint.',
  },
  {
    q: 'Do we need to change our current tools?',
    a: 'No. The point is to connect the tools your team already uses: HubSpot, Salesforce, GoHighLevel, Calendly, Slack, email, forms, and messaging channels.',
  },
  {
    q: 'What happens when the AI is uncertain?',
    a: 'We design escalation paths, confidence thresholds, and human review states so the system knows when to stop and hand the conversation to a teammate.',
  },
  {
    q: 'How does pricing work?',
    a: 'Projects start with a build fee for the sprint, then move to a monthly operating rate for hosting, monitoring, maintenance, and improvement.',
  },
  {
    q: 'Will this sound like our company?',
    a: 'Yes. We tune the assistant with your strongest past conversations, brand voice, qualifying questions, and edge-case rules.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="w-full bg-bg-primary px-5 py-24 md:px-8 lg:px-10">
      <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[0.75fr_1.25fr]">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 font-mono text-xs text-accent-primary">FAQ</div>
          <h2 className="text-4xl font-bold leading-[1.05] text-ink md:text-6xl">
            Clear answers before the audit.
          </h2>
        </motion.div>

        <div className="border-t border-white/10">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="border-b border-white/10"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className="text-xl font-bold leading-snug text-ink">{faq.q}</span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md border border-white/10 text-accent-primary"
                >
                  <Plus className="h-5 w-5" />
                </motion.span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="max-w-3xl pb-6 text-base leading-7 text-text-muted">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
