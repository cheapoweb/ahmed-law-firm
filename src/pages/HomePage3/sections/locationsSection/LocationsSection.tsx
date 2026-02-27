import './LocationsSection.css'

const location = {
  name: 'Ahmed Law Firm',
  address: '104-09 113th St',
  city: 'South Richmond Hill, NY 11419, USA',
  phone: '(718) 848-9595',
  email: 'frontdesk@lawahmed.com',
}

const LocationsSection = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <section className="hp3-locations-section">
      <div className="hp3-locations-container">
        <p className="hp3-locations-label">OUR LOCATION</p>
        <h2 className="hp3-locations-heading">
          Contact Our Attorneys <em>Anytime</em>
        </h2>

        <div className="hp3-locations-grid">
          <div className="hp3-locations-left">
            <h3 className="hp3-locations-office-name">{location.name}</h3>
            <div className="hp3-locations-block">
              <div className="hp3-locations-block-label">Office</div>
              <p className="hp3-locations-line">{location.address}</p>
              <p className="hp3-locations-line">{location.city}</p>
            </div>

            <div className="hp3-locations-block">
              <div className="hp3-locations-block-label">Contact</div>
              <a href="tel:7188489595" className="hp3-locations-link">
                (718) 848-9595
              </a>
              <a href="mailto:frontdesk@lawahmed.com" className="hp3-locations-link hp3-locations-link--muted">
                frontdesk@lawahmed.com
              </a>
            </div>

            <div className="hp3-locations-block">
              <div className="hp3-locations-block-label">Serving</div>
              <p className="hp3-locations-line hp3-locations-line--muted">
                Queens · Brooklyn · The Bronx · Manhattan · Long Island and surrounding New York communities.
              </p>
            </div>

            <div className="hp3-locations-social">
              <div className="hp3-locations-social-label">Follow</div>
              <div className="hp3-locations-social-icons">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit our Facebook page"
                  className="hp3-locations-social-icon"
                >
                  F
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit our LinkedIn profile"
                  className="hp3-locations-social-icon"
                >
                  in
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit our Instagram profile"
                  className="hp3-locations-social-icon"
                >
                  IG
                </a>
              </div>
            </div>
          </div>

          <div className="hp3-locations-right">
            <div className="hp3-locations-form-card">
              <form className="hp3-locations-form" onSubmit={handleSubmit}>
                <div className="hp3-locations-form-row">
                  <div className="hp3-locations-field">
                    <label htmlFor="hp3-name">Full name</label>
                    <input id="hp3-name" name="name" type="text" autoComplete="name" required />
                  </div>
                  <div className="hp3-locations-field">
                    <label htmlFor="hp3-phone">Phone</label>
                    <input id="hp3-phone" name="phone" type="tel" autoComplete="tel" required />
                  </div>
                </div>
                <div className="hp3-locations-form-row">
                  <div className="hp3-locations-field">
                    <label htmlFor="hp3-email">Email</label>
                    <input id="hp3-email" name="email" type="email" autoComplete="email" />
                  </div>
                  <div className="hp3-locations-field">
                    <label htmlFor="hp3-practice-area">Practice area</label>
                    <select id="hp3-practice-area" name="practiceArea" defaultValue="">
                      <option value="" disabled>
                        Select an area
                      </option>
                      <option value="auto-accidents">Auto / Car accident</option>
                      <option value="construction">Construction accident</option>
                      <option value="slip-fall">Slip &amp; fall</option>
                      <option value="medical-malpractice">Medical malpractice</option>
                      <option value="other">Other injury</option>
                    </select>
                  </div>
                </div>
                <div className="hp3-locations-field">
                  <label htmlFor="hp3-message">Brief description of your case</label>
                  <textarea id="hp3-message" name="message" rows={4} />
                </div>
                <button type="submit" className="hp3-locations-submit">
                  Submit to our attorneys
                </button>
                <p className="hp3-locations-disclaimer">
                  By submitting, you agree that this form does not create an attorney–client relationship and no
                  confidential information should be included.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocationsSection

