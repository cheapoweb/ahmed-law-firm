import './Performance.css'

const Performance = () => {
  // Using relevant images for case studies - replace with your actual case images later
  const caseStudies = [
    { 
      amount: '$875,000', 
      type: 'Auto Accident', 
      description: '51 year old male was rear ended sustaining neck and back injuries and successfully resolved his case within eighteen months.',
      image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    { 
      amount: '$1.6 Million', 
      type: 'Auto Accident', 
      description: 'The injured plaintiff was struck from behind on the Hutchinson State Parkway sustaining injuries to the neck, back, and left shoulder.',
      image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    { 
      amount: '$8 Million', 
      type: 'Construction Accident', 
      description: 'Plaintiff sustained a series of fractures and other injuries to the right shin, heel and foot, requiring nailing of the right tibia.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f056037?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    { 
      amount: '$2 Million', 
      type: 'Wrongful Death', 
      description: 'Wrongful death case settled at the Appellate level, 44-year-old husband and father drowned while swimming in a municipal pool.',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    { 
      amount: '$950,000', 
      type: 'Auto Accident', 
      description: '63-year-old rear ended on the cross island parkway resulting in an anterior cervical discectomy and permanently disabling her from work.',
      image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
  ]

  return (
    <section className="performance-section">
      <div className="performance-container">
        <div className="performance-header">
          <h2 className="performance-heading">
            Across 1000's of cases,<br />
            a half-billion+ recovered.
          </h2>
          <div className="performance-stats">
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">AHMED LAW FIRM SUCCESS RATE*</div>
            </div>
            <div className="stat-comparison">
              <div className="comparison-label">INDUSTRY AVG</div>
              <div className="comparison-number">60%</div>
            </div>
          </div>
          <p className="performance-note">
            *Industry averages track the field. Our 98% rate represents the standard within the complex litigation we navigate.
          </p>
        </div>
        
        <div className="case-studies-grid">
          {caseStudies.map((caseStudy, index) => (
            <div key={index} className="case-study-card">
              <div className="case-image-container">
                <img src={caseStudy.image} alt={caseStudy.type} className="case-image" />
              </div>
              <div className="case-content">
                <div className="case-amount">{caseStudy.amount}</div>
                <div className="case-type">{caseStudy.type}</div>
                <p className="case-description">{caseStudy.description}</p>
                <button className="case-button">View Case Study</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Performance
