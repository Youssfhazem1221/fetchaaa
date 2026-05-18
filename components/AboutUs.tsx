'use client';
import { motion } from 'motion/react';
import { Linkedin } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';

const imagePaths = ['/youssf.jpg', '/mohamed.jpg'];
const linkedinUrls = [
  'https://www.linkedin.com/in/youssfhazem12211/',
  'https://www.linkedin.com/in/mohamed-ahmed-9361b9170/'
];

export default function AboutUs() {
  const { language, t } = useLanguage();

  const founders = t.about.team.map((founder, index) => ({
    ...founder,
    image: imagePaths[index],
    linkedin: linkedinUrls[index],
  }));

  return (
    <section className="relative w-full overflow-hidden bg-bg-primary px-5 py-24 md:px-8 lg:px-10">
      {/* Abstract Background Waves */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <svg
          className="absolute min-w-[1400px] w-full rotate-[-3deg]"
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path className="opacity-15" d="M-100,400 C200,100 400,700 720,400 C1040,100 1240,700 1540,400" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <path className="text-accent-primary opacity-[0.25]" d="M-100,550 C250,200 450,850 720,550 C990,250 1190,900 1540,550" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path className="opacity-15" d="M-100,250 C150,-50 550,550 720,250 C890,-50 1290,550 1540,250" stroke="white" strokeWidth="1.5" strokeDasharray="8 12" strokeLinecap="round" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px]">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 font-mono text-xs text-accent-primary">{t.about.badge}</div>
            <h2 className="text-4xl font-bold leading-[1.05] text-ink md:text-6xl">
              {t.about.title}
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="max-w-2xl text-lg leading-8 text-text-muted lg:ms-auto"
          >
            {t.about.description}
          </motion.p>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-2 lg:gap-10">
          {founders.map((founder, index) => (
            <motion.article
              key={founder.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-[14px] border border-white/10 bg-surface shadow-[0_24px_80px_rgba(7,9,7,0.22)]"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-bg-primary grayscale transition-all duration-500 group-hover:grayscale-0">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-5 left-5 right-5 z-10 flex items-end justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-ink">{founder.name}</h3>
                    <p className="font-mono text-xs text-accent-primary">{founder.role}</p>
                  </div>
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-ink backdrop-blur transition-all hover:bg-accent-primary hover:text-bg-primary"
                    aria-label={`${founder.name}'s LinkedIn`}
                  >
                    <Linkedin className="h-4.5 w-4.5" />
                  </a>
                </div>
              </div>

              <div className="border-t border-white/10 p-5 font-mono text-xs leading-6 text-text-muted">
                <div className="mb-2 text-ink font-bold">{language === 'en' ? 'Focus: ' : 'التركيز: '}{founder.focus}</div>
                {founder.background}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
