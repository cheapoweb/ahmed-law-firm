import ShapeDivider from '../../../../components/ShapeDivider'
import './AttorneysHeroSection.css'

export const AttorneysHeroSection = () => {
  return (
    <section className="attorneys-hero-section">
      <ShapeDivider color="#FFFFFF" />
      <div className="attorneys-hero-container">
        <h1 className="attorneys-hero-title">Our New York Personal Injury Legal Team</h1>
        <div className="attorneys-hero-content">
          <p>
            At Ahmed Law Firm, our team of experienced personal injury attorneys is dedicated to fighting for the rights of injured individuals throughout New York. With decades of combined experience, we have successfully represented thousands of clients and recovered millions of dollars in compensation.
          </p>
          <p>
            Our attorneys understand the physical, emotional, and financial toll that personal injuries can take on victims and their families. We work tirelessly to ensure our clients receive the justice and compensation they deserve.
          </p>
        </div>
        <h2 className="attorneys-hero-subheading">Meet Our Skilled Team Of Lawyers</h2>
        <div className="attorneys-hero-content">
          <p>
            Our legal team brings together diverse expertise and a shared commitment to excellence. Each attorney at Ahmed Law Firm brings unique skills and experience to help achieve the best possible outcomes for our clients.
          </p>
          <p>
            From complex catastrophic injury cases to straightforward personal injury claims, our attorneys have the knowledge and dedication to guide you through every step of the legal process.
          </p>
        </div>
      </div>
    </section>
  )
}
