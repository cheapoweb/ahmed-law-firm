import Hero from '../../components/Hero'
import Footer from '../../components/Footer'
import { AwardsSection } from './sections/AwardsSection'
import { TrustExperienceSection } from './sections/TrustExperienceSection'
import { PerformanceSection } from './sections/PerformanceSection'
import { TestimonialsSection } from './sections/TestimonialsSection'
import { PracticeAreasSection } from './sections/PracticeAreasSection'
import { TeamSection } from './sections/TeamSection'
import { FAQSection } from './sections/FAQSection'
import { LocationsSection } from './sections/LocationsSection'
import './HomePage.css'

const HomePage = () => {
  return (
    <div className="home-page">
      <Hero />
      <AwardsSection />
      <TrustExperienceSection />
      <PerformanceSection />
      <TestimonialsSection />
      <PracticeAreasSection />
      <TeamSection />
      <FAQSection />
      <LocationsSection />
      <Footer />
    </div>
  )
}

export default HomePage
