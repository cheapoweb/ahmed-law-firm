import Footer from '../../components/Footer'
import PageBanner from '../../components/PageBanner'
import { useTranslation } from 'react-i18next'
import { AboutFirmSection } from './sections/AboutFirmSection'
import { ExperienceCommitmentSection } from './sections/ExperienceCommitmentSection'
import { AboutCTASection } from './sections/AboutCTASection'
import './AboutPage.css'

const AboutPage = () => {
  const { t } = useTranslation()
  return (
    <div className="about-page">
      <PageBanner 
        title={t('pages.about.bannerTitle')}
        subtitle={t('pages.about.bannerSubtitle')}
      />
      {/* <MeetTeamSection /> */}
      <AboutFirmSection />
      <ExperienceCommitmentSection />
      <AboutCTASection />
      <Footer />
    </div>
  )
}

export default AboutPage
