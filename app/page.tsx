import Hero from '@/components/Hero';
import InfiniteTicker from '@/components/InfiniteTicker';
import ServicesSection from '@/components/ServicesSection';
import LivePerformance from '@/components/LivePerformance';
import ProcessSection from '@/components/ProcessSection';
import BentoGrid from '@/components/BentoGrid';
import CaseStudies from '@/components/CaseStudies';
import AboutUs from '@/components/AboutUs';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center">
      <Hero />
      <InfiniteTicker />
      <ServicesSection />
      <LivePerformance />
      <ProcessSection />
      <BentoGrid />
      <CaseStudies />
      <AboutUs />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
}
