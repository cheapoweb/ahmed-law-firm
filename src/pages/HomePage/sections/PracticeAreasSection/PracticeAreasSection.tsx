import { useState } from 'react'
import ShapeDivider from '../../../../components/ShapeDivider'
import personalInjuryImage from '../../../../assets/Personal-injury.webp'
import workersBenefitsImage from '../../../../assets/workers-benefits.webp'
import './PracticeAreasSection.css'

const practiceAreas: Record<string, { areas: string[], image: string }> = {
  'Personal Injury': {
    areas: [
      'Auto Accidents', 'Car Accidents', 'Building Collapse Injuries',
      'Burn Injuries', 'Dog Bites', 'Pedestrian Accidents',
      'Premises Liability', 'Products Liability', 'Slip & Fall'
    ],
    image: personalInjuryImage
  },
  'Workers Benefits': {
    areas: [
      'Construction Accidents', 'Crane Accidents', 'Forklift Accidents',
      'Scaffolding Injury', 'Workplace Falls', 'Equipment Accidents',
      'Industrial Accidents', 'Workplace Burns', 'Repetitive Stress Injuries'
    ],
    image: workersBenefitsImage
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
    'Workplace Falls': '⬇️',
    'Equipment Accidents': '⚙️',
    'Industrial Accidents': '🏭',
    'Workplace Burns': '🔥',
    'Repetitive Stress Injuries': '🔄',
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
        
        <div className={`practice-categories-container ${hoveredCategory ? 'has-hovered' : ''}`}>
          {Object.entries(practiceAreas).map(([category, data]) => {
            const isHovered = hoveredCategory === category
            const isOtherHovered = hoveredCategory !== null && hoveredCategory !== category
            return (
              <div 
                key={category} 
                className={`showcase-container ${isHovered ? 'expanded' : ''} ${isOtherHovered ? 'other-hovered' : ''}`}
                onMouseEnter={() => setHoveredCategory(category)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                {/* Default state: Big image showcase */}
                <div className="showcase-main-box">
                  <div 
                    className="showcase-main-image"
                    style={{ backgroundImage: `url(${data.image})` }}
                  ></div>
                  <div className="showcase-image-overlay"></div>
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
