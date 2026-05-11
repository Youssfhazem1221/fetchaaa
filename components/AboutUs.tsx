'use client';
import { motion } from 'motion/react';

const team = [
  {
    name: 'Youssf Hazem',
    role: 'CEO',
    focus: 'Marketing, sales, and executive direction',
    background: 'Translates operational bottlenecks into commercial priorities so every build starts with revenue impact, not novelty.',
  },
  {
    name: 'Mohammed Ahmed',
    role: 'Chief Technical Executive Officer',
    focus: 'Automation and AI engineering',
    background: 'Leads technical development across data pipelines, custom extensions, agent logic, and scalable AI infrastructure.',
  },
];

export default function AboutUs() {
  return (
    <section id="about" className="w-full border-y border-white/10 bg-surface px-5 py-24 md:px-8 lg:px-10">
      <div className="mx-auto max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"
        >
          <div>
            <div className="mb-4 font-mono text-xs text-accent-primary">Operator bench</div>
            <h2 className="text-4xl font-bold leading-[1.05] text-ink md:text-6xl">
              Built by people who care about the floor.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-text-muted lg:ml-auto">
            Fetch sits between strategy and engineering. We keep the commercial objective close while building the technical system that makes it repeatable.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {team.map((member, index) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="rounded-md border border-white/10 bg-bg-primary p-6"
            >
              <div className="flex items-start justify-between border-b border-white/10 pb-6">
                <div>
                  <h3 className="text-3xl font-bold text-ink">{member.name}</h3>
                  <div className="mt-2 font-mono text-xs text-accent-primary">{member.role}</div>
                </div>
                <span className="font-mono text-xs text-text-muted">0{index + 1}</span>
              </div>

              <div className="mt-6 rounded-[4px] bg-paper p-4 text-bg-primary">
                <div className="font-mono text-xs text-bg-primary/60">focus</div>
                <div className="mt-2 text-lg font-bold">{member.focus}</div>
              </div>

              <p className="mt-6 text-base leading-7 text-text-muted">{member.background}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
