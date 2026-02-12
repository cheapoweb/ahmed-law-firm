import ShapeDivider from '../ShapeDivider'
import './TrustExperience.css'

const TrustExperience = () => {
  return (
    <section className="trust-experience-section">
      <ShapeDivider variant="light-to-dark" />
      <div className="trust-experience-container">
        <div className="trust-experience-header">
          <div className="trust-tagline">Trust • Integrity • Results</div>
          <h2 className="established-year">Established 1981</h2>
          <div className="experience-statement">
            <p className="statement-text">
              When you choose Ahmed Law Firm, you receive 40 years of experience. Engineered for one purpose: maximizing your recovery, while minimizing your stress.
            </p>
          </div>
          <div className="investment-statement">
            <p className="investment-text">
              We've invested continuously into every to deliver exceptional outcomes. Both in the courtroom and in each interaction you have with us.
            </p>
          </div>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3 className="feature-heading">The Numbers Speak Louder Than Words</h3>
            <p className="feature-description">
              $100M+ recovered, 40+ years of proven results, zero upfront costs, &lt;2 hour response time. A track record you can trust.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💻</div>
            <h3 className="feature-heading">Smart Tech, Personal Touch</h3>
            <p className="feature-description">
              You'll never wonder about your case status again. We've built systems to keep you updated every step of the way.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">⭐</div>
            <h3 className="feature-heading">Specialized Excellence Across Every Case Type</h3>
            <p className="feature-description">
              Board-certified attorneys who master specific niches, not generalists trying to cover everything.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">$</div>
            <h3 className="feature-heading">Your Recovery, Our Investment</h3>
            <p className="feature-description">
              We advance all costs (experts, records, medical reports) to match insurance companies dollar-for-dollar.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustExperience
