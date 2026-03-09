import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { PRACTICE_AREAS_CATEGORIES } from '../../practiceAreasConfig'
import './AllPracticeAreasSection.css'

export const AllPracticeAreasSection = () => {
  const { t } = useTranslation()
  return (
    <section className="all-practice-areas-section">
      <div className="all-practice-areas-container">
        <h2 className="section-heading">{t('sections.allPracticeAreas.heading')}</h2>
        <p className="section-subheading">
          {t('sections.allPracticeAreas.subheading')}
        </p>
        <div className="practice-areas-grid">
          {PRACTICE_AREAS_CATEGORIES.map((category) => (
            <div key={category.slug} className="practice-area-card">
              <h3 className="card-title">
                <Link to={category.path} className="card-title-link">
                  {t(`practiceAreas.${category.slug}`)}
                </Link>
              </h3>
              <ul className="card-items">
                {category.items.map((item) => (
                  <li key={item.slug}>
                    <Link to={item.path} className="card-item-link">
                      {t(`practiceAreas.${item.slug}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
