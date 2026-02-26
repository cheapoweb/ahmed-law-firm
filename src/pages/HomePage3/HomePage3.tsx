import Footer from '../../components/Footer'
import HeroSection from './sections/heroSection/HeroSection'
import AwardsSection from './sections/awardsSection/AwardsSection'
import ValueSection from './sections/valueSection/ValueSection'
import PerformanceSection from './sections/performanceSection/PerformanceSection'
import PracticeAreasSection from './sections/practiceAreasSection/PracticeAreasSection'
import './HomePage3.css'

const HomePage3 = () => {
  return (
    <div className="home-page-3">
      <HeroSection />
      <AwardsSection />
      <ValueSection />
      <PerformanceSection />
      <PracticeAreasSection />
      {/* Rest of layout will be added step by step */}
      <Footer />
    </div>
  )
}

export default HomePage3
