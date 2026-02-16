import { useState } from 'react'
import ShapeDivider from '../../../../components/ShapeDivider'
import './PracticeAreasSection.css'

const practiceAreas: Record<string, { areas: string[], image: string }> = {
  'Personal Injury': {
    areas: [
      'Auto Accidents', 'Car Accidents', 'Building Collapse Injuries', 'Bus Accidents',
      'Burn Injuries', 'Dog Bites', 'Pedestrian Accidents', 'E-Bike & E-Scooter Injuries',
      'Premises Liability', 'Products Liability', 'Slip & Fall', 'Trucking Accidents',
      'Wrongful Death', 'Construction Accidents', 'Medical Malpractice', 'Motorcycle Accidents'
    ],
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  'Workers Benefits': {
    areas: [
      'Construction Accidents', 'Crane Accidents', 'Forklift Accidents', 'Scaffolding Injury'
    ],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f056037?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
}

// Icon mapping for services
const getServiceIcon = (serviceName: string): string => {
  const iconMap: Record<string, string> = {
    'Auto Accidents': '🚗',
    'Car Accidents': '🚗',
    'Building Collapse Injuries': '🏢',
    'Bus Accidents': '🚌',
    'Burn Injuries': '🔥',
    'Dog Bites': '🐕',
    'Pedestrian Accidents': '🚶',
    'E-Bike & E-Scooter Injuries': '🚲',
    'Premises Liability': '🏠',
    'Products Liability': '🛒',
    'Slip & Fall': '⬇️',
    'Trucking Accidents': '🚚',
    'Wrongful Death': '💀',
    'Construction Accidents': '👷',
    'Medical Malpractice': '🩺',
    'Motorcycle Accidents': '🏍️',
    'Birth Injury': '👶',
    'Cancer Misdiagnosis': '🔬',
    'Foreign Object': '⚠️',
    'Nursing Home Bed Sore Injury': '🛏️',
    'Nursing Home Abuse & Neglect': '👴',
    'Crane Accidents': '🏗️',
    'Forklift Accidents': '🚜',
    'Scaffolding Injury': '🪜',
    'No-Fault Collections & Litigation': '📋',
    'Arbitration': '⚖️',
    'Denied Benefits': '❌',
    'EUOs': '📝',
    'No-Fault Healthcare Providers': '🏥',
    'No-Fault RICO Defense': '🛡️'
  }
  return iconMap[serviceName] || '📋'
}

export const PracticeAreasSection = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)

  return (
    <section className="practice-areas-section">
      <ShapeDivider color="#222F40" />
      <div className="practice-areas-container">
        <h2 className="practice-areas-heading">
          We've protected our clients' rights,<br />
          <em>across all areas of injury law</em>
        </h2>
        
        <div className="practice-categories-container">
          {Object.entries(practiceAreas).map(([category, data]) => {
            const isHovered = hoveredCategory === category
            return (
              <div 
                key={category} 
                className={`showcase-container ${isHovered ? 'expanded' : ''}`}
                onMouseEnter={() => setHoveredCategory(category)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                {/* Default state: Big image showcase */}
                <div className="showcase-main-box">
                  <div 
                    className="showcase-main-image"
                    style={{ backgroundImage: `url(${data.image})` }}
                  ></div>
                  <div className="showcase-main-content">
                    <h3 className="showcase-main-title">{category}</h3>
                    <div className="showcase-main-underline"></div>
                  </div>
                </div>
                
                {/* Hover state: Grid of services */}
                <div className="showcase-services-grid">
                  {data.areas.map((area, index) => (
                    <div key={index} className="showcase-service-item">
                      <div className="showcase-icon">{getServiceIcon(area)}</div>
                      <div className="showcase-label">{area}</div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
