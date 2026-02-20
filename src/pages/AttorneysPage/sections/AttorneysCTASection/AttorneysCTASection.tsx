import ShapeDivider from '../../../../components/ShapeDivider'
import './AttorneysCTASection.css'

export const AttorneysCTASection = () => {
  return (
    <section className="attorneys-cta-section">
      <ShapeDivider color="#FFFFFF" />
      <div className="attorneys-cta-container">
        <h2 className="attorneys-cta-heading">
          Let Our Experienced Attorneys Fight for You
        </h2>
        <p className="attorneys-cta-description">
          With decades of combined experience and a proven track record of success, our legal team is ready to help you get the compensation you deserve. Contact us today for a free consultation.
        </p>
        <div className="attorneys-cta-buttons">
          <a href="#contact" className="attorneys-cta-button-primary">
            SCHEDULE FREE CONSULTATION
          </a>
          <a href="tel:7188489595" className="attorneys-cta-button-secondary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            CALL (718) 848-9595
          </a>
        </div>
      </div>
    </section>
  )
}
