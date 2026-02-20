import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './PracticeAreaSidebar.css'

interface PracticeAreaSidebarProps {
  category: 'vehicle-accidents' | 'workers-benefits' | 'medical-malpractice' | 'nursing-home' | 'healthcare-litigation'
}

const vehicleAccidentLinks = [
  { path: '/practice-areas/auto-accidents', label: 'Auto Accidents' },
  { path: '/practice-areas/car-accidents', label: 'Car Accidents' },
  { path: '/practice-areas/motorcycle-accidents', label: 'Motorcycle Accidents' },
  { path: '/practice-areas/truck-accidents', label: 'Truck Accidents' },
  { path: '/practice-areas/bicycle-accidents', label: 'Bicycle Accidents' },
  { path: '/practice-areas/pedestrian-accidents', label: 'Pedestrian Accidents' },
  { path: '/practice-areas/bus-accidents', label: 'Bus Accidents' },
  { path: '/practice-areas/subway-accidents', label: 'Subway Accidents' },
  { path: '/practice-areas/rideshare-accidents', label: 'Rideshare Accidents (Uber/Lyft)' },
  { path: '/practice-areas/boating-accidents', label: 'Boating Accidents' },
  { path: '/practice-areas/plane-accidents', label: 'Plane Accidents' },
  { path: '/practice-areas/train-accidents', label: 'Train Accidents' },
]

const autoAccidentSubpages = [
  { path: '/practice-areas/auto-accidents/lawsuit-process', label: 'Lawsuit Process' },
  { path: '/practice-areas/auto-accidents/types-of-accidents', label: 'Types of Auto Accidents' },
  { path: '/practice-areas/auto-accidents/rear-end-accidents', label: 'Rear-End Accidents' },
  { path: '/practice-areas/auto-accidents/rollover-accidents', label: 'Rollover Accidents' },
  { path: '/practice-areas/auto-accidents/side-impact-collisions', label: 'Side-Impact Collisions' },
  { path: '/practice-areas/auto-accidents/head-on-collisions', label: 'Head-On Collisions' },
  { path: '/practice-areas/auto-accidents/black-box-data', label: 'Black Box Data' },
  { path: '/practice-areas/auto-accidents/causes-of-accidents', label: 'Causes of Car Accidents' },
  { path: '/practice-areas/auto-accidents/poorly-maintained-roads', label: 'Poorly Maintained Roads' },
  { path: '/practice-areas/auto-accidents/reckless-driving', label: 'Reckless Driving' },
  { path: '/practice-areas/auto-accidents/driver-distractions', label: 'Driver Distractions' },
  { path: '/practice-areas/auto-accidents/driver-impairment', label: 'Driver Impairment' },
  { path: '/practice-areas/auto-accidents/car-defects', label: 'Car Defects' },
  { path: '/practice-areas/auto-accidents/after-accident-checklist', label: 'What to Do After a Car Accident' },
  { path: '/practice-areas/auto-accidents/intersection-accidents', label: 'Intersection Accidents' },
  { path: '/practice-areas/auto-accidents/pain-and-suffering', label: 'Pain and Suffering' },
  { path: '/practice-areas/auto-accidents/reckless-disregard', label: 'Reckless Disregard in Traffic Accidents' },
  { path: '/practice-areas/auto-accidents/not-at-fault', label: 'Car Accident Not at Fault' },
  { path: '/practice-areas/auto-accidents/multi-car-accidents', label: 'Liability in Multi-Car Accidents' },
  { path: '/practice-areas/auto-accidents/t-bone-crashes', label: 'Liability in T-Bone Crashes' },
]

export const PracticeAreaSidebar = ({ category }: PracticeAreaSidebarProps) => {
  const location = useLocation()
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    'auto-accidents': false
  })

  // Auto-expand if we're on an auto-accidents subpage
  useEffect(() => {
    if (location.pathname.startsWith('/practice-areas/auto-accidents')) {
      setExpandedSections(prev => ({ ...prev, 'auto-accidents': true }))
    }
  }, [location.pathname])

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const getCategoryTitle = () => {
    switch (category) {
      case 'vehicle-accidents':
        return 'Vehicle Accidents'
      default:
        return 'Practice Areas'
    }
  }

  const getCategoryLinks = () => {
    switch (category) {
      case 'vehicle-accidents':
        return vehicleAccidentLinks
      default:
        return []
    }
  }

  const isAutoAccidentPage = location.pathname.startsWith('/practice-areas/auto-accidents')
  const isAutoAccidentMainPage = location.pathname === '/practice-areas/auto-accidents'
  const isAutoAccidentSubpage = isAutoAccidentPage && !isAutoAccidentMainPage

  return (
    <aside className="practice-area-sidebar">
      {/* Vehicle Accidents Navigation */}
      <div className="sidebar-section sidebar-navigation">
        <h2 className="sidebar-section-title">{getCategoryTitle()}</h2>
        <nav className="sidebar-nav">
          {getCategoryLinks().map((link) => {
            const isActive = location.pathname === link.path
            const isAutoAccidents = link.path === '/practice-areas/auto-accidents'
            const isExpanded = expandedSections['auto-accidents']
            const shouldHighlightAutoAccidents = isAutoAccidents && (isAutoAccidentMainPage || isAutoAccidentSubpage)
            
            return (
              <div key={link.path}>
                <div className="sidebar-nav-item-wrapper">
                  <Link
                    to={link.path}
                    className={`sidebar-nav-link ${isActive ? 'active' : ''} ${isAutoAccidents ? 'has-submenu' : ''} ${shouldHighlightAutoAccidents ? 'parent-active' : ''}`}
                  >
                    {link.label}
                  </Link>
                  {isAutoAccidents && (
                    <button
                      className={`sidebar-dropdown-toggle ${isExpanded ? 'expanded' : ''}`}
                      onClick={(e) => {
                        e.preventDefault()
                        toggleSection('auto-accidents')
                      }}
                      aria-label="Toggle submenu"
                    >
                      <span className="dropdown-chevron">▼</span>
                    </button>
                  )}
                </div>
                {isAutoAccidents && isExpanded && (
                  <div className="sidebar-submenu">
                    {autoAccidentSubpages.map((subpage) => {
                      const isSubpageActive = location.pathname === subpage.path
                      return (
                        <Link
                          key={subpage.path}
                          to={subpage.path}
                          className={`sidebar-submenu-link ${isSubpageActive ? 'active' : ''}`}
                        >
                          {subpage.label}
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

      {/* Contact Form */}
      {/* <div className="sidebar-section sidebar-contact-form">
        <h3 className="sidebar-form-title">Free Consultation with a Car Accident Lawyer</h3>
        <p className="sidebar-form-description">
          Fill out the form below and we'll get back to you as soon as possible.
        </p>
        <form onSubmit={handleFormSubmit} className="sidebar-form">
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Tell us about your case..."
              className="form-textarea"
              rows={4}
              required
            />
          </div>
          <button type="submit" className="form-submit-button">
            Contact Us Now
          </button>
        </form>
      </div> */}
    </aside>
  )
}
