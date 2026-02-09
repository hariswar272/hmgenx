import dynamic from 'next/dynamic';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/features/ScrollProgress';
import WhatsAppButton from '@/components/features/WhatsAppButton';
import BackToTop from '@/components/features/BackToTop';
import PageLoader from '@/components/features/PageLoader';
import CursorGlow from '@/components/features/CursorGlow';
import SectionDivider from '@/components/ui/SectionDivider';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import WhyChooseSection from '@/components/sections/WhyChooseSection';
import TechnologyStack from '@/components/sections/TechnologyStack';
import ServicesSection from '@/components/sections/ServicesSection';
import TeamSection from '@/components/sections/TeamSection';
import PricingSection from '@/components/sections/PricingSection';
import FAQSection from '@/components/sections/FAQSection';
import OMRSection from '@/components/sections/OMRSection';
import ContactSection from '@/components/sections/ContactSection';

const PortfolioSection = dynamic(() => import('@/components/sections/PortfolioSection'));
const TestimonialsSection = dynamic(() => import('@/components/sections/TestimonialsSection'));

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <PageLoader />
      <main className="overflow-x-hidden">
        <HeroSection />
        <SectionDivider variant="wave" />
        <AboutSection />
        <SectionDivider variant="curve" />
        <WhyChooseSection />
        <SectionDivider variant="wave" />
        <TechnologyStack />
        <SectionDivider variant="angle" />
        <ServicesSection />
        <SectionDivider variant="curve" />
        <TeamSection />
        <SectionDivider variant="wave" />
        <PortfolioSection />
        <SectionDivider variant="angle" />
        <TestimonialsSection />
        <SectionDivider variant="wave" />
        <PricingSection />
        <SectionDivider variant="curve" />
        <FAQSection />
        <SectionDivider variant="wave" />
        <OMRSection />
        <SectionDivider variant="angle" />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
}
