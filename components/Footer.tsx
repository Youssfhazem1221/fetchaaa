import { ArrowUpRight } from 'lucide-react';

const links = [
  ['Services', '#services'],
  ['Process', '#process'],
  ['Use cases', '#use-cases'],
  ['Proof', '#proof'],
  ['FAQ', '#faq'],
];

export default function Footer() {
  return (
    <footer className="w-full bg-bg-primary px-5 py-12 text-ink md:px-8 lg:px-10">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-10 border-t border-white/10 pt-10 md:grid-cols-[1.2fr_0.8fr] md:items-start">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-sm bg-accent-primary shadow-[0_0_18px_rgba(183,255,42,0.45)]" />
              <span className="text-2xl font-bold">FETCH</span>
            </div>
            <p className="mt-5 max-w-xl text-base leading-7 text-text-muted">
              Premium AI automation systems for teams that want faster response, cleaner handoffs, and operations that keep up with demand.
            </p>
            <a href="#contact" className="mt-7 inline-flex items-center gap-2 font-bold text-accent-primary">
              Start the audit
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid gap-3 md:justify-items-end">
            {links.map(([label, href]) => (
              <a key={href} href={href} className="text-sm font-semibold text-text-muted transition-colors hover:text-accent-primary">
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 font-mono text-xs text-text-muted md:flex-row md:items-center md:justify-between">
          <p>Copyright 2026 Fetch AI Agency. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="transition-colors hover:text-ink">Privacy</a>
            <a href="#" className="transition-colors hover:text-ink">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
