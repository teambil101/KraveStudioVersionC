import Hero from '../components/Hero'
import LogoMarquee from '../components/LogoMarquee'
import VoiceAISection from '../components/VoiceAISection'
import RAGSection from '../components/RAGSection'
import ServicesSection from '../components/ServicesSection'
import StatsSection from '../components/StatsSection'
import CTASection from '../components/CTASection'

export default function Home() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <VoiceAISection />
      <RAGSection />
      <ServicesSection />
      <StatsSection />
      <CTASection />
    </>
  )
}
