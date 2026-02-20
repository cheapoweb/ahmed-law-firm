import Footer from '../../components/Footer'
import PageBanner from '../../components/PageBanner'
import ShapeDivider from '../../components/ShapeDivider'
import { AttorneysGridSection } from './sections/AttorneysGridSection'
import { LocationsSection } from '../HomePage/sections/LocationsSection'
import './AttorneysPage.css'

const AttorneysPage = () => {
  return (
    <div className="attorneys-page">
      <PageBanner 
        title="Our New York Personal Injury Legal Team"
        subtitle="Meet our experienced attorneys dedicated to fighting for your rights and securing the compensation you deserve."
      />
      <AttorneysGridSection />
      <LocationsSection />
      <Footer />
    </div>
  )
}

export default AttorneysPage
