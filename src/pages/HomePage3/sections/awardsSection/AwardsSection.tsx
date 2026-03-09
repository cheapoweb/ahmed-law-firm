import { useTranslation } from 'react-i18next'
import './AwardsSection.css'

const awardKeys = [
  'sections.awards.bestLawyers',
  'sections.awards.superLawyers',
  'sections.awards.martindaleHubbell',
  'sections.awards.avPreeminent',
  'sections.awards.legal500',
  'sections.awards.chambersUSA',
  'sections.awards.law360',
  'sections.awards.trialLawyers',
  'sections.awards.millionDollar',
  'sections.awards.multiMillionDollar',
  'sections.awards.topVerdict',
  'sections.awards.nationalTrialLawyers',
]

const AwardsSection = () => {
  const { t } = useTranslation()
  return (
    <section className="hp3-awards-section">
      <div className="hp3-awards-container">
        <p className="hp3-awards-label">{t('sections.awards.label')}</p>
        <h2 className="hp3-awards-heading">
          {t('sections.awards.heading')} <em>{t('sections.awards.headingEm')}</em>
        </h2>
        <div className="hp3-awards-carousel">
          <div className="hp3-awards-track">
            <div className="hp3-awards-track-half" aria-hidden>
              {awardKeys.map((key, index) => (
                <div key={`award-a-${index}`} className="hp3-awards-item">
                  <div className="hp3-awards-placeholder">
                    <span className="hp3-awards-placeholder-text">{t(key)}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="hp3-awards-track-half" aria-hidden>
              {awardKeys.map((key, index) => (
                <div key={`award-b-${index}`} className="hp3-awards-item">
                  <div className="hp3-awards-placeholder">
                    <span className="hp3-awards-placeholder-text">{t(key)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AwardsSection
