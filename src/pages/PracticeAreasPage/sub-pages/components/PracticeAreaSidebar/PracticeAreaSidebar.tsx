import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { PRACTICE_AREAS_CATEGORIES, getCategorySlugForPage } from '../../../practiceAreasConfig'
import './PracticeAreaSidebar.css'

interface PracticeAreaSidebarProps {
  /** Current page slug – used to expand/highlight the right category. */
  currentSlug?: string
  /** Category slug (e.g. "vehicle-accidents") – used to expand/highlight the right section. */
  category?: string
}

export const PracticeAreaSidebar = ({ currentSlug, category }: PracticeAreaSidebarProps) => {
  const { t } = useTranslation()
  const location = useLocation()
  const pathSlug = location.pathname.replace('/practice-areas/', '').split('/')[0] ?? ''
  const slug = currentSlug ?? category ?? pathSlug
  const activeCategorySlug = getCategorySlugForPage(slug)

  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {}
    PRACTICE_AREAS_CATEGORIES.forEach((cat) => {
      initial[cat.slug] = cat.slug === activeCategorySlug
    })
    if (!activeCategorySlug) {
      PRACTICE_AREAS_CATEGORIES.forEach((cat) => {
        initial[cat.slug] = true
      })
    }
    return initial
  })

  useEffect(() => {
    if (activeCategorySlug) {
      setExpandedSections((prev) => ({ ...prev, [activeCategorySlug]: true }))
    }
  }, [activeCategorySlug])

  const toggleSection = (categorySlug: string) => {
    setExpandedSections((prev) => ({ ...prev, [categorySlug]: !prev[categorySlug] }))
  }

  return (
    <aside className="practice-area-sidebar">
      <div className="sidebar-section sidebar-navigation">
        <h2 className="sidebar-section-title">{t('sections.practiceAreaSidebar.title', { defaultValue: 'Practice Areas' })}</h2>
        <nav className="sidebar-nav">
          {PRACTICE_AREAS_CATEGORIES.map((cat) => {
            const isExpanded = expandedSections[cat.slug] ?? false
            const isCategoryActive = slug === cat.slug
            return (
              <div key={cat.slug} className="sidebar-collapsible-block">
                <button
                  type="button"
                  className={`sidebar-section-toggle ${isExpanded ? 'expanded' : ''}`}
                  onClick={() => toggleSection(cat.slug)}
                  aria-expanded={isExpanded}
                >
                  <span>{t(`practiceAreas.${cat.slug}`, { defaultValue: cat.title })}</span>
                  <span className="dropdown-chevron">▼</span>
                </button>
                {isExpanded && (
                  <div className="sidebar-collapsible-content">
                    <Link
                      to={cat.path}
                      className={`sidebar-nav-link ${isCategoryActive ? 'active' : ''}`}
                    >
                      {t('sections.practiceAreaSidebar.overview', { defaultValue: 'Overview' })}
                    </Link>
                    {cat.items.map((item) => {
                      const isItemActive = location.pathname === item.path
                      return (
                        <Link
                          key={item.slug}
                          to={item.path}
                          className={`sidebar-nav-link ${isItemActive ? 'active' : ''}`}
                        >
                          {t(`practiceAreas.${item.slug}`, { defaultValue: item.label })}
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}
