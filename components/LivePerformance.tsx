'use client';
import { motion, animate, useMotionValue, useTransform, useInView } from 'motion/react';
import { useEffect, useRef, useMemo } from 'react';
import { Bot, Brain, CalendarCheck, Database, GitBranch, MessageSquare, MoveRight, Send, ShieldCheck, Sparkles, UserCheck } from 'lucide-react';

// ── Static data outside component (no re-creation on render) ────────────────
const fmt = new Intl.NumberFormat('en-US');

const BARS = Array.from({ length: 36 }, (_, i) => ({
  height: `${24 + ((i * 17) % 76)}%`,
  delay: `${(i * 0.035).toFixed(3)}s`,
  bright: i % 4 === 0,
}));

const flow = [
  { label: 'Capture', title: 'Every channel feeds one intake queue.', meta: 'Forms / WhatsApp / Instagram / email', icon: MessageSquare, tone: 'text-accent-tertiary' },
  { label: 'Reason', title: 'AI scores urgency, fit, and next action.', meta: 'Intent / budget / timing / risk', icon: Brain, tone: 'text-accent-primary' },
  { label: 'Commit', title: 'CRM, calendar, and team alerts stay synced.', meta: 'HubSpot / GHL / Slack / Calendly', icon: Database, tone: 'text-accent-secondary' },
];

const workflowNodes = [
  { label: 'Webhook trigger', detail: 'Lead arrives from form, WhatsApp, paid ad, or inbox.', icon: MessageSquare },
  { label: 'AI qualification', detail: 'Intent, budget, urgency, and risk get scored instantly.', icon: Brain },
  { label: 'Route logic', detail: 'Branches split hot leads, nurture flows, and edge cases.', icon: GitBranch },
  { label: 'Book or notify', detail: 'Calendar slots, CRM stages, and team alerts update together.', icon: CalendarCheck },
  { label: 'Human override', detail: 'Low-confidence replies pause for review before sending.', icon: ShieldCheck },
  { label: 'Follow-up loop', detail: 'No-shows, stale deals, and missing fields trigger recovery.', icon: Send },
];

const diagramNodes = [
  { label: 'Lead form', sub: 'new inquiry', icon: MessageSquare, tone: 'text-accent-tertiary', border: 'border-white/18' },
  { label: 'AI agent', sub: 'qualify + decide', icon: Bot, tone: 'text-accent-primary', border: 'border-white/18' },
  { label: 'Fit?', sub: 'true / false', icon: GitBranch, tone: 'text-accent-secondary', border: 'border-white/18' },
  { label: 'Book call', sub: 'calendar + CRM', icon: CalendarCheck, tone: 'text-accent-primary', border: 'border-accent-primary/25' },
  { label: 'Human review', sub: 'safe fallback', icon: ShieldCheck, tone: 'text-accent-tertiary', border: 'border-white/18' },
];

const subNodes = [
  { label: 'Model', sub: 'intent + tone', icon: Sparkles },
  { label: 'Memory', sub: 'lead history', icon: Database },
  { label: 'Tools', sub: 'CRM actions', icon: Send },
];

// ── CSS animation for bars (avoids 36 JS-driven Framer animations) ───────────
const barStyle = `
  @keyframes barPulse {
    0%, 100% { opacity: 0.28; }
    50% { opacity: 1; }
  }
  .bar-pulse { animation: barPulse 2.2s ease-in-out infinite; }
  .bar-dim   { animation: barPulse 2.2s ease-in-out infinite; }
  .bar-dim   { --peak-opacity: 0.62; }
`;

export default function LivePerformance() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  const count = useMotionValue(114200);
  const rounded = useTransform(count, Math.round);
  // memoised formatter — runs once, not every frame
  const formatted = useTransform(rounded, (v) => fmt.format(v));

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, 114420, { duration: 1.4, ease: 'easeOut' });
    const interval = setInterval(() => {
      count.set(count.get() + Math.floor(Math.random() * 3) + 1);
    }, 2500);
    return () => { controls.stop(); clearInterval(interval); };
  }, [isInView, count]);

  // Shared viewport config — one IntersectionObserver instance reused
  const vp = useMemo(() => ({ once: true, margin: '-80px' }), []);

  return (
    <section
      ref={sectionRef}
      id="proof"
      className="w-full border-y border-bg-primary/10 bg-paper px-5 py-16 text-bg-primary md:py-24 md:px-8 lg:px-10"
    >
      <style>{barStyle}</style>
      <div className="mx-auto max-w-[1280px]">

        {/* ── Hero row ── */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 font-mono text-xs font-semibold text-bg-primary/60">Operating proof</div>
            <h2 className="text-3xl font-bold leading-[1.05] sm:text-4xl md:text-6xl">
              Inquiry to booked revenue, without the handoff drift.
            </h2>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-3">
            {flow.map((step, i) => (
              <motion.article
                key={step.label}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="relative rounded-md border border-bg-primary/15 bg-bg-primary p-5 text-ink shadow-[0_18px_60px_rgba(7,9,7,0.18)]"
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-mono text-xs text-text-muted">0{i + 1} / {step.label}</span>
                  <step.icon className={`h-5 w-5 ${step.tone}`} />
                </div>
                <h3 className="text-xl font-bold leading-snug">{step.title}</h3>
                <p className="mt-4 font-mono text-xs leading-6 text-text-muted">{step.meta}</p>
                {i < flow.length - 1 && (
                  <div className="absolute -right-5 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-md border border-bg-primary/20 bg-accent-primary text-bg-primary sm:flex">
                    <MoveRight className="h-5 w-5" />
                  </div>
                )}
              </motion.article>
            ))}
          </div>
        </div>

        {/* ── Stats row ── */}
        <div className="mt-10 grid gap-4 lg:mt-16 lg:grid-cols-[1fr_0.58fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
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
            {/* CSS-animated bars — no JS per bar */}
            <div className="grid h-44 grid-cols-12 items-end gap-1 sm:gap-2">
              {BARS.map((bar, i) => (
                <div
                  key={i}
                  className="rounded-t-[3px] bg-accent-primary bar-pulse"
                  style={{
                    height: bar.height,
                    animationDelay: bar.delay,
                    animationDuration: '2.2s',
                    opacity: 0.28,
                    willChange: 'opacity',
                  }}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.18 }}
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

        {/* ── Workflow node grid ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.22 }}
          className="mt-5 rounded-md border border-bg-primary/15 bg-bg-primary p-5 text-ink shadow-[0_18px_60px_rgba(7,9,7,0.18)] md:p-6"
        >
          <div className="flex flex-col gap-4 border-b border-white/10 pb-5 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="font-mono text-xs text-accent-primary">n8n-style workflow map</div>
              <h3 className="mt-3 text-2xl font-bold md:text-4xl">The automation your team can picture before it launches.</h3>
            </div>
            <p className="max-w-xl text-base leading-7 text-text-muted">
              A visible system flow helps buyers understand what gets automated, where humans stay in control, and how every lead moves toward revenue.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6">
            {workflowNodes.map((node, i) => (
              <div key={node.label} className="relative">
                <div className="flex h-full min-h-40 flex-col rounded-md border border-white/10 bg-paper/5 p-4">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-accent-primary text-bg-primary">
                      <node.icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs text-text-muted">0{i + 1}</span>
                  </div>
                  <h4 className="text-base font-bold lg:text-lg">{node.label}</h4>
                  <p className="mt-3 text-sm leading-6 text-text-muted">{node.detail}</p>
                </div>
                {i < workflowNodes.length - 1 && (
                  <div className="absolute -right-3 top-1/2 z-10 hidden h-[2px] w-6 bg-accent-primary/70 xl:block" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Backend system view ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.28 }}
          className="mt-5 rounded-md border border-bg-primary/15 bg-bg-primary text-ink shadow-[0_18px_60px_rgba(7,9,7,0.18)]"
        >
          <div className="border-b border-white/10 p-5 md:p-6">
            <div className="font-mono text-xs text-accent-primary">backend system view</div>
            <div className="mt-3 grid gap-4 lg:grid-cols-[0.6fr_0.4fr] lg:items-end">
              <div>
                <h3 className="text-2xl font-bold md:text-4xl">A real workflow your team can trust.</h3>
                <p className="mt-3 max-w-3xl text-base leading-7 text-text-muted">
                  Intake, AI reasoning, memory, branch logic, CRM updates, and human review shown as the backend system customers rarely get to see.
                </p>
              </div>
              <div className="grid gap-2 font-mono text-[11px] text-text-muted sm:grid-cols-3 lg:grid-cols-1">
                <div className="rounded-[4px] border border-white/10 bg-white/5 px-3 py-2">active run: lead_4821</div>
                <div className="rounded-[4px] border border-white/10 bg-white/5 px-3 py-2">avg path: 0.4s to routed</div>
                <div className="rounded-[4px] border border-white/10 bg-white/5 px-3 py-2">fallback: human approval gate</div>
              </div>
            </div>
          </div>

          {/* Mobile (<md): vertical stacked cards */}
          <div className="block p-5 sm:hidden">
            <div className="space-y-3">
              {diagramNodes.map((node, i) => (
                <div key={node.label} className={`flex items-center gap-4 rounded-[12px] border ${node.border} bg-paper/10 p-4`}>
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-[10px] border ${node.border} bg-bg-primary/60 ${node.tone}`}>
                    <node.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="font-bold">{node.label}</div>
                    <div className="font-mono text-xs text-text-muted">{node.sub}</div>
                  </div>
                  {i < diagramNodes.length - 1 && (
                    <div className="font-mono text-xs text-text-muted">↓</div>
                  )}
                </div>
              ))}
              <div className="mt-2 grid grid-cols-3 gap-3">
                {subNodes.map((n) => (
                  <div key={n.label} className="flex flex-col items-center gap-2 rounded-[10px] border border-white/10 bg-paper/10 p-3 text-center">
                    <n.icon className="h-5 w-5 text-text-muted" />
                    <div className="text-sm font-bold">{n.label}</div>
                    <div className="font-mono text-[10px] text-text-muted">{n.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tablet (sm–xl): Balanced Flow Map */}
          <div className="hidden p-5 sm:block xl:hidden">
            {/* Primary Workflow Nodes */}
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
              {diagramNodes.map((node, i) => (
                <div 
                  key={node.label} 
                  className={`flex flex-col gap-3 rounded-[12px] border ${node.border} bg-paper/10 p-4 ${
                    i === 1 ? 'md:col-span-1' : ''
                  }`}
                >
                  <div className={`flex h-11 w-11 items-center justify-center rounded-[10px] border ${node.border} bg-bg-primary/60 ${node.tone}`}>
                    <node.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-bold">{node.label}</div>
                    <div className="font-mono text-xs text-text-muted">{node.sub}</div>
                  </div>
                </div>
              ))}
              {/* Add an empty placeholder card or info panel to elegantly fill the 6th spot on 3-col layouts */}
              <div className="hidden flex-col justify-center rounded-[12px] border border-dashed border-white/10 bg-transparent p-4 md:flex">
                <div className="font-mono text-[11px] text-text-muted">Workflow status</div>
                <div className="mt-1 text-xs font-semibold text-accent-primary">Fully automated & monitored</div>
              </div>
            </div>

            {/* AI Agent Sub-systems */}
            <div className="mt-5 border-t border-white/10 pt-4">
              <div className="mb-3 font-mono text-xs text-text-muted">AI agent capabilities</div>
              <div className="grid grid-cols-3 gap-3">
                {subNodes.map((n) => (
                  <div key={n.label} className="flex flex-col gap-2 rounded-[10px] border border-white/5 bg-paper/5 p-3.5">
                    <div className="flex items-center gap-2">
                      <n.icon className="h-4 w-4 text-accent-primary" />
                      <div className="font-bold text-sm">{n.label}</div>
                    </div>
                    <div className="font-mono text-xs text-text-muted">{n.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop (xl+): SVG diagram — needs ~1100px to render without clipping */}
          <div className="hidden overflow-x-auto bg-[radial-gradient(circle,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:24px_24px] p-5 xl:block xl:p-6">
            <div className="relative mx-auto h-[520px] min-w-[980px] max-w-[1120px]">
              <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1120 520" preserveAspectRatio="none" aria-hidden="true">
                <path d="M128 205 L320 205" className="fill-none stroke-white/20" strokeWidth="3" />
                <path d="M580 205 L732 205" className="fill-none stroke-white/20" strokeWidth="3" />
                <path d="M820 183 C905 183 905 106 989 106" className="fill-none stroke-white/20" strokeWidth="3" />
                <path d="M820 228 C905 228 905 318 989 318" className="fill-none stroke-white/20" strokeWidth="3" />
                <path d="M370 276 C370 337 264 337 264 398" className="fill-none stroke-white/20" strokeDasharray="8 9" strokeWidth="3" />
                <path d="M450 276 C450 337 518 337 518 398" className="fill-none stroke-white/20" strokeDasharray="8 9" strokeWidth="3" />
                <path d="M530 276 C530 337 764 337 764 398" className="fill-none stroke-white/20" strokeDasharray="8 9" strokeWidth="3" />
              </svg>

              <div className="absolute left-[14px] top-[157px] w-[140px] text-center">
                <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-[18px] border border-white/18 bg-paper/10 text-accent-tertiary shadow-[0_18px_50px_rgba(0,0,0,0.28)]">
                  <MessageSquare className="h-10 w-10" />
                  <span className="absolute -right-2 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full border-2 border-bg-primary bg-surface" />
                </div>
                <div className="mt-3 text-lg font-bold">Lead form</div>
                <div className="font-mono text-xs text-text-muted">new inquiry</div>
              </div>

              <div className="absolute left-[320px] top-[135px] w-[260px] rounded-[14px] border border-white/18 bg-paper/10 p-4 shadow-[0_18px_50px_rgba(0,0,0,0.28)]">
                <span className="absolute -left-3 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full border-2 border-bg-primary bg-surface" />
                <span className="absolute -right-3 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full border-2 border-bg-primary bg-surface" />
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[12px] bg-bg-primary text-accent-primary">
                    <Bot className="h-8 w-8" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">AI agent</div>
                    <div className="font-mono text-xs text-text-muted">qualify + decide</div>
                  </div>
                </div>
                <div className="mt-5 grid grid-cols-3 gap-3 border-t border-white/10 pt-4 font-mono text-[11px] text-text-muted">
                  <span className="relative text-center before:absolute before:-top-5 before:left-1/2 before:h-3 before:w-px before:-translate-x-1/2 before:bg-white/18">model</span>
                  <span className="relative text-center before:absolute before:-top-5 before:left-1/2 before:h-3 before:w-px before:-translate-x-1/2 before:bg-white/18">memory</span>
                  <span className="relative text-center before:absolute before:-top-5 before:left-1/2 before:h-3 before:w-px before:-translate-x-1/2 before:bg-white/18">tools</span>
                </div>
              </div>

              <div className="absolute left-[716px] top-[157px] w-[120px] text-center">
                <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-[18px] border border-white/18 bg-paper/10 text-accent-secondary shadow-[0_18px_50px_rgba(0,0,0,0.28)]">
                  <span className="absolute -left-2 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full border-2 border-bg-primary bg-surface" />
                  <span className="absolute -right-2 top-[14px] h-6 w-6 rounded-full border-2 border-bg-primary bg-surface" />
                  <span className="absolute -right-2 top-[59px] h-6 w-6 rounded-full border-2 border-bg-primary bg-surface" />
                  <GitBranch className="h-10 w-10" />
                </div>
                <div className="mt-3 text-lg font-bold">Fit?</div>
                <div className="font-mono text-xs text-text-muted">true / false</div>
              </div>

              <div className="absolute left-[968px] top-[58px] w-[130px] text-center">
                <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-[18px] border border-accent-primary/25 bg-paper/10 text-accent-primary shadow-[0_18px_50px_rgba(0,0,0,0.28)]">
                  <span className="absolute -left-2 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full border-2 border-bg-primary bg-surface" />
                  <CalendarCheck className="h-10 w-10" />
                </div>
                <div className="mt-3 text-lg font-bold">Book call</div>
                <div className="font-mono text-xs text-text-muted">calendar + CRM</div>
              </div>

              <div className="absolute left-[968px] top-[270px] w-[130px] text-center">
                <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-[18px] border border-white/18 bg-paper/10 text-accent-tertiary shadow-[0_18px_50px_rgba(0,0,0,0.28)]">
                  <span className="absolute -left-2 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full border-2 border-bg-primary bg-surface" />
                  <ShieldCheck className="h-10 w-10" />
                </div>
                <div className="mt-3 text-lg font-bold">Human review</div>
                <div className="font-mono text-xs text-text-muted">safe fallback</div>
              </div>

              <div className="absolute left-[204px] top-[398px] w-[120px] text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-white/18 bg-paper/10 text-text-muted">
                  <Sparkles className="h-8 w-8" />
                </div>
                <div className="mt-2 text-base font-bold">Model</div>
                <div className="font-mono text-xs text-text-muted">intent + tone</div>
              </div>

              <div className="absolute left-[458px] top-[398px] w-[120px] text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-white/18 bg-paper/10 text-text-muted">
                  <Database className="h-8 w-8" />
                </div>
                <div className="mt-2 text-base font-bold">Memory</div>
                <div className="font-mono text-xs text-text-muted">lead history</div>
              </div>

              <div className="absolute left-[704px] top-[398px] w-[120px] text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-white/18 bg-paper/10 text-text-muted">
                  <Send className="h-8 w-8" />
                </div>
                <div className="mt-2 text-base font-bold">Tools</div>
                <div className="font-mono text-xs text-text-muted">CRM actions</div>
              </div>

              <div className="absolute left-[842px] top-[168px] font-mono text-xs text-text-muted">true</div>
              <div className="absolute left-[842px] top-[270px] font-mono text-xs text-text-muted">false</div>
              <div className="absolute left-[1110px] top-[94px] flex h-9 w-9 items-center justify-center rounded-[8px] bg-paper/10 text-xl text-text-muted">+</div>
              <div className="absolute left-[1110px] top-[306px] flex h-9 w-9 items-center justify-center rounded-[8px] bg-paper/10 text-xl text-text-muted">+</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
