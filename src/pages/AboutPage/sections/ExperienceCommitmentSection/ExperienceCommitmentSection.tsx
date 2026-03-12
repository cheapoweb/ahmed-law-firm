import { useTranslation } from 'react-i18next'
import './ExperienceCommitmentSection.css'

export const ExperienceCommitmentSection = () => {
  const { t } = useTranslation()
  return (
    <section className="experience-commitment-section">
      <div className="experience-commitment-container">
        <div className="experience-commitment-content">
          <div className="experience-column">
            <h2 className="section-column-title">{t('pages.about.experienceTitle')}</h2>
            <p className="section-column-intro">
              {t('pages.about.experienceIntro')}
            </p>
            <ul className="experience-list">
              <li>{t('pages.about.experienceItem1')}</li>
              <li>{t('pages.about.experienceItem2')}</li>
              <li>{t('pages.about.experienceItem3')}</li>
              <li>{t('pages.about.experienceItem4')}</li>
              <li>{t('pages.about.experienceItem5')}</li>
              <li>{t('pages.about.experienceItem6')}</li>
            </ul>
          </div>
          
          <div className="commitment-column">
            <h2 className="section-column-title">{t('pages.about.commitmentTitle')}</h2>
            <p className="section-column-intro">
              {t('pages.about.commitmentIntro')}
            </p>
            <ul className="commitment-list">
              <li>
                <span className="checkmark">✓</span>
                <span>{t('pages.about.commitmentItem1')}</span>
              </li>
              <li>
                <span className="checkmark">✓</span>
                <span>{t('pages.about.commitmentItem2')}</span>
              </li>
              <li>
                <span className="checkmark">✓</span>
                <span>{t('pages.about.commitmentItem3')}</span>
              </li>
              <li>
                <span className="checkmark">✓</span>
                <span>{t('pages.about.commitmentItem4')}</span>
              </li>
              <li>
                <span className="checkmark">✓</span>
                <span>{t('pages.about.commitmentItem5')}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
