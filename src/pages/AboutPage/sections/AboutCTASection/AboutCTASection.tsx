import ShapeDivider from '../../../../components/ShapeDivider'
import './AboutCTASection.css'

export const AboutCTASection = () => {
  return (
    <section className="about-cta-section">
      <ShapeDivider color="#FFFFFF" />
      <div className="about-cta-container">
        <h2 className="about-cta-heading">
          Ready to Work With New York's Most Trusted Injury Lawyers?
        </h2>
        <p className="about-cta-description">
          With over 40 years of experience and $100M+ recovered, our team is ready to fight for your rights. Get your free case evaluation today.
        </p>
        <div className="about-cta-buttons">
          <a href="#contact" className="cta-button-primary">
            SCHEDULE FREE CONSULTATION
          </a>
          <a href="tel:7188489595" className="cta-button-secondary">
            (718) 848-9595
          </a>
        </div>
      </div>
    </section>
  )
}
