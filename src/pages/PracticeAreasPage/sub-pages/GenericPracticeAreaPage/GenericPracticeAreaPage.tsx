import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
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
  const { t } = useTranslation()
  const config = getPageConfig(slug)
  const sections = getContentSections(slug)

  if (!config) {
    return (
      <div className="auto-accidents-page">
        <PageBanner
          title={t('pages.practiceArea.notFoundTitle', 'Practice Area')}
          subtitle={t('pages.practiceArea.notFoundSubtitle', 'Page not found.')}
        />
        <Footer />
      </div>
    )
  }

  const bannerTitle = t(`pages.practiceArea.${slug}.bannerTitle`, { defaultValue: config.title })
  const bannerSubtitle = t(`pages.practiceArea.${slug}.bannerSubtitle`, { defaultValue: config.subtitle })
  const contentTitle = t(`pages.practiceArea.${slug}.contentTitle`, { defaultValue: config.contentTitle })

  return (
    <div className="auto-accidents-page">
      <PageBanner title={bannerTitle} subtitle={bannerSubtitle} />

      <div className="practice-area-content-wrapper">
        <div className="practice-area-container">
          <PracticeAreaSidebar currentSlug={slug} />

          <main className="practice-area-main-content">
            <div className="content-section">
              <h1 className="content-title">{contentTitle}</h1>
              <div className="intro-section">
                <div className="intro-text">
                  <p className="intro-paragraph">
                    {t('pages.practiceArea.genericIntro1')}
                  </p>
                  <p className="intro-paragraph">
                    {t('pages.practiceArea.genericIntro2')}
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
                  <li>{t('pages.practiceArea.genericPoint1')}</li>
                  <li>{t('pages.practiceArea.genericPoint2')}</li>
                  <li>{t('pages.practiceArea.genericPoint3')}</li>
                  <li>{t('pages.practiceArea.genericPoint4')}</li>
                </ul>
              </div>
            </div>

            {sections.map((section, index) => {
              const baseKey = `pages.practiceArea.${slug}.sections.${index}`
              const heading = t(`${baseKey}.heading`, { defaultValue: section.heading })
              const intro = section.intro
                ? t(`${baseKey}.intro`, { defaultValue: section.intro })
                : null

              return (
                <div key={index} className="content-section">
                  <h2 className="content-heading">{heading}</h2>
                  {intro && (
                    <p className="content-paragraph">{intro}</p>
                  )}
                  {section.orderedSteps && section.orderedSteps.length > 0 && (
                    <ol className="content-list">
                      {section.orderedSteps.map((step, i) => {
                        const strong = t(`${baseKey}.orderedSteps.${i}.strong`, {
                          defaultValue: step.strong,
                        })
                        const text = t(`${baseKey}.orderedSteps.${i}.text`, {
                          defaultValue: step.text,
                        })
                        return (
                          <li key={i}>
                            <strong>{strong}</strong> {text}
                          </li>
                        )
                      })}
                    </ol>
                  )}
                  {section.listItems && section.listItems.length > 0 && (
                    <>
                      {section.videoTitle && (
                        <div className="video-embed">
                          <div className="video-placeholder">
                            <div className="video-play-button">▶</div>
                            <p className="video-title">
                              {t(`${baseKey}.videoTitle`, {
                                defaultValue: section.videoTitle,
                              })}
                            </p>
                          </div>
                        </div>
                      )}
                      <ul className="content-list">
                        {section.listItems.map((item, i) => (
                          <li
                            key={i}
                          >
                            {t(`${baseKey}.listItems.${i}`, {
                              defaultValue: item,
                            })}
                          </li>
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
                            <p className="video-title">
                              {t(`${baseKey}.videoTitle`, {
                                defaultValue: section.videoTitle,
                              })}
                            </p>
                          </div>
                        </div>
                      )}
                      {section.paragraphs.map((para, i) => (
                        <p
                          key={i}
                          className="content-paragraph"
                        >
                          {t(`${baseKey}.paragraphs.${i}`, {
                            defaultValue: para,
                          })}
                        </p>
                      ))}
                    </>
                  )}
                </div>
              )
            })}
          </main>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default GenericPracticeAreaPage
