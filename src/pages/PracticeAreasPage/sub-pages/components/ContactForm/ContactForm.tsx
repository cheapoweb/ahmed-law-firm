import './ContactForm.css'

interface ContactFormProps {
  title?: string
  description?: string
}

export const ContactForm = ({ 
  title = "Free Consultation with a Car Accident Lawyer",
  description = "Fill out the form below and we'll get back to you as soon as possible."
}: ContactFormProps) => {
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted')
  }

  return (
    <div className="contact-form-section">
      <div className="contact-form-container">
        <h2 className="contact-form-title">{title}</h2>
        <p className="contact-form-description">{description}</p>
        <form onSubmit={handleFormSubmit} className="contact-form">
          <div className="contact-form-row">
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
      </div>
    </div>
  )
}
