import { useSearchParams, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Footer from '../../components/Footer'
import PageBanner from '../../components/PageBanner'
import { PRACTICE_AREAS_CATEGORIES } from '../PracticeAreasPage/practiceAreasConfig'
import './SearchPage.css'

const STATIC_LINKS = [
  { title: 'About', path: '/about' },
  { title: 'Attorneys', path: '/attorneys' },
  { title: 'Practice Areas', path: '/practice-areas' },
  { title: 'Verdicts & Settlements', path: '/verdicts-settlements' },
  { title: 'Reviews & Ratings', path: '/reviews-ratings' },
  { title: 'Legal Blog', path: '/legal-blog' },
  { title: 'FAQ', path: '/faq' },
  { title: 'Resources', path: '/legal-resources' },
  { title: 'Contact', path: '/contact' },
]

function getSearchLinks(q: string) {
  const term = q.toLowerCase().trim()
  if (!term) return []
  const results: { title: string; path: string }[] = []
  for (const cat of PRACTICE_AREAS_CATEGORIES) {
    if (cat.title.toLowerCase().includes(term)) results.push({ title: cat.title, path: cat.path })
    for (const item of cat.items) {
      if (item.label.toLowerCase().includes(term))
        results.push({ title: item.label, path: item.path })
    }
  }
  for (const link of STATIC_LINKS) {
    if (link.title.toLowerCase().includes(term)) results.push(link)
  }
  return results
}

const SearchPage = () => {
  const { t } = useTranslation()
  const [searchParams] = useSearchParams()
  const q = searchParams.get('q') ?? ''
  const results = getSearchLinks(q)

  return (
    <div className="search-page">
      <PageBanner
        title={t('pages.search.bannerTitle')}
        subtitle={q ? t('pages.search.bannerSubtitleResults', { q }) : t('pages.search.bannerSubtitleDefault')}
      />
      <section className="search-results-section">
        <div className="search-results-container">
          {!q ? (
            <p className="search-results-empty">{t('pages.search.emptyPrompt')}</p>
          ) : results.length === 0 ? (
            <p className="search-results-empty">
              {t('pages.search.noResults')} <Link to="/practice-areas">{t('header.practiceAreas')}</Link>.
            </p>
          ) : (
            <>
              <p className="search-results-count">
                {t('pages.search.resultsCount', { count: results.length })}
              </p>
              <ul className="search-results-list">
                {results.map((item) => (
                  <li key={`${item.path}-${item.title}`}>
                    <Link to={item.path} className="search-results-link">{item.title}</Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default SearchPage
