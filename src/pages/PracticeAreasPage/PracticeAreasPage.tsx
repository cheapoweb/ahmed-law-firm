import Footer from '../../components/Footer'
import PageBanner from '../../components/PageBanner'
import { useTranslation } from 'react-i18next'
import { AllPracticeAreasSection } from './sections/AllPracticeAreasSection'
import { LocationSpecificSection } from './sections/LocationSpecificSection'
import { WhyChooseUsSection } from './sections/WhyChooseUsSection'
import { LocationsSection } from '../HomePage/sections/LocationsSection'
import './PracticeAreasPage.css'

const PracticeAreasPage = () => {
  const { t } = useTranslation()
  return (
    <div className="practice-areas-page">
      <PageBanner 
        title={t('pages.practiceAreas.bannerTitle')}
        subtitle={t('pages.practiceAreas.bannerSubtitle')}
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
