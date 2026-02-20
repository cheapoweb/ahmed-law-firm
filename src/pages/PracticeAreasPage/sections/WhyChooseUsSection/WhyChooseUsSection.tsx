import ShapeDivider from '../../../../components/ShapeDivider'
import './WhyChooseUsSection.css'

const whyChooseUsItems = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    ),
    title: '40+ Years Experience',
    description: 'Decades of legal excellence in providing expert legal representation'
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
    ),
    title: '24/7 Availability',
    description: 'Free consultation available around the clock'
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="12" y1="1" x2="12" y2="23"></line>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    ),
    title: 'No Fee Unless We Win',
    description: 'Contingency fee basis means there is no fee unless we obtain a recovery for you'
  }
]

export const WhyChooseUsSection = () => {
  return (
    <section className="why-choose-us-section">
      <ShapeDivider color="#233041" />
      <div className="why-choose-us-container">
        <h2 className="section-heading">Why Choose Ahmed Law Firm?</h2>
        <div className="why-choose-us-grid">
          {whyChooseUsItems.map((item, index) => (
            <div key={index} className="why-choose-us-item">
              <div className="item-icon">{item.icon}</div>
              <h3 className="item-title">{item.title}</h3>
              <p className="item-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
