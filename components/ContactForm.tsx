'use client';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Clock3, FileText, Route } from 'lucide-react';

const auditOutputs = [
  { label: 'Workflow map', icon: Route },
  { label: 'Revenue leak estimate', icon: FileText },
  { label: '48-hour launch path', icon: Clock3 },
];

export default function ContactForm() {
  return (
    <section id="contact" className="w-full bg-paper px-5 py-24 text-bg-primary md:px-8 lg:px-10">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 font-mono text-xs font-semibold text-bg-primary/60">Systems audit</div>
            <h2 className="text-4xl font-bold leading-[1.05] md:text-6xl">
              Find the automation win hiding in plain sight.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-bg-primary/70">
              Send the bottleneck. We will map the highest-leverage workflow, estimate the operational lift, and show what a first Fetch build should do.
            </p>

            <div className="mt-10 grid gap-3">
              {auditOutputs.map((item) => (
                <div key={item.label} className="flex items-center gap-3 border-t border-bg-primary/15 pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-bg-primary text-accent-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <span className="font-bold">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="rounded-md border border-bg-primary/15 bg-bg-primary p-5 text-ink shadow-[0_24px_80px_rgba(7,9,7,0.22)] md:p-7"
          >
            <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <div className="font-mono text-xs text-text-muted">request intake</div>
                <h3 className="mt-1 text-2xl font-bold">Book a free growth audit</h3>
              </div>
              <CheckCircle2 className="h-6 w-6 text-accent-primary" />
            </div>

            <form className="grid gap-5" onSubmit={(event) => event.preventDefault()}>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2">
                  <span className="font-mono text-xs text-text-muted">Full name</span>
                  <input
                    required
                    type="text"
                    className="h-12 rounded-md border border-white/10 bg-white/5 px-4 text-ink outline-none transition-colors placeholder:text-text-muted/70 focus:border-accent-primary"
                    placeholder="Jane Doe"
                  />
                </label>
                <label className="grid gap-2">
                  <span className="font-mono text-xs text-text-muted">Work email</span>
                  <input
                    required
                    type="email"
                    className="h-12 rounded-md border border-white/10 bg-white/5 px-4 text-ink outline-none transition-colors placeholder:text-text-muted/70 focus:border-accent-primary"
                    placeholder="jane@company.com"
                  />
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2">
                  <span className="font-mono text-xs text-text-muted">Industry</span>
                  <select className="h-12 rounded-md border border-white/10 bg-white/5 px-4 text-ink outline-none transition-colors focus:border-accent-primary">
                    <option className="bg-bg-primary" value="real_estate">Real estate</option>
                    <option className="bg-bg-primary" value="clinics">Clinics / medical</option>
                    <option className="bg-bg-primary" value="ecommerce">E-commerce</option>
                    <option className="bg-bg-primary" value="other">Other</option>
                  </select>
                </label>
                <label className="grid gap-2">
                  <span className="font-mono text-xs text-text-muted">Region</span>
                  <select className="h-12 rounded-md border border-white/10 bg-white/5 px-4 text-ink outline-none transition-colors focus:border-accent-primary">
                    <option className="bg-bg-primary" value="us">United States</option>
                    <option className="bg-bg-primary" value="mena">MENA</option>
                    <option className="bg-bg-primary" value="eu">Europe</option>
                    <option className="bg-bg-primary" value="other">Other</option>
                  </select>
                </label>
              </div>

              <label className="grid gap-2">
                <span className="font-mono text-xs text-text-muted">Biggest bottleneck</span>
                <textarea
                  rows={5}
                  className="resize-none rounded-md border border-white/10 bg-white/5 px-4 py-3 text-ink outline-none transition-colors placeholder:text-text-muted/70 focus:border-accent-primary"
                  placeholder="Where are you losing speed, leads, or team time right now?"
                />
              </label>

              <button
                type="submit"
                className="mt-2 inline-flex h-[52px] items-center justify-center gap-3 rounded-md bg-accent-primary px-6 text-base font-bold text-bg-primary transition-all hover:bg-paper"
              >
                Submit audit request
                <ArrowRight className="h-5 w-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
