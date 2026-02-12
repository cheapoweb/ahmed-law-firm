import './Locations.css'

const Locations = () => {
  const locations = [
    {
      name: 'Uniondale NY Office',
      address: '423 RXR Plaza, East Tower',
      city: 'Uniondale, New York 11556',
      phone: '516-227-2662'
    },
    {
      name: 'Brooklyn NY Office',
      address: '123 Main Street',
      city: 'Brooklyn, New York 11201',
      phone: '516-227-2662'
    },
    {
      name: 'Corona NY Office',
      address: '456 Business Ave',
      city: 'Corona, New York 11368',
      phone: '516-227-2662'
    }
  ]

  return (
    <section className="locations-section">
      <div className="locations-container">
        <h2 className="locations-heading">Our Locations</h2>
        
        <div className="locations-grid">
          {locations.map((location, index) => (
            <div key={index} className="location-card">
              <h3 className="location-name">{location.name}</h3>
              <div className="location-address">
                <p className="address-line">{location.address}</p>
                <p className="address-city">{location.city}</p>
              </div>
              <div className="location-contact">
                <p className="contact-phone">{location.phone}</p>
              </div>
              <button className="location-button">Get Directions</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Locations
