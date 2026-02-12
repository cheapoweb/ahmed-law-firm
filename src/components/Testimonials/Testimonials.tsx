import './Testimonials.css'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Maria Rodriguez',
      role: 'Client',
      text: 'The Ahmed Law Firm helped me recover $450,000 after my car accident. Their team was professional, caring, and fought hard for my rights.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'John Thompson',
      role: 'Client',
      text: 'After my slip and fall injury, Ahmed Law got me a $275,000 settlement. They handled everything while I focused on recovery.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Patricia Williams',
      role: 'Client',
      text: 'Medical malpractice case resulted in $850,000 recovery. The team at Ahmed Law Firm are exceptional attorneys who truly care.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
  ]

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-heading">
            We put people first,<br />
            don't take it from us.
          </h2>
          <p className="testimonials-subheading">
            Every case is a life story waiting for a new chapter. We provide the expertise to write it. Listen to the voices of those we've helped restore.
          </p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-logo">ALF</div>
                <div className="testimonial-firm">Ahmed Law Firm<br />EST 1981</div>
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <img src={testimonial.image} alt={testimonial.name} className="author-photo" />
                <div className="author-info">
                  <div className="author-name">{testimonial.name}</div>
                  <div className="author-role">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="testimonials-rating">
          <div className="rating-score">4.9/5</div>
          <div className="rating-label">Based on 500+ Google Reviews</div>
          <button className="rating-button">See all 500+ reviews</button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
