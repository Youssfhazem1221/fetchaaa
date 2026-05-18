import type { Metadata } from 'next';
import { IBM_Plex_Mono, Space_Grotesk, Alexandria } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import WhatsAppFloatingCTA from '@/components/WhatsAppFloatingCTA';
import { LanguageProvider } from '@/lib/LanguageContext';

const sans = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
});

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
});

const arabic = Alexandria({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-arabic',
});

export const metadata: Metadata = {
  title: 'Fetch | AI Operations Systems',
  description: 'Premium AI automation systems for intake, follow-up, scheduling, CRM updates, and team handoffs.',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${sans.variable} ${mono.variable} ${arabic.variable} font-sans antialiased min-h-screen flex flex-col overflow-x-hidden`} suppressHydrationWarning>
        <LanguageProvider>
          <Navbar />
          <main className="flex-1 w-full">
            {children}
          </main>
          <WhatsAppFloatingCTA />
        </LanguageProvider>
      </body>
    </html>
  );
}

