import Footer from '../../components/Footer'
import PageBanner from '../../components/PageBanner'
import { AboutFirmSection } from './sections/AboutFirmSection'
import { ExperienceCommitmentSection } from './sections/ExperienceCommitmentSection'
import { AboutCTASection } from './sections/AboutCTASection'
import './AboutPage.css'

const AboutPage = () => {
  return (
    <div className="about-page">
      <PageBanner 
        title="Our Firm"
        subtitle="Established in 1981, built on trust, integrity and successfully delivering desired results to our clients."
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
