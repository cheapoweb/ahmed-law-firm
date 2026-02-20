import './PracticeAreasSidebar.css'

const practiceAreas = [
  {
    icon: '👷',
    title: 'Workers Benefits',
    description: 'Construction Accidents, Workplace Falls, Equipment Accidents, and More'
  },
  {
    icon: '🚗',
    title: 'Personal Injury',
    description: 'Auto Accidents, Slip & Fall, Premises Liability, Dangerous Products, and Serious Injuries'
  }
]

export const PracticeAreasSidebar = () => {
  return (
    <aside className="practice-areas-sidebar">
      <div className="sidebar-header">
        <h3 className="sidebar-title">How Can We Help You?</h3>
        <p className="sidebar-subtitle">Learn More About Our Services</p>
      </div>
      <div className="practice-areas-list">
        {practiceAreas.map((area, index) => (
          <div key={index} className="practice-area-item">
            <div className="practice-area-icon">{area.icon}</div>
            <div className="practice-area-content">
              <h4 className="practice-area-title">{area.title}</h4>
              <p className="practice-area-description">{area.description}</p>
            </div>
          </div>
        ))}
      </div>
    </aside>
  )
}
