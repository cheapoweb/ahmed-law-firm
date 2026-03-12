import { useTranslation } from 'react-i18next'
import './PracticeAreasSidebar.css'

const practiceAreaKeys = [
  { titleKey: 'pages.about.sidebarArea1Title', descKey: 'pages.about.sidebarArea1Desc', icon: '👷' },
  { titleKey: 'pages.about.sidebarArea2Title', descKey: 'pages.about.sidebarArea2Desc', icon: '🚗' },
]

export const PracticeAreasSidebar = () => {
  const { t } = useTranslation()
  return (
    <aside className="practice-areas-sidebar">
      <div className="sidebar-header">
        <h3 className="sidebar-title">{t('pages.about.sidebarTitle')}</h3>
        <p className="sidebar-subtitle">{t('pages.about.sidebarSubtitle')}</p>
      </div>
      <div className="practice-areas-list">
        {practiceAreaKeys.map((area, index) => (
          <div key={index} className="practice-area-item">
            <div className="practice-area-icon">{area.icon}</div>
            <div className="practice-area-content">
              <h4 className="practice-area-title">{t(area.titleKey)}</h4>
              <p className="practice-area-description">{t(area.descKey)}</p>
            </div>
          </div>
        ))}
      </div>
    </aside>
  )
}
