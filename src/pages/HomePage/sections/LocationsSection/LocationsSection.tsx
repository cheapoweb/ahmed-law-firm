import ShapeDivider from '../../../../components/ShapeDivider'
import './LocationsSection.css'

const location = {
  name: 'Ahmed Law Firm',
  address: '104-09 113th St',
  city: 'South Richmond Hill, NY 11419, USA',
  phone: '(718) 848-9595',
  email: 'frontdesk@lawahmed.com',
  mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890123!2d-73.8273456!3d40.6963456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQxJzQ2LjkiTiA3M8KwNDknMzguNCJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus'
}

export const LocationsSection = () => (
  <section className="locations-section">
    <ShapeDivider color="#F8F8F8" />
      <div className="locations-container">
        <div className="locations-label">OUR LOCATION</div>
        <h2 className="locations-heading">
          Find Us <em>at Our Office</em>
        </h2>
        
        <div className="location-content">
          <div className="location-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890123!2d-73.8273456!3d40.6963456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25f3b3b3b3b3b%3A0x3b3b3b3b3b3b3b3b!2s104-09%20113th%20St%2C%20South%20Richmond%20Hill%2C%20NY%2011419!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus&q=Ahmed+Law+Firm"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ahmed Law Firm Location"
            ></iframe>
          </div>
          
          <div className="location-info">
            <h3 className="location-name">{location.name}</h3>
            <div className="location-address">
              <span className="contact-label">ADDRESS:</span>
              <p className="address-line">{location.address}</p>
              <p className="address-city">{location.city}</p>
            </div>
            <div className="location-contact">
              <div className="contact-item">
                <span className="contact-label">PHONE:</span>
                <a href={`tel:${location.phone.replace(/\s/g, '')}`} className="contact-phone">{location.phone}</a>
              </div>
              <div className="contact-item">
                <span className="contact-label">EMAIL:</span>
                <a href={`mailto:${location.email}`} className="contact-email">{location.email}</a>
              </div>
            </div>
            <a 
              href="https://maps.app.goo.gl/E1r4nEqMQBZNr4yz9"
              target="_blank"
              rel="noopener noreferrer"
              className="location-button"
            >
              Get Directions
            </a>
          </div>
        </div>
    </div>
  </section>
)
