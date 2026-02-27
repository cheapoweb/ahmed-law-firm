import Footer from '../../components/Footer'
import HeroSection from './sections/heroSection/HeroSection'
import AwardsSection from './sections/awardsSection/AwardsSection'
import ValueSection from './sections/valueSection/ValueSection'
import PerformanceSection from './sections/performanceSection/PerformanceSection'
import PracticeAreasSection from './sections/practiceAreasSection/PracticeAreasSection'
import TeamSection from './sections/teamSection/TeamSection'
import ReviewsSection from './sections/reviewsSection/ReviewsSection'
import FAQSection from './sections/faqSection/FAQSection'
import LocationsSection from './sections/locationsSection/LocationsSection'
import './HomePage3.css'

const HomePage3 = () => {
  return (
    <div className="home-page-3">
      <HeroSection />
      <AwardsSection />
      <ValueSection />
      <PerformanceSection />
      <PracticeAreasSection />
      <TeamSection />
      <ReviewsSection />
      <FAQSection />
      <LocationsSection />
      <Footer />
    </div>
  )
}

export default HomePage3
