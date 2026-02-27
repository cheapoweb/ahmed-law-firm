import { Link } from 'react-router-dom'
import abuAhmedImage from '../../../../assets/Abu Ahmed.webp'
import usmanAhmedImage from '../../../../assets/Usman Ahmed.webp'
import './TeamSection.css'

const attorneys = [
  { name: 'Abu Ahmed', title: 'ESQUIRE', image: abuAhmedImage },
  { name: 'Usman Ahmed', title: 'ESQUIRE', image: usmanAhmedImage },
]

const TeamSection = () => (
  <section className="hp3-team-section">
    <div className="hp3-team-container">
      <div className="hp3-team-label">OUR TEAM</div>
      <h2 className="hp3-team-heading">
        Working With The Best Has<br />
        <em>Never Been Easier</em>
      </h2>

      <div className="hp3-team-grid">
        {attorneys.map((attorney, index) => (
          <div key={index} className="hp3-team-member">
            <div className="hp3-member-photo">
              <img src={attorney.image} alt={attorney.name} className="hp3-member-image" />
            </div>
            <div className="hp3-member-info">
              <h3 className="hp3-member-name">{attorney.name}</h3>
              <p className="hp3-member-title">{attorney.title}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="hp3-team-footer">
        <Link to="/attorneys" className="hp3-view-all-button">
          VIEW ALL ATTORNEYS
        </Link>
      </div>
    </div>
  </section>
)

export default TeamSection
