import { Link } from 'react-router-dom'
import teamImage from '../../../../assets/team-full.webp'
import bgHeroSection from '../../../../assets/BG_HEROSECTION.png'
import './HeroSection.css'

const HeroSection = () => {
  return (
    <section className="hp3-hero">
      <div className="hp3-hero-bg" style={{ backgroundImage: `url(${bgHeroSection})` }} aria-hidden />
      <div className="hp3-hero-overlay" />
      <div className="hp3-hero-inner">
        <div className="hp3-hero-left">
          <h1 className="hp3-hero-headline">
            <span className="hp3-hero-headline-italic">Injured?</span>
            <span className="hp3-hero-headline-bold">Get Justice Now!</span>
          </h1>
          <p className="hp3-hero-desc">
            Leave the legal process to our award-winning personal injury lawyers, and get the compensation you deserve.
          </p>
          <div className="hp3-hero-buttons">
            <Link to="/contact" className="hp3-hero-btn hp3-hero-btn--primary">
              Free Consultation
            </Link>
            <Link to="/attorneys" className="hp3-hero-btn hp3-hero-btn--secondary">
              Our Attorneys
            </Link>
          </div>
        </div>
        <div className="hp3-hero-right">
          <img src={teamImage} alt="Ahmed Law Firm Team" className="hp3-hero-team-img" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
