import ShapeDivider from '../../../../components/ShapeDivider'
import './TeamSection.css'

const attorneys = [
  { name: 'Ahmed Attorney', title: 'Senior Partner', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
  { name: 'Ahmed Attorney', title: 'Managing Partner', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
  { name: 'Ahmed Attorney', title: 'Managing Litigation Attorney', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
  { name: 'Ahmed Attorney', title: 'Senior Associate', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
]

export const TeamSection = () => (
  <section className="team-section">
    <ShapeDivider color="#FFFFFF" />
    <div className="team-container">
      <h2 className="team-heading">
        Working with the best<br />
        has never been easier.
      </h2>
      
      <div className="team-grid">
        {attorneys.map((attorney, index) => (
          <div key={index} className="team-member">
            <div className="member-photo">
              <img src={attorney.image} alt={attorney.name} className="member-image" />
            </div>
            <div className="member-info">
              <h3 className="member-name">{attorney.name}</h3>
              <p className="member-title">{attorney.title}</p>
              <button className="member-bio">View Professional Biography</button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="team-footer">
        <button className="view-all-button">View All Attorneys</button>
      </div>
    </div>
  </section>
)
