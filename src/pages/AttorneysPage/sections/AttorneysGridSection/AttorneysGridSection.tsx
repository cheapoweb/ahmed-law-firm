import abuAhmedImage from '../../../../assets/Abu Ahmed.webp'
import usmanAhmedImage from '../../../../assets/Usman Ahmed.webp'
import './AttorneysGridSection.css'

const attorneys = [
  { name: 'Abu Ahmed', title: 'ESQUIRE', image: abuAhmedImage },
  { name: 'Usman Ahmed', title: 'ESQUIRE', image: usmanAhmedImage },
]

export const AttorneysGridSection = () => {
  return (
    <section className="attorneys-grid-section">
      <div className="attorneys-grid-container">
        <div className="attorneys-intro">
          <p>
            At Ahmed Law Firm, our team of experienced personal injury attorneys is dedicated to fighting for the rights of injured individuals throughout New York. With decades of combined experience, we have successfully represented thousands of clients and recovered millions of dollars in compensation.
          </p>
          <p>
            Our attorneys understand the physical, emotional, and financial toll that personal injuries can take on victims and their families. We work tirelessly to ensure our clients receive the justice and compensation they deserve.
          </p>
        </div>
        <h2 className="attorneys-grid-heading">Meet Our Skilled Team Of Lawyers</h2>
        <div className="attorneys-intro">
          <p>
            Our legal team brings together diverse expertise and a shared commitment to excellence. Each attorney at Ahmed Law Firm brings unique skills and experience to help achieve the best possible outcomes for our clients.
          </p>
          <p>
            From complex catastrophic injury cases to straightforward personal injury claims, our attorneys have the knowledge and dedication to guide you through every step of the legal process.
          </p>
        </div>
        <div className="attorneys-grid">
          {attorneys.map((attorney, index) => (
            <div key={index} className="attorney-card">
              <div className="attorney-photo">
                <img src={attorney.image} alt={attorney.name} className="attorney-image" />
              </div>
              <div className="attorney-info">
                <h3 className="attorney-name">{attorney.name}</h3>
                <p className="attorney-title">{attorney.title}</p>
                <a href="#" className="attorney-profile-link">View Profile →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
