import { useParams, Link } from 'react-router-dom'
import Footer from '../../components/Footer'
import PageBanner from '../../components/PageBanner'
import { getAttorneyBySlug } from './attorneysData'
import './AttorneyProfilePage.css'

const AttorneyProfilePage = () => {
  const { slug } = useParams<{ slug: string }>()
  const attorney = slug ? getAttorneyBySlug(slug) : null

  if (!attorney) {
    return (
      <div className="attorney-profile-page">
        <PageBanner title="Attorney Not Found" subtitle="The attorney profile you're looking for could not be found." />
        <div className="attorney-profile-container" />
        <Footer />
      </div>
    )
  }

  return (
    <div className="attorney-profile-page">
      <PageBanner
        title={attorney.name}
        subtitle={attorney.tagline}
      />

      <div className="attorney-profile-section">
        <div className="attorney-profile-container">
          <div className="attorney-profile-layout">
            <aside className="attorney-profile-sidebar">
              <div className="attorney-profile-photo-wrap">
                <img src={attorney.image} alt={attorney.name} className="attorney-profile-photo" />
              </div>
              <p className="attorney-profile-title-sidebar">{attorney.title}</p>
              <Link to="/contact" className="attorney-profile-cta">Schedule a Consultation</Link>
            </aside>

            <main className="attorney-profile-main">
              <div className="attorney-profile-block">
                <h2 className="attorney-profile-heading">About {attorney.name.split(' ')[0]}</h2>
                {attorney.bio.map((para, i) => (
                  <p key={i} className="attorney-profile-text">{para}</p>
                ))}
              </div>

              <div className="attorney-profile-block">
                <h2 className="attorney-profile-heading">Education</h2>
                <ul className="attorney-profile-list">
                  {attorney.education.map((item, i) => (
                    <li key={i}>
                      <strong>{item.school}</strong> — {item.degree}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="attorney-profile-block">
                <h2 className="attorney-profile-heading">Bar Admissions</h2>
                <ul className="attorney-profile-list attorney-profile-list--simple">
                  {attorney.barAdmissions.map((admission, i) => (
                    <li key={i}>{admission}</li>
                  ))}
                </ul>
              </div>

              <div className="attorney-profile-block">
                <h2 className="attorney-profile-heading">Practice Areas</h2>
                <div className="attorney-profile-tags">
                  {attorney.practiceAreas.map((area, i) => (
                    <span key={i} className="attorney-profile-tag">{area}</span>
                  ))}
                </div>
              </div>

              <div className="attorney-profile-block attorney-profile-block--accent">
                <h2 className="attorney-profile-heading attorney-profile-heading--light">Why Work With {attorney.name.split(' ')[0]}?</h2>
                <ul className="attorney-profile-highlights">
                  {attorney.highlights.map((item, i) => (
                    <li key={i}>{item}</li>
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
