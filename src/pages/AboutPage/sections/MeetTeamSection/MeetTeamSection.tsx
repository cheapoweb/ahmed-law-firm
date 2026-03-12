import { useTranslation } from 'react-i18next'
import './MeetTeamSection.css'

export const MeetTeamSection = () => {
  const { t } = useTranslation()
  return (
    <section className="meet-team-section">
      <div className="meet-team-container">
        <h2 className="meet-team-heading">{t('pages.about.meetTeamHeading')}</h2>
        <p className="meet-team-description">
          {t('pages.about.meetTeamDesc')}
        </p>
        <a href="#team" className="meet-team-button">
          {t('pages.about.meetTeamButton')}
        </a>
      </div>
    </section>
  )
}
