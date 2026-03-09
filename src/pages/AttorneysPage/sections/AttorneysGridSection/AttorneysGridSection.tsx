import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ATTORNEYS } from '../../attorneysData'
import './AttorneysGridSection.css'

export const AttorneysGridSection = () => {
  const { t } = useTranslation()
  return (
    <section className="attorneys-grid-section">
      <div className="attorneys-grid-container">
        <div className="attorneys-intro">
          <p>{t('pages.attorneys.intro1')}</p>
          <p>{t('pages.attorneys.intro2')}</p>
        </div>

        <div className="attorneys-team-label">{t('pages.attorneys.teamLabel')}</div>
        <h2 className="attorneys-team-heading">
          {t('pages.attorneys.teamHeading')}<br />
          <em>{t('pages.attorneys.teamHeadingEm')}</em>
        </h2>

        <div className="attorneys-intro">
          <p>{t('pages.attorneys.intro3')}</p>
          <p>{t('pages.attorneys.intro4')}</p>
        </div>

        <div className="attorneys-grid">
          {ATTORNEYS.map((attorney) => (
            <div key={attorney.slug} className="attorney-card">
              <div className="attorney-photo">
                <img src={attorney.image} alt={attorney.name} className="attorney-image" />
              </div>
              <div className="attorney-info">
                <h3 className="attorney-name">{attorney.name}</h3>
                <p className="attorney-title">{attorney.title.toUpperCase()}</p>
                <Link to={`/attorneys/${attorney.slug}`} className="attorney-profile-link">{t('pages.attorneys.viewProfile')}</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
