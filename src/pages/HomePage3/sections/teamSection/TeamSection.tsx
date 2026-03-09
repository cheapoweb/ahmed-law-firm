import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import abuAhmedImage from '../../../../assets/Abu Ahmed.webp'
import usmanAhmedImage from '../../../../assets/Usman Ahmed.webp'
import './TeamSection.css'

const attorneys = [
  { name: 'Abu Ahmed', image: abuAhmedImage },
  { name: 'Usman Ahmed', image: usmanAhmedImage },
]

const TeamSection = () => {
  const { t } = useTranslation()
  return (
  <section className="hp3-team-section">
    <div className="hp3-team-container">
      <div className="hp3-team-label">{t('sections.team.label')}</div>
      <h2 className="hp3-team-heading">
        {t('sections.team.heading')}<br />
        <em>{t('sections.team.headingEm')}</em>
      </h2>

      <div className="hp3-team-grid">
        {attorneys.map((attorney, index) => (
          <div key={index} className="hp3-team-member">
            <div className="hp3-member-photo">
              <img src={attorney.image} alt={attorney.name} className="hp3-member-image" />
            </div>
            <div className="hp3-member-info">
              <h3 className="hp3-member-name">{attorney.name}</h3>
              <p className="hp3-member-title">{t('sections.team.esquire')}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="hp3-team-footer">
        <Link to="/attorneys" className="hp3-view-all-button">
          {t('sections.team.viewAllAttorneys')}
        </Link>
      </div>
    </div>
  </section>
  )
}

export default TeamSection
