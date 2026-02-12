import Hero from '../../components/Hero'
import Awards from '../../components/Awards'
import TrustExperience from '../../components/TrustExperience'
import Performance from '../../components/Performance'
import Testimonials from '../../components/Testimonials'
import PracticeAreas from '../../components/PracticeAreas'
import Team from '../../components/Team'
import FAQ from '../../components/FAQ'
import Locations from '../../components/Locations'
import Footer from '../../components/Footer'
import './HomePage.css'

const HomePage = () => {
  return (
    <div className="home-page">
      <Hero />
      <Awards />
      <TrustExperience />
      <Performance />
      <Testimonials />
      <PracticeAreas />
      <Team />
      <FAQ />
      <Locations />
      <Footer />
    </div>
  )
}

export default HomePage
