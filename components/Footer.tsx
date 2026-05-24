'use client';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function Footer() {
  const { language, t } = useLanguage();

  const links = [
    [t.navbar.services, '#services'],
    [t.navbar.process, '#process'],
    [t.navbar.useCases, '#use-cases'],
    [t.navbar.proof, '#proof'],
    [t.navbar.faq, '#faq'],
  ];

  const whatsappUrl = `https://api.whatsapp.com/send?phone=201069237525&text=${encodeURIComponent(t.cta.message)}`;

  return (
    <footer className="w-full bg-bg-primary px-5 py-12 text-ink md:px-8 lg:px-10">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-10 border-t border-white/10 pt-10 md:grid-cols-[1.2fr_0.8fr] md:items-start">
          <div>
            <div className="flex items-center gap-3">
              <svg
                className="h-8 w-auto text-accent-primary drop-shadow-[0_0_8px_rgba(183,255,42,0.25)]"
                viewBox="0 0 1024 903"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="currentColor" stroke="#000000" strokeWidth="24" strokeLinejoin="round" strokeLinecap="round" d="M876 122H466c-92 0-145 54-159 129L145 742h112l98-285h176l44-111H396c12-68 36-113 81-113h355Z"/>
                <path fill="currentColor" stroke="#000000" strokeWidth="24" strokeLinejoin="round" strokeLinecap="round" d="M620 346h88l172 396H759L635 457h-59Z"/>
                <path fill="currentColor" stroke="#000000" strokeWidth="24" strokeLinejoin="round" strokeLinecap="round" d="M439 506h121l-46 120h188l-45 116H450c-40 0-62-32-62-79Z"/>
              </svg>
              <span className="text-2xl font-bold tracking-wider">FETCH</span>
            </div>
            <p className="mt-5 max-w-xl text-base leading-7 text-text-muted">
              {t.footer.description}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-6">
              <a href="#contact" className="inline-flex items-center gap-2 font-bold text-accent-primary hover:underline">
                {t.footer.audit}
                <ArrowUpRight className={`h-4 w-4 transition-transform ${language === 'ar' ? 'rotate-[-90deg]' : ''}`} />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-text-muted transition-colors hover:text-accent-primary"
              >
                <div className="flex h-5 w-5 items-center justify-center rounded-[3px] bg-accent-primary text-bg-primary">
                  <svg className="h-3 w-3 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.15-.173.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413z" />
                  </svg>
                </div>
                <span>{t.footer.whatsapp}</span>
                <span className={`font-mono text-[10px] text-accent-primary opacity-0 transition-opacity group-hover:opacity-100 ${language === 'ar' ? 'rotate-180' : ''}`}>→</span>
              </a>
            </div>
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
          <p>{t.footer.copyright}</p>
          <div className="flex gap-5">
            <a href="#" className="transition-colors hover:text-ink">{t.footer.privacy}</a>
            <a href="#" className="transition-colors hover:text-ink">{t.footer.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

