import ShapeDivider from '../../../../components/ShapeDivider'
import abuAhmedImage from '../../../../assets/Abu Ahmed.webp'
import usmanAhmedImage from '../../../../assets/Usman Ahmed.webp'
import './TeamSection.css'

const attorneys = [
  { name: 'Abu Ahmed', title: 'ESQUIRE', image: abuAhmedImage },
  { name: 'Usman Ahmed', title: 'ESQUIRE', image: usmanAhmedImage },
]

export const TeamSection = () => (
  <section className="team-section">
    <ShapeDivider color="#FFFFFF" />
    <div className="team-container">
      <div className="team-label">OUR PERFORMANCE</div>
      <h2 className="team-heading">
        Working with the best has<br />
        <em>never been easier.</em>
      </h2>
      
      <div className="team-grid">
        {attorneys.map((attorney, index) => (
          <div key={index} className="team-member">
            <div className="member-photo">
              <img src={attorney.image} alt={attorney.name} className="member-image" />
            </div>
            <div className="member-info">
              <h3 className="member-name">{attorney.name}</h3>
              <p className="member-title">{attorney.title}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="team-footer">
        <button className="view-all-button">VIEW ALL ATTORNEYS</button>
      </div>
    </div>
  </section>
)
