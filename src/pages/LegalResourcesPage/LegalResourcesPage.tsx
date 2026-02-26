import { Link } from 'react-router-dom'
import Footer from '../../components/Footer'
import PageBanner from '../../components/PageBanner'
import ShapeDivider from '../../components/ShapeDivider'
import './LegalResourcesPage.css'

const resourceCards = [
  {
    title: 'Personal Injury Guides',
    description: 'Understand your rights and what to expect after an accident.',
    icon: '?',
    items: ['Auto Accident Guide', 'Slip & Fall Guide', 'Truck Accident Guide', 'Motorcycle Accident Guide'],
  },
  {
    title: 'Medical Malpractice',
    description: 'Information on medical negligence and your options for recovery.',
    icon: '⚕',
    items: ['Medical Malpractice Overview', 'Birth Injury Information', 'Surgical Error Claims'],
  },
  {
    title: 'Legal Process',
    description: 'Frequently asked questions and how we work for you.',
    icon: '⚖',
    items: ['Frequently Asked Questions', 'Case Results', 'Reviews & Ratings'],
  },
]

const statuteItems = [
  { label: 'Personal Injury', limit: '3 years' },
  { label: 'Medical Malpractice', limit: '2.5 years (30 months)' },
  { label: 'Wrongful Death', limit: '2 years' },
  { label: 'No Fault File', limit: '30 days to open your own NF' },
  { label: 'Property Damage', limit: '3 years' },
]

const afterAccidentSteps = [
  'Seek medical attention and document your injuries.',
  'Report the incident to the police or property owner if applicable.',
  'Gather evidence: photos, witness contact info, and any documents.',
  'Do not give statements to the other party’s insurance without an attorney.',
  'Contact a personal injury attorney as soon as possible.',
]

const emergencyNumbers = [
  { label: 'Emergency', number: '911' },
  { label: 'Poison Control', number: '1-800-222-1222' },
  { label: 'NY State Child Abuse Hotline', number: '1-800-342-3720' },
]

const helpfulLinks: { category: string; links: { label: string; url: string; external?: boolean }[] }[] = [
  {
    category: 'New York State',
    links: [
      { label: 'NY Courts', url: 'https://www.nycourts.gov', external: true },
      { label: 'NY State Bar', url: 'https://www.nysba.org', external: true },
    ],
  },
  {
    category: 'Legal Resources',
    links: [
      { label: 'Legal Blog', url: '/legal-blog' },
      { label: 'FAQ', url: '/faq' },
    ],
  },
  {
    category: 'Insurance',
    links: [
      { label: 'NY Dept of Financial Services', url: 'https://www.dfs.ny.gov', external: true },
    ],
  },
]

const LegalResourcesPage = () => {
  return (
    <div className="legal-resources-page">
      <PageBanner
        title="Legal Resources"
        subtitle="Access helpful information, guides, and resources to better understand your legal rights and options."
      />

      <section className="legal-resources-main">
        <ShapeDivider color="#FFFFFF" />
        <div className="legal-resources-container">
          <div className="legal-resources-cards">
            {resourceCards.map((card) => (
              <div key={card.title} className="legal-resources-card">
                <div className="legal-resources-card-icon">{card.icon}</div>
                <h3 className="legal-resources-card-title">{card.title}</h3>
                <p className="legal-resources-card-desc">{card.description}</p>
                <ul className="legal-resources-card-list">
                  {card.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="legal-resources-two-col">
            <div className="legal-resources-block">
              <h3 className="legal-resources-block-title">Statute of Limitations</h3>
              <p className="legal-resources-block-note">Time limits for filing in New York (from date of incident):</p>
              <ul className="legal-resources-block-list">
                {statuteItems.map((s) => (
                  <li key={s.label}>
                    <strong>{s.label}:</strong> {s.limit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="legal-resources-block">
              <h3 className="legal-resources-block-title">What to Do After an Accident</h3>
              <ol className="legal-resources-block-list legal-resources-block-list--numbered">
                {afterAccidentSteps.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </div>
          </div>

          <div className="legal-resources-two-col">
            <div className="legal-resources-emergency">
              <h3 className="legal-resources-block-title">Emergency Resources</h3>
              <ul className="legal-resources-emergency-list">
                {emergencyNumbers.map((e) => (
                  <li key={e.label}>
                    <span className="legal-resources-emergency-label">{e.label}</span>
                    <a href={`tel:${e.number.replace(/\D/g, '')}`} className="legal-resources-emergency-number">{e.number}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="legal-resources-help">
              <h3 className="legal-resources-block-title">Legal Help</h3>
              <p className="legal-resources-help-text">Free Consultation • No fee unless we win</p>
              <p className="legal-resources-help-text">Phone: <a href="tel:7188489595">(718) 848-9595</a></p>
              <p className="legal-resources-help-text">Ahmed Law Firm — South Richmond Hill, NY</p>
            </div>
          </div>

          <div className="legal-resources-links">
            <h3 className="legal-resources-block-title">Helpful Legal Links</h3>
            <div className="legal-resources-links-grid">
              {helpfulLinks.map(({ category, links }) => (
                <div key={category} className="legal-resources-links-col">
                  <h4 className="legal-resources-links-cat">{category}</h4>
                  <ul className="legal-resources-links-list">
                    {links.map((link) => (
                      <li key={link.label}>
                        {link.external ? (
                          <a href={link.url} target="_blank" rel="noopener noreferrer">{link.label}</a>
                        ) : (
                          <Link to={link.url}>{link.label}</Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="legal-resources-cta">
        <ShapeDivider color="#233041" />
        <div className="legal-resources-cta-inner">
          <h2 className="legal-resources-cta-heading">Get Expert Legal Guidance for Your Case</h2>
          <p className="legal-resources-cta-sub">Don't navigate the legal system alone. Our experienced attorneys are here to help you every step of the way.</p>
          <div className="legal-resources-cta-buttons">
            <a href="/#contact" className="legal-resources-cta-btn legal-resources-cta-btn--primary">Schedule Free Consultation</a>
            <a href="tel:7188489595" className="legal-resources-cta-btn legal-resources-cta-btn--outline">(718) 848-9595</a>
          </div>
          <p className="legal-resources-cta-note">No fee unless we win. Available 24/7.</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default LegalResourcesPage
