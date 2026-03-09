import { useTranslation } from 'react-i18next'
import './LocationsSection.css'

const location = {
  name: 'Ahmed Law Firm',
  address: '104-09 113th St',
  city: 'South Richmond Hill, NY 11419, USA',
  phone: '(718) 848-9595',
  email: 'frontdesk@lawahmed.com',
}

const LocationsSection = () => {
  const { t } = useTranslation()
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <section className="hp3-locations-section">
      <div className="hp3-locations-container">
        <p className="hp3-locations-label">{t('sections.locations.label')}</p>
        <h2 className="hp3-locations-heading">
          {t('sections.locations.heading')} <em>{t('sections.locations.headingEm')}</em>
        </h2>

        <div className="hp3-locations-grid">
          <div className="hp3-locations-left">
            <h3 className="hp3-locations-office-name">{location.name}</h3>
            <div className="hp3-locations-block">
              <div className="hp3-locations-block-label">{t('sections.locations.office')}</div>
              <p className="hp3-locations-line">{location.address}</p>
              <p className="hp3-locations-line">{location.city}</p>
            </div>

            <div className="hp3-locations-block">
              <div className="hp3-locations-block-label">{t('sections.locations.contact')}</div>
              <a href="tel:7188489595" className="hp3-locations-link">
                (718) 848-9595
              </a>
              <a href="mailto:frontdesk@lawahmed.com" className="hp3-locations-link hp3-locations-link--muted">
                frontdesk@lawahmed.com
              </a>
            </div>

            <div className="hp3-locations-block">
              <div className="hp3-locations-block-label">{t('sections.locations.serving')}</div>
              <p className="hp3-locations-line hp3-locations-line--muted">
                {t('sections.locations.servingText')}
              </p>
            </div>

            <div className="hp3-locations-social">
              <div className="hp3-locations-social-label">{t('sections.locations.follow')}</div>
              <div className="hp3-locations-social-icons">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={t('sections.locations.facebook')}
                  className="hp3-locations-social-icon"
                >
                  F
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={t('sections.locations.linkedin')}
                  className="hp3-locations-social-icon"
                >
                  in
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={t('sections.locations.instagram')}
                  className="hp3-locations-social-icon"
                >
                  IG
                </a>
              </div>
            </div>
          </div>

          <div className="hp3-locations-right">
            <div className="hp3-locations-form-card">
              <form className="hp3-locations-form" onSubmit={handleSubmit}>
                <div className="hp3-locations-form-row">
                  <div className="hp3-locations-field">
                    <label htmlFor="hp3-name">{t('sections.locations.fullName')}</label>
                    <input id="hp3-name" name="name" type="text" autoComplete="name" required />
                  </div>
                  <div className="hp3-locations-field">
                    <label htmlFor="hp3-phone">{t('sections.locations.phone')}</label>
                    <input id="hp3-phone" name="phone" type="tel" autoComplete="tel" required />
                  </div>
                </div>
                <div className="hp3-locations-form-row">
                  <div className="hp3-locations-field">
                    <label htmlFor="hp3-email">{t('sections.locations.email')}</label>
                    <input id="hp3-email" name="email" type="email" autoComplete="email" />
                  </div>
                  <div className="hp3-locations-field">
                    <label htmlFor="hp3-practice-area">{t('sections.locations.practiceArea')}</label>
                    <select id="hp3-practice-area" name="practiceArea" defaultValue="">
                      <option value="" disabled>
                        {t('sections.locations.selectArea')}
                      </option>
                      <option value="auto-accidents">{t('sections.locations.autoAccident')}</option>
                      <option value="construction">{t('sections.locations.construction')}</option>
                      <option value="slip-fall">{t('sections.locations.slipFall')}</option>
                      <option value="medical-malpractice">{t('sections.locations.medicalMalpractice')}</option>
                      <option value="other">{t('sections.locations.otherInjury')}</option>
                    </select>
                  </div>
                </div>
                <div className="hp3-locations-field">
                  <label htmlFor="hp3-message">{t('sections.locations.caseDescription')}</label>
                  <textarea id="hp3-message" name="message" rows={4} />
                </div>
                <button type="submit" className="hp3-locations-submit">
                  {t('sections.locations.submit')}
                </button>
                <p className="hp3-locations-disclaimer">
                  {t('sections.locations.formDisclaimer')}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocationsSection

