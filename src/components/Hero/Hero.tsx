import './Hero.css'

const Hero = () => {
  // Using professional team photo from Unsplash - replace with your own image later
  const teamImageUrl = 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80'
  
  return (
    <section className="hero">
      <div className="hero-background">
        <img src={teamImageUrl} alt="Ahmed Law Firm Team" className="hero-image" />
        <div className="hero-gradient"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-firm-name">AHMED LAW FIRM</div>
        <h1 className="hero-headline">
          <span className="hero-line-1">We turn accidents</span>
          <span className="hero-line-2">
            <span className="hero-text-into">into </span>
            <span className="hero-text-new-beginnings">new beginnings</span>
          </span>
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
