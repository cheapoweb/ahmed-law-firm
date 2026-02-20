import Footer from '../../components/Footer'
import PageBanner from '../../components/PageBanner'
import ShapeDivider from '../../components/ShapeDivider'
import { AllPracticeAreasSection } from './sections/AllPracticeAreasSection'
import { LocationSpecificSection } from './sections/LocationSpecificSection'
import { WhyChooseUsSection } from './sections/WhyChooseUsSection'
import { LocationsSection } from '../HomePage/sections/LocationsSection'
import './PracticeAreasPage.css'

const PracticeAreasPage = () => {
  return (
    <div className="practice-areas-page">
      <PageBanner 
        title="Our Practice Areas"
        subtitle="Expert legal representation across multiple areas of law with over 40 years of experience"
      />
      <AllPracticeAreasSection />
      <LocationSpecificSection />
      <WhyChooseUsSection />
      <LocationsSection />
      <Footer />
    </div>
  )
}

export default PracticeAreasPage
