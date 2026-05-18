'use client';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function Navbar() {
  const { language, toggleLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t.navbar.services, href: '#services' },
    { label: t.navbar.process, href: '#process' },
    { label: t.navbar.useCases, href: '#use-cases' },
    { label: t.navbar.proof, href: '#proof' },
    { label: t.navbar.faq, href: '#faq' },
  ];

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'border-b border-white/10 bg-bg-primary/90 backdrop-blur-xl' : 'border-b border-white/10 bg-bg-primary/60 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex h-[72px] w-full max-w-[1280px] items-center justify-between px-5 md:px-8 lg:px-10">
        <a href="#" className="group relative flex min-w-0 items-center gap-3">
          <motion.div
            animate={{ opacity: [0.55, 1, 0.55] }}
            transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
            className="h-3 w-3 rounded-sm bg-accent-primary shadow-[0_0_20px_rgba(183,255,42,0.45)]"
          />
          <span className="text-lg font-bold text-text-primary">FETCH</span>
          <span className="hidden border-s border-white/15 ps-3 font-mono text-[11px] text-text-muted sm:inline">
            {language === 'en' ? 'AI operations systems' : 'أنظمة تشغيل العمليات بالذكاء الاصطناعي'}
          </span>
        </a>

        <div className="flex items-center gap-4">
          <nav className="hidden items-center gap-7 text-sm font-medium text-text-muted lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition-colors duration-200 hover:text-accent-primary">
                {item.label}
              </a>
            ))}
          </nav>

          <button
            onClick={toggleLanguage}
            className="h-10 px-3 flex items-center justify-center rounded-md border border-white/10 bg-white/5 font-mono text-xs font-bold text-text-primary transition-all hover:border-accent-primary hover:text-accent-primary cursor-pointer"
            aria-label="Toggle language / تغيير اللغة"
          >
            {language === 'en' ? 'عربي' : 'EN'}
          </button>

          <a
            href="#contact"
            className="hidden h-10 shrink-0 items-center gap-2 rounded-md border border-accent-primary bg-accent-primary px-4 text-sm font-bold text-bg-primary transition-all hover:bg-paper hover:text-bg-primary sm:inline-flex"
          >
            {t.navbar.audit}
            <ArrowUpRight className={`h-4 w-4 transition-transform duration-200 ${language === 'ar' ? 'rotate-[-90deg]' : ''}`} />
          </a>
        </div>
      </div>
    </header>
  );
}

