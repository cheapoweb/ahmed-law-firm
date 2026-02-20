import ShapeDivider from '../../../../components/ShapeDivider'
import './AboutHeroSection.css'

export const AboutHeroSection = () => {
  return (
    <section className="about-hero-section">
      <ShapeDivider color="#FFFFFF" />
      <div className="about-hero-container">
        <h1 className="about-hero-title">Our Firm</h1>
        <p className="about-hero-subtitle">
          Established in 1981, built on trust, integrity and successfully delivering desired results to our clients.
        </p>
        <div className="about-hero-underline"></div>
      </div>
    </section>
  )
}
