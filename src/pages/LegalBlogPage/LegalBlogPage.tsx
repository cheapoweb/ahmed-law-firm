import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Footer from '../../components/Footer'
import PageBanner from '../../components/PageBanner'
import { PRACTICE_AREAS_CATEGORIES } from '../PracticeAreasPage/practiceAreasConfig'
import './LegalBlogPage.css'

const faqLinks = [
  'What is the average settlement for a car accident in NY?',
  'How much is my personal injury case worth?',
  'How long does a personal injury case take?',
  'How long do I have to file a personal injury claim?',
]

const recentPosts = [
  { title: 'What is a Wrongful Death Case in NY?', to: '/legal-blog' },
  { title: 'How is a Wrongful Death Settlement Calculated?', to: '/legal-blog' },
]

const blogPosts = [
  {
    id: 1,
    title: 'The Role of Medical Experts in New York Lawsuits',
    excerpt: 'Medical experts play a critical role in personal injury and medical malpractice cases in New York. Learn how expert testimony can strengthen your case and what to expect during the legal process.',
    date: 'February 2025',
  },
  {
    id: 2,
    title: 'How Prescription Drug Cases Are Filed with the FDA',
    excerpt: 'Understanding the process of filing prescription drug injury cases with the FDA and how it relates to your potential civil claim. Our attorneys explain the steps and your rights.',
    date: 'January 2025',
  },
  {
    id: 3,
    title: 'Navigating the Legal Landscape of Autonomous Vehicle Accidents',
    excerpt: 'As self-driving and assisted-driving technology becomes more common, accident liability questions are evolving. Here is what you need to know if you are injured in an autonomous vehicle incident.',
    date: 'December 2024',
  },
  {
    id: 4,
    title: 'What to Do After a Slip and Fall in New York',
    excerpt: 'Steps to take immediately after a slip and fall accident to protect your health and your right to compensation. Documenting the scene and seeking medical care are essential.',
    date: 'November 2024',
  },
]

const LegalBlogPage = () => {
  const { t } = useTranslation()
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    practiceAreas: true,
    faq: true,
    recentNews: true,
  })

  const toggleSection = (key: string) => {
    setExpandedSections((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <div className="legal-blog-page">
      <PageBanner
        title={t('pages.legalBlog.bannerTitle')}
        subtitle={t('pages.legalBlog.bannerSubtitle')}
      />

      <section className="legal-blog-intro">
        <div className="legal-blog-intro-container">
          <p className="legal-blog-intro-label">{t('pages.contact.learnMore')}</p>
          <h2 className="legal-blog-intro-heading">
            {t('pages.legalBlog.introHeading', 'Our Blog,')} <em>{t('pages.legalBlog.introHeadingEm', 'Your Rights')}</em>
          </h2>
          <p className="legal-blog-intro-text">
            {t('pages.legalBlog.bannerSubtitle')}
          </p>
        </div>
      </section>

      <section className="legal-blog-main">
        <div className="legal-blog-container">
          <aside className="legal-blog-sidebar">
            <div className="legal-blog-sidebar-inner">
              <h2 className="sidebar-section-title">{t('pages.contact.quickLinks')}</h2>
              <nav className="sidebar-nav">
                <div className="sidebar-collapsible-block">
                  <button
                    type="button"
                    className={`sidebar-section-toggle ${expandedSections.practiceAreas ? 'expanded' : ''}`}
                    onClick={() => toggleSection('practiceAreas')}
                    aria-expanded={expandedSections.practiceAreas}
                  >
                    <span>{t('header.practiceAreas')}</span>
                    <span className="dropdown-chevron">▼</span>
                  </button>
                  {expandedSections.practiceAreas && (
                    <div className="sidebar-collapsible-content">
                      {PRACTICE_AREAS_CATEGORIES.map((cat) => (
                        <Link key={cat.slug} to={cat.path} className="sidebar-nav-link">
                          {t(`practiceAreas.${cat.slug}`)}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <div className="sidebar-collapsible-block">
                  <button
                    type="button"
                    className={`sidebar-section-toggle ${expandedSections.faq ? 'expanded' : ''}`}
                    onClick={() => toggleSection('faq')}
                    aria-expanded={expandedSections.faq}
                  >
                    <span>{t('header.faq')}</span>
                    <span className="dropdown-chevron">▼</span>
                  </button>
                  {expandedSections.faq && (
                    <div className="sidebar-collapsible-content">
                      {faqLinks.map((q) => (
                        <Link key={q} to="/faq" className="sidebar-nav-link">
                          {q}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <div className="sidebar-collapsible-block">
                  <button
                    type="button"
                    className={`sidebar-section-toggle ${expandedSections.recentNews ? 'expanded' : ''}`}
                    onClick={() => toggleSection('recentNews')}
                    aria-expanded={expandedSections.recentNews}
                  >
                    <span>{t('pages.legalBlog.recentNews', 'Recent News')}</span>
                    <span className="dropdown-chevron">▼</span>
                  </button>
                  {expandedSections.recentNews && (
                    <div className="sidebar-collapsible-content">
                      {recentPosts.map((p) => (
                        <Link key={p.title} to={p.to} className="sidebar-nav-link">
                          {p.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </nav>
            </div>
          </aside>

          <div className="legal-blog-content">
            <h2 className="legal-blog-posts-heading">{t('pages.legalBlog.recentArticles', 'Recent Articles')}</h2>
            {blogPosts.map((post) => (
              <article key={post.id} className="legal-blog-card">
                <h2 className="legal-blog-card-title">
                  <Link to="/legal-blog" className="legal-blog-card-title-link">{post.title}</Link>
                </h2>
                <p className="legal-blog-card-excerpt">{post.excerpt}</p>
                <span className="legal-blog-card-date">{post.date}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="legal-blog-cta-section">
        <div className="legal-blog-cta-container">
          <p className="legal-blog-cta-label">{t('pages.contact.introLabel')}</p>
          <h2 className="legal-blog-cta-heading">{t('pages.legalBlog.ctaHeading', 'Speak with a Qualified New York Injury Lawyer Today')}</h2>
          <p className="legal-blog-cta-sub">
            {t('pages.legalBlog.ctaSub', 'Get a free consultation. Our team is ready to listen and help you understand your options.')}
          </p>
          <form className="legal-blog-cta-form" onSubmit={(e) => e.preventDefault()}>
            <div className="legal-blog-cta-form-row">
              <input type="text" placeholder="First Name" className="legal-blog-cta-input" required />
              <input type="text" placeholder="Last Name" className="legal-blog-cta-input" required />
            </div>
            <div className="legal-blog-cta-form-row">
              <input type="email" placeholder="Email Address" className="legal-blog-cta-input" required />
              <input type="tel" placeholder="Phone Number" className="legal-blog-cta-input" required />
            </div>
            <textarea placeholder="Message" className="legal-blog-cta-textarea" rows={4} required />
            <button type="submit" className="legal-blog-cta-submit">Submit</button>
          </form>
          <div className="legal-blog-cta-media">
            <a href="/reviews-ratings" className="legal-blog-cta-media-card">
              <span className="legal-blog-cta-media-icon">▶</span>
              <span>Watch</span>
            </a>
            <a href="/reviews-ratings" className="legal-blog-cta-media-card">
              <span className="legal-blog-cta-media-icon">♫</span>
              <span>Listen</span>
            </a>
            <a href="/verdicts-settlements" className="legal-blog-cta-media-card">
              <span className="legal-blog-cta-media-icon">📖</span>
              <span>Read</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default LegalBlogPage
