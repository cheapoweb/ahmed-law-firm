import { useTranslation } from 'react-i18next'
import './WhyChooseUsSection.css'

const whyChooseUsKeys = [
  { titleKey: 'sections.whyChooseUs.item1Title', descKey: 'sections.whyChooseUs.item1Desc' },
  { titleKey: 'sections.whyChooseUs.item2Title', descKey: 'sections.whyChooseUs.item2Desc' },
  { titleKey: 'sections.whyChooseUs.item3Title', descKey: 'sections.whyChooseUs.item3Desc' },
]

export const WhyChooseUsSection = () => {
  const { t } = useTranslation()
  const icons = [
    <svg key="1" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>,
    <svg key="2" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>,
    <svg key="3" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>,
  ]
  return (
    <section className="why-choose-us-section">
      <div className="why-choose-us-container">
        <h2 className="section-heading">{t('sections.whyChooseUs.heading')}</h2>
        <div className="why-choose-us-grid">
          {whyChooseUsKeys.map((item, index) => (
            <div key={index} className="why-choose-us-item">
              <div className="item-icon">{icons[index]}</div>
              <h3 className="item-title">{t(item.titleKey)}</h3>
              <p className="item-description">{t(item.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
