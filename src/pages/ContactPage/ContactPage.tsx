import { Link } from 'react-router-dom'
import Footer from '../../components/Footer'
import PageBanner from '../../components/PageBanner'
import ShapeDivider from '../../components/ShapeDivider'
import './ContactPage.css'

const practiceAreas = [
  { label: 'Auto Accidents', to: '/practice-areas/auto-accidents' },
  { label: 'Vehicle & Car Accidents', to: '/practice-areas/car-accidents' },
  { label: 'Personal Injury', to: '/practice-areas' },
  { label: 'Wrongful Death', to: '/practice-areas' },
  { label: 'Medical Malpractice', to: '/practice-areas' },
  { label: 'Truck Accidents', to: '/practice-areas/truck-accidents' },
  { label: 'Motorcycle Accidents', to: '/practice-areas/motorcycle-accidents' },
]

const location = {
  name: 'Ahmed Law Firm',
  address: '104-09 113th St',
  city: 'South Richmond Hill, NY 11419',
  phone: '(718) 848-9595',
  email: 'frontdesk@lawahmed.com',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890123!2d-73.8273456!3d40.6963456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25f3b3b3b3b3b%3A0x3b3b3b3b3b3b3b3b!2s104-09%20113th%20St%2C%20South%20Richmond%20Hill%2C%20NY%2011419!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus',
  directionsUrl: 'https://maps.app.goo.gl/E1r4nEqMQBZNr4yz9',
}

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Form submission handling
  }

  return (
    <div className="contact-page">
      <PageBanner
        title="Contact Us"
        subtitle="Get a free, no-obligation consultation with our personal injury attorneys. We're here to help."
      />

      <section className="contact-main">
        <ShapeDivider color="#FFFFFF" />
        <div className="contact-container">
          <aside className="contact-sidebar">
            <h2 className="contact-sidebar-heading">How Can We Help You?</h2>
            <p className="contact-sidebar-sub">Select a practice area related to your inquiry.</p>
            <nav className="contact-sidebar-nav">
              {practiceAreas.map((pa) => (
                <Link key={pa.label} to={pa.to} className="contact-sidebar-link">
                  {pa.label}
                </Link>
              ))}
            </nav>
          </aside>

          <div className="contact-content">
            <h1 className="contact-title">Contact Us for a Free Lawyer Consultation</h1>
            <div className="contact-intro">
              <p>
                Ahmed Law Firm has helped thousands of clients across New York recover compensation after serious injuries. Whether you were injured in a car accident, truck accident, slip and fall, or another incident, our attorneys are ready to listen and advise.
              </p>
              <p>
                Use the form below to <strong>request a free consultation</strong>. You can also call us at <a href="tel:7188489595">(718) 848-9595</a> 24/7. We work on a contingency fee basis—you don't pay unless we win. Learn more about <Link to="/verdicts-settlements">our results</Link> and <Link to="/about">our firm</Link>.
              </p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <fieldset className="contact-fieldset">
                <legend className="contact-legend">Personal Information</legend>
                <div className="contact-form-grid">
                  <div className="contact-form-group">
                    <label htmlFor="contact-name">Name *</label>
                    <input id="contact-name" type="text" name="name" required placeholder="Your name" />
                  </div>
                  <div className="contact-form-group">
                    <label htmlFor="contact-email">Email *</label>
                    <input id="contact-email" type="email" name="email" required placeholder="your@email.com" />
                  </div>
                  <div className="contact-form-group">
                    <label htmlFor="contact-state">State</label>
                    <select id="contact-state" name="state">
                      <option value="NY">New York</option>
                      <option value="NJ">New Jersey</option>
                      <option value="CT">Connecticut</option>
                      <option value="PA">Pennsylvania</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="contact-form-group">
                    <label htmlFor="contact-zip">Zip</label>
                    <input id="contact-zip" type="text" name="zip" placeholder="Zip code" />
                  </div>
                  <div className="contact-form-group">
                    <label htmlFor="contact-phone">Phone *</label>
                    <input id="contact-phone" type="tel" name="phone" required placeholder="(555) 555-5555" />
                  </div>
                </div>
              </fieldset>

              <fieldset className="contact-fieldset">
                <legend className="contact-legend">Contact Preferences</legend>
                <p className="contact-pref-label">How would you like to be contacted?</p>
                <div className="contact-checkbox-group">
                  <label className="contact-checkbox-label">
                    <input type="checkbox" name="contact_email" defaultChecked />
                    <span>Email</span>
                  </label>
                  <label className="contact-checkbox-label">
                    <input type="checkbox" name="contact_phone" defaultChecked />
                    <span>Phone</span>
                  </label>
                </div>
              </fieldset>

              <fieldset className="contact-fieldset">
                <legend className="contact-legend">How Can We Help You?</legend>
                <div className="contact-form-group">
                  <label htmlFor="contact-message">Brief Description of Your Legal Issue *</label>
                  <textarea id="contact-message" name="message" rows={5} required placeholder="Tell us what happened and how we can help..." />
                </div>
              </fieldset>

              <div className="contact-disclaimer">
                <label className="contact-checkbox-label">
                  <input type="checkbox" name="disclaimer" required />
                  <span>I have read the <a href="#privacy">Privacy Policy</a> and disclaimer. *</span>
                </label>
              </div>

              <button type="submit" className="contact-submit">Send this message</button>
            </form>

            <div className="contact-map-section">
              <h2 className="contact-map-heading">Our Office</h2>
              <div className="contact-map-wrapper">
                <iframe
                  src={location.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ahmed Law Firm Location"
                  className="contact-map-iframe"
                />
              </div>
              <div className="contact-map-info">
                <p className="contact-map-name">{location.name}</p>
                <p className="contact-map-address">{location.address}</p>
                <p className="contact-map-city">{location.city}</p>
                <p className="contact-map-phone">
                  Phone: <a href={`tel:${location.phone.replace(/\D/g, '')}`}>{location.phone}</a>
                </p>
                <a href={location.directionsUrl} target="_blank" rel="noopener noreferrer" className="contact-map-directions">
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-media-section">
        <div className="contact-media-container">
          <h2 className="contact-media-heading">Learn More About Us</h2>
          <div className="contact-media-cards">
            <Link to="/reviews-ratings" className="contact-media-card">
              <span className="contact-media-icon">▶</span>
              <span className="contact-media-text">Watch client testimonials and firm videos</span>
            </Link>
            <Link to="/reviews-ratings" className="contact-media-card">
              <span className="contact-media-icon">♫</span>
              <span className="contact-media-text">Listen to client stories and radio appearances</span>
            </Link>
            <Link to="/legal-blog" className="contact-media-card">
              <span className="contact-media-icon">📖</span>
              <span className="contact-media-text">Read our legal blog and latest updates</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ContactPage
