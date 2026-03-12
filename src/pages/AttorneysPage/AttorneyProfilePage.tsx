import { useParams, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Footer from '../../components/Footer'
import PageBanner from '../../components/PageBanner'
import { getAttorneyBySlug } from './attorneysData'
import './AttorneyProfilePage.css'

function AttorneyProfilePage() {
  const { slug } = useParams<{ slug: string }>()
  const { t } = useTranslation()
  const attorney = slug ? getAttorneyBySlug(slug) : null

  if (!attorney) {
    return (
      <div className="attorney-profile-page">
        <PageBanner
          title={t('pages.attorneyProfile.notFoundTitle')}
          subtitle={t('pages.attorneyProfile.notFoundSubtitle')}
        />
        <div className="attorney-profile-container" />
        <Footer />
      </div>
    )
  }

  const firstName = attorney.name.split(' ')[0]
  const taglineKey = `pages.attorneyProfile.${attorney.slug}.tagline`
  const tagline = t(taglineKey) !== taglineKey ? t(taglineKey) : attorney.tagline

  const getBio = (i: number) => t(`pages.attorneyProfile.${attorney.slug}.bio${i + 1}`, { defaultValue: attorney.bio[i] })
  const getEducation = (i: number) => ({
    school: t(`pages.attorneyProfile.${attorney.slug}.education${i + 1}School`, { defaultValue: attorney.education[i].school }),
    degree: t(`pages.attorneyProfile.${attorney.slug}.education${i + 1}Degree`, { defaultValue: attorney.education[i].degree }),
  })
  const getBar = (i: number) => t(`pages.attorneyProfile.${attorney.slug}.bar${i + 1}`, { defaultValue: attorney.barAdmissions[i] })
  const getPracticeArea = (i: number) => t(`pages.attorneyProfile.${attorney.slug}.practiceArea${i + 1}`, { defaultValue: attorney.practiceAreas[i] })
  const getHighlight = (i: number) => t(`pages.attorneyProfile.${attorney.slug}.highlight${i + 1}`, { defaultValue: attorney.highlights[i] })

  return (
    <div className="attorney-profile-page">
      <PageBanner
        title={attorney.name}
        subtitle={tagline}
      />

      <div className="attorney-profile-section">
        <div className="attorney-profile-container">
          <div className="attorney-profile-layout">
            <aside className="attorney-profile-sidebar">
              <div className="attorney-profile-photo-wrap">
                <img src={attorney.image} alt={attorney.name} className="attorney-profile-photo" />
              </div>
              <p className="attorney-profile-title-sidebar">{t('pages.attorneyProfile.esquire', { defaultValue: attorney.title })}</p>
              <Link to="/contact" className="attorney-profile-cta">{t('pages.attorneyProfile.scheduleConsultation')}</Link>
            </aside>

            <main className="attorney-profile-main">
              <div className="attorney-profile-block">
                <h2 className="attorney-profile-heading">{t('pages.attorneyProfile.aboutHeading', { name: firstName })}</h2>
                {attorney.bio.map((_, i) => (
                  <p key={i} className="attorney-profile-text">{getBio(i)}</p>
                ))}
              </div>

              <div className="attorney-profile-block">
                <h2 className="attorney-profile-heading">{t('pages.attorneyProfile.educationHeading')}</h2>
                <ul className="attorney-profile-list">
                  {attorney.education.map((_, i) => {
                    const item = getEducation(i)
                    return (
                      <li key={i}>
                        <strong>{item.school}</strong> — {item.degree}
                      </li>
                    )
                  })}
                </ul>
              </div>

              <div className="attorney-profile-block">
                <h2 className="attorney-profile-heading">{t('pages.attorneyProfile.barAdmissionsHeading')}</h2>
                <ul className="attorney-profile-list attorney-profile-list--simple">
                  {attorney.barAdmissions.map((_, i) => (
                    <li key={i}>{getBar(i)}</li>
                  ))}
                </ul>
              </div>

              <div className="attorney-profile-block">
                <h2 className="attorney-profile-heading">{t('pages.attorneyProfile.practiceAreasHeading')}</h2>
                <div className="attorney-profile-tags">
                  {attorney.practiceAreas.map((_, i) => (
                    <span key={i} className="attorney-profile-tag">{getPracticeArea(i)}</span>
                  ))}
                </div>
              </div>

              <div className="attorney-profile-block attorney-profile-block--accent">
                <h2 className="attorney-profile-heading attorney-profile-heading--light">{t('pages.attorneyProfile.whyWorkWithHeading', { name: firstName })}</h2>
                <ul className="attorney-profile-highlights">
                  {attorney.highlights.map((_, i) => (
                    <li key={i}>{getHighlight(i)}</li>
                  ))}
                </ul>
              </div>
            </main>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default AttorneyProfilePage
