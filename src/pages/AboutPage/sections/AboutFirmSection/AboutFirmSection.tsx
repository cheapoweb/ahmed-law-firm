import { PracticeAreasSidebar } from '../PracticeAreasSidebar'
import './AboutFirmSection.css'

export const AboutFirmSection = () => {
  return (
    <section className="about-firm-section">
      <div className="about-firm-container">
        <h2 className="about-firm-heading">Injury Law Firm With a Proven Track Record</h2>
        <div className="about-firm-layout">
          <div className="about-firm-sidebar">
            <PracticeAreasSidebar />
          </div>
          <div className="about-firm-main-content">
            <div className="about-firm-text">
              <p>
                Ahmed Law Firm was founded in 1981 with a commitment to providing exceptional legal representation to individuals and families who have been injured due to the negligence of others. Our firm has built a reputation for excellence through decades of dedicated service to our clients throughout New York, including Long Island, Nassau County, Queens County, The Bronx, Brooklyn, NYC, and Suffolk County.
              </p>
              <p>
                We understand that facing a personal injury can be overwhelming, both emotionally and financially. That's why we work on a contingency fee basis, meaning you don't pay unless we win your case. Our experienced attorneys are committed to fighting for your rights and securing the compensation you deserve.
              </p>
            </div>
            
            <div className="about-firm-subsection">
              <h3 className="subsection-heading">Verdicts That Matter</h3>
              <p>
                Over the years, Ahmed Law Firm has successfully represented thousands of clients and recovered millions of dollars in compensation. Our track record speaks to our dedication and expertise in personal injury law. We have achieved significant verdicts and settlements that have made a real difference in our clients' lives.
              </p>
            </div>

            <div className="about-firm-subsection">
              <h3 className="subsection-heading">Attorneys Ready To Fight For You</h3>
              <p>
                Our legal team brings together diverse expertise and a shared commitment to excellence. Each attorney at Ahmed Law Firm brings unique skills and experience to help achieve the best possible outcomes for our clients. From complex catastrophic injury cases to straightforward personal injury claims, our attorneys have the knowledge and dedication to guide you through every step of the legal process.
              </p>
            </div>

            <div className="about-firm-subsection">
              <h3 className="subsection-heading">Our Commitment to Our Clients</h3>
              <p>
                At Ahmed Law Firm, we believe that every client deserves personalized attention and aggressive representation. We take the time to understand your unique situation and develop a strategy tailored to your specific needs. Our commitment extends beyond the courtroom – we're here to support you throughout your recovery and ensure you receive the justice and compensation you deserve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
