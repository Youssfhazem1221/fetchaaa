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
          <motion.svg
            className="h-6 w-auto text-accent-primary drop-shadow-[0_0_8px_rgba(183,255,42,0.35)]"
            viewBox="0 0 1024 903"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            animate={{ opacity: [0.85, 1, 0.85] }}
            transition={{ repeat: Infinity, duration: 2.8, ease: 'easeInOut' }}
          >
            <path fill="currentColor" stroke="#000000" strokeWidth="24" strokeLinejoin="round" strokeLinecap="round" d="M876 122H466c-92 0-145 54-159 129L145 742h112l98-285h176l44-111H396c12-68 36-113 81-113h355Z"/>
            <path fill="currentColor" stroke="#000000" strokeWidth="24" strokeLinejoin="round" strokeLinecap="round" d="M620 346h88l172 396H759L635 457h-59Z"/>
            <path fill="currentColor" stroke="#000000" strokeWidth="24" strokeLinejoin="round" strokeLinecap="round" d="M439 506h121l-46 120h188l-45 116H450c-40 0-62-32-62-79Z"/>
          </motion.svg>
          <span className="text-lg font-bold text-text-primary tracking-wider">FETCH</span>
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

