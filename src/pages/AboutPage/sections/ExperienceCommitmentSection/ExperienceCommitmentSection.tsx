import ShapeDivider from '../../../../components/ShapeDivider'
import './ExperienceCommitmentSection.css'

export const ExperienceCommitmentSection = () => {
  return (
    <section className="experience-commitment-section">
      <ShapeDivider color="#F8F8F8" />
      <div className="experience-commitment-container">
        <div className="experience-commitment-content">
          <div className="experience-column">
            <h2 className="section-column-title">Our Experience</h2>
            <p className="section-column-intro">
              With over 40 years of combined experience, our attorneys have successfully represented thousands of clients across New York.
            </p>
            <ul className="experience-list">
              <li>Catastrophic Injury Cases</li>
              <li>Automobile Accidents</li>
              <li>Construction Site Accidents</li>
              <li>Medical Malpractice</li>
              <li>Workers' Compensation Claims</li>
              <li>Premises Liability</li>
            </ul>
          </div>
          
          <div className="commitment-column">
            <h2 className="section-column-title">Our Commitment</h2>
            <p className="section-column-intro">
              We are committed to providing personalized attention and aggressive representation for every client.
            </p>
            <ul className="commitment-list">
              <li>
                <span className="checkmark">✓</span>
                <span>No Fee Unless We Win</span>
              </li>
              <li>
                <span className="checkmark">✓</span>
                <span>Proven Results</span>
              </li>
              <li>
                <span className="checkmark">✓</span>
                <span>Personal Attention</span>
              </li>
              <li>
                <span className="checkmark">✓</span>
                <span>24/7 Availability</span>
              </li>
              <li>
                <span className="checkmark">✓</span>
                <span>Experienced Attorneys</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
