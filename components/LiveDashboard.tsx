'use client';
import { motion } from 'motion/react';
import { Activity, CalendarCheck, Database, Mail, MessageSquare, ShieldCheck } from 'lucide-react';

const lanes = [
  { source: 'WhatsApp', status: 'Qualified', time: '0.4s', icon: MessageSquare },
  { source: 'Website form', status: 'Booked', time: '1.1s', icon: CalendarCheck },
  { source: 'Email queue', status: 'Triaged', time: '0.8s', icon: Mail },
];

export default function LiveDashboard() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,9,7,0.95)_0%,rgba(7,9,7,0.62)_48%,rgba(7,9,7,0.92)_100%)]" />
      <div className="absolute inset-0 opacity-35 [background-image:repeating-linear-gradient(90deg,rgba(247,241,227,0.07)_0_1px,transparent_1px_96px),repeating-linear-gradient(0deg,rgba(247,241,227,0.05)_0_1px,transparent_1px_96px)]" />
      <motion.div
        className="absolute left-0 right-0 top-24 h-px bg-accent-primary/60 shadow-[0_0_28px_rgba(183,255,42,0.5)]"
        animate={{ y: [0, 460, 0], opacity: [0.15, 0.85, 0.15] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="absolute right-[-160px] top-20 hidden w-[760px] rotate-[-8deg] md:block lg:right-[-60px]">
        <motion.div
          className="grid grid-cols-[1.1fr_0.8fr] gap-4"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <div className="rounded-md border border-white/15 bg-surface/80 p-4 shadow-2xl backdrop-blur-md">
            <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3 font-mono text-[11px] text-text-muted">
              <span>LIVE PIPELINE</span>
              <span className="text-accent-primary">HEALTH 98%</span>
            </div>
            <div className="space-y-3">
              {lanes.map((lane, index) => (
                <motion.div
                  key={lane.source}
                  className="grid grid-cols-[34px_1fr_auto] items-center gap-3 rounded-md border border-white/10 bg-bg-primary/75 p-3"
                  initial={{ opacity: 0, x: 18 }}
                  animate={{ opacity: [0.5, 1, 0.72], x: 0 }}
                  transition={{ duration: 2.8, delay: index * 0.35, repeat: Infinity, repeatDelay: 4 }}
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded bg-paper/10 text-accent-primary">
                    <lane.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-ink">{lane.source}</div>
                    <div className="font-mono text-[10px] text-text-muted">intent checked / crm updated</div>
                  </div>
                  <div className="text-right font-mono text-[10px]">
                    <div className="text-accent-secondary">{lane.status}</div>
                    <div className="text-text-muted">{lane.time}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-md border border-white/15 bg-paper p-4 text-bg-primary shadow-2xl">
              <div className="mb-5 flex items-center justify-between font-mono text-[11px] text-bg-primary/60">
                <span>REVENUE RECOVERY</span>
                <Activity className="h-4 w-4" />
              </div>
              <div className="text-5xl font-bold leading-none">27</div>
              <div className="mt-2 text-sm font-semibold text-bg-primary/70">missed opportunities prevented this week</div>
              <div className="mt-5 grid grid-cols-10 gap-1">
                {Array.from({ length: 40 }).map((_, index) => (
                  <motion.div
                    key={index}
                    className="h-5 rounded-[2px] bg-bg-primary"
                    animate={{ opacity: [0.22, index % 5 === 0 ? 0.95 : 0.55, 0.22] }}
                    transition={{ duration: 2, delay: index * 0.035, repeat: Infinity }}
                  />
                ))}
              </div>
            </div>

            <div className="rounded-md border border-white/15 bg-surface/90 p-4 shadow-2xl backdrop-blur-md">
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-ink">
                <ShieldCheck className="h-4 w-4 text-accent-primary" />
                Guardrail matrix
              </div>
              {['Escalation intent', 'Duplicate detection', 'Tone lock'].map((item) => (
                <div key={item} className="flex items-center justify-between border-t border-white/10 py-2 font-mono text-[11px]">
                  <span className="text-text-muted">{item}</span>
                  <span className="text-accent-primary">PASS</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
