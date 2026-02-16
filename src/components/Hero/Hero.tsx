import teamImage from '../../assets/team-full.webp'
import bannerBuildings from '../../assets/banner-buildings.webp'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <img src={bannerBuildings} alt="Buildings Background" className="hero-background-image" />
        <img src={teamImage} alt="Ahmed Law Firm Team" className="hero-team-image" />
        <div className="hero-gradient"></div>
      </div>
      
      <div className="hero-content">
        <h1 className="hero-headline">
          <div className="hero-line-1">
            When things go <span className="hero-text-wrong">wrong</span>,
          </div>
          <div className="hero-line-2">
            we make them <span className="hero-text-right">right</span>
          </div>
        </h1>
        
        <div className="hero-buttons">
          <button className="hero-button hero-button-primary">
            SCHEDULE FREE CONSULTATION
          </button>
          <button className="hero-button hero-button-secondary">
            RECEIVE A CALL BACK
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
