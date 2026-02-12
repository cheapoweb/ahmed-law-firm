import './PracticeAreas.css'

const PracticeAreas = () => {
  const practiceAreas = {
    'Personal Injury': [
      'Auto Accidents', 'Car Accidents', 'Building Collapse Injuries', 'Bus Accidents',
      'Burn Injuries', 'Dog Bites', 'Pedestrian Accidents', 'E-Bike & E-Scooter Injuries',
      'Premises Liability', 'Products Liability', 'Slip & Fall', 'Trucking Accidents',
      'Wrongful Death', 'Construction Accidents', 'Medical Malpractice', 'Motorcycle Accidents'
    ],
    'Medical & Nursing Injury': [
      'Birth Injury', 'Cancer Misdiagnosis', 'Foreign Object',
      'Nursing Home Bed Sore Injury', 'Nursing Home Abuse & Neglect'
    ],
    'Work Accidents': [
      'Construction Accidents', 'Crane Accidents', 'Forklift Accidents', 'Scaffolding Injury'
    ],
    'Health Care Litigation': [
      'No-Fault Collections & Litigation', 'Arbitration', 'Denied Benefits', 'EUOs',
      'No-Fault Healthcare Providers', 'No-Fault RICO Defense'
    ]
  }

  return (
    <section className="practice-areas-section">
      <div className="practice-areas-container">
        <h2 className="practice-areas-heading">
          We've protected our clients' rights<br />
          across all areas of injury law
        </h2>
        
        <div className="practice-areas-images">
          <div className="practice-image-card">
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Personal Injury" 
              className="practice-image"
            />
          </div>
          <div className="practice-image-card">
            <img 
              src="https://images.unsplash.com/photo-1504307651254-35680f056037?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Work Accidents" 
              className="practice-image"
            />
          </div>
        </div>
        
        <div className="practice-areas-grid">
          {Object.entries(practiceAreas).map(([category, areas], index) => (
            <div key={index} className="practice-category">
              <h3 className="category-title">{category}</h3>
              <ul className="category-list">
                {areas.map((area, areaIndex) => (
                  <li key={areaIndex} className="category-item">{area}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PracticeAreas
