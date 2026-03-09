import { useParams } from 'react-router-dom'
import Footer from '../../../../components/Footer'
import PageBanner from '../../../../components/PageBanner'
import { PracticeAreaSidebar } from '../components/PracticeAreaSidebar/PracticeAreaSidebar'
import { getPageConfig, getContentSections } from './practiceAreaContent'
import '../AutoAccidentsPage/AutoAccidentsPage.css'

interface GenericPracticeAreaPageProps {
  slug?: string
}

const GenericPracticeAreaPage = ({ slug: slugProp }: GenericPracticeAreaPageProps) => {
  const { slug: slugParam } = useParams<{ slug: string }>()
  const slug = slugProp ?? slugParam ?? ''
  const config = getPageConfig(slug)
  const sections = getContentSections(slug)

  if (!config) {
    return (
      <div className="auto-accidents-page">
        <PageBanner title="Practice Area" subtitle="Page not found." />
        <Footer />
      </div>
    )
  }

  return (
    <div className="auto-accidents-page">
      <PageBanner title={config.title} subtitle={config.subtitle} />

      <div className="practice-area-content-wrapper">
        <div className="practice-area-container">
          <PracticeAreaSidebar currentSlug={slug} />

          <main className="practice-area-main-content">
            <div className="content-section">
              <h1 className="content-title">{config.contentTitle}</h1>
              <div className="intro-section">
                <div className="intro-text">
                  <p className="intro-paragraph">
                    If you have been injured in New York, you need experienced legal representation to help you
                    navigate the legal process and secure the compensation you deserve. At Ahmed Law Firm, we have
                    been representing injury victims throughout New York, including Long Island, Nassau County,
                    Queens County, The Bronx, Brooklyn, NYC, and Suffolk County since 1981.
                  </p>
                  <p className="intro-paragraph">
                    Our attorneys work on a contingency fee basis, meaning you do not pay unless we win your case.
                    We are committed to fighting for your rights and ensuring you receive the maximum compensation
                    available for your injuries, medical expenses, lost wages, and pain and suffering.
                  </p>
                </div>
                <div className="intro-image">
                  <img
                    src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop"
                    alt="Legal representation"
                    className="content-image"
                  />
                </div>
              </div>
              <div className="key-points">
                <ul className="points-list">
                  <li>Schedule a Free Consultation</li>
                  <li>No Fees Unless We Win</li>
                  <li>Experienced Personal Injury Attorneys</li>
                  <li>Millions Recovered for Our Clients</li>
                </ul>
              </div>
            </div>

            {sections.map((section, index) => (
              <div key={index} className="content-section">
                <h2 className="content-heading">{section.heading}</h2>
                {section.intro && (
                  <p className="content-paragraph">{section.intro}</p>
                )}
                {section.orderedSteps && section.orderedSteps.length > 0 && (
                  <ol className="content-list">
                    {section.orderedSteps.map((step, i) => (
                      <li key={i}>
                        <strong>{step.strong}</strong> {step.text}
                      </li>
                    ))}
                  </ol>
                )}
                {section.listItems && section.listItems.length > 0 && (
                  <>
                    {section.videoTitle && (
                      <div className="video-embed">
                        <div className="video-placeholder">
                          <div className="video-play-button">▶</div>
                          <p className="video-title">{section.videoTitle}</p>
                        </div>
                      </div>
                    )}
                    <ul className="content-list">
                      {section.listItems.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </>
                )}
                {section.paragraphs && section.paragraphs.length > 0 && (
                  <>
                    {section.videoTitle && (
                      <div className="video-embed">
                        <div className="video-placeholder">
                          <div className="video-play-button">▶</div>
                          <p className="video-title">{section.videoTitle}</p>
                        </div>
                      </div>
                    )}
                    {section.paragraphs.map((para, i) => (
                      <p key={i} className="content-paragraph">{para}</p>
                    ))}
                  </>
                )}
              </div>
            ))}
          </main>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default GenericPracticeAreaPage
