import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { HeroSection } from '../components/HeroSection'
import { FeatureSection } from "../components/FeatureSection";
import { FeatureStats } from '../components/FeatureStats';
import { TestimonialSection } from '../components/TestimonialSection';

export function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeatureStats />
      <FeatureSection />
      <TestimonialSection />
      <Footer />
    </div>
  )
} 