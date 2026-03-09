import { useTranslation } from 'react-i18next'
import './LocationSpecificSection.css'

const locationAreaKeys = [
  { titleKey: 'practiceAreas.vehicle-accidents', locationsKey: 'sections.locationSpecific.locations1' },
  { titleKey: 'practiceAreas.medical-malpractice', locationsKey: 'sections.locationSpecific.locations1' },
  { titleKey: 'practiceAreas.slip-fall', locationsKey: 'sections.locationSpecific.locations1' },
  { titleKey: 'practiceAreas.truck-accidents', locationsKey: 'sections.locationSpecific.locations1' },
  { titleKey: 'practiceAreas.construction-accidents', locationsKey: 'sections.locationSpecific.locations1' },
  { titleKey: 'practiceAreas.wrongful-death', locationsKey: 'sections.locationSpecific.locations1' },
]

const LOCATIONS = ['Manhattan', 'Brooklyn', 'Long Island', 'Queens', 'Bronx', 'Staten Island']

export const LocationSpecificSection = () => {
  const { t } = useTranslation()
  return (
    <section className="location-specific-section">
      <div className="location-specific-container">
        <h2 className="section-heading">{t('sections.locationSpecific.heading')}</h2>
        <p className="section-subheading">
          {t('sections.locationSpecific.subheading')}
        </p>
        <div className="location-practice-areas-grid">
          {locationAreaKeys.map((area, index) => (
            <div key={index} className="location-practice-area-card">
              <div className="card-icon-wrapper">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h3 className="card-title">{t(area.titleKey)}</h3>
              <ul className="card-items">
                {LOCATIONS.map((loc, i) => (
                  <li key={i}>{loc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
