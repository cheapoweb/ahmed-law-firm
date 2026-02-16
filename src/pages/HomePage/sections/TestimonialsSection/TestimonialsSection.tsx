import ShapeDivider from '../../../../components/ShapeDivider'
import './TestimonialsSection.css'

// Convert YouTube URL to embed format
const youtubeUrl = 'https://youtu.be/i5Z00p-bHiE'
const youtubeId = youtubeUrl.replace('https://youtu.be/', '').split('?')[0]
const embedUrl = `https://www.youtube.com/embed/${youtubeId}`

const testimonials = [
  { name: 'Maria Rodriguez', role: 'Client', text: 'The Ahmed Law Firm helped me recover $450,000 after my car accident. Their team was professional, caring, and fought hard for my rights.', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { name: 'John Thompson', role: 'Client', text: 'After my slip and fall injury, Ahmed Law got me a $275,000 settlement. They handled everything while I focused on recovery.', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { name: 'Patricia Williams', role: 'Client', text: 'Medical malpractice case resulted in $850,000 recovery. The team at Ahmed Law Firm are exceptional attorneys who truly care.', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
]

export const TestimonialsSection = () => (
  <section className="testimonials-section">
    <ShapeDivider color="#F8F8F8" />
    <div className="testimonials-container">
      <div className="testimonials-header">
        <div className="testimonials-video-column">
          <div className="testimonials-video-wrapper">
            <iframe
              src={embedUrl}
              title="Ahmed Law Firm Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="testimonials-video"
            ></iframe>
          </div>
        </div>
        
        <div className="testimonials-text-column">
          <h3 className="testimonials-label">OUR PERFORMANCE</h3>
          <h2 className="testimonials-heading">
            We put people first,<br />
            <em>don't take it from us.</em>
          </h2>
          <p className="testimonials-description">
            Every case is a life story waiting for a new chapter. We provide the expertise to write it. Listen to the voices of those we've helped restore.
          </p>
          <a href="#testimonials" className="testimonials-cta">
            <span className="testimonials-cta-icon">→</span>
            <span className="testimonials-cta-text">VIEW ALL TESTIMONIALS</span>
          </a>
        </div>
      </div>
      
      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <div key={i} className="testimonial-card">
            <div className="testimonial-top">
              <div className="testimonial-firm-info">
                <div className="testimonial-avatar"></div>
                <div className="testimonial-firm-details">
                  <div className="testimonial-firm-name">AHMED LAW FIRM</div>
                  <div className="testimonial-firm-year">EST 1981</div>
                </div>
              </div>
              <div className="testimonial-stars">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
              </div>
            </div>
            <div className="testimonial-quote">
              <p className="testimonial-text">{t.text}</p>
            </div>
            <div className="testimonial-author">
              <div className="author-name-section">
                <div className="author-name-primary">{t.name.toUpperCase()} CLIENT</div>
              </div>
              <div className="author-signature">{t.name.split(' ')[0]}</div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="testimonials-rating">
        <div className="rating-widget">
          <div className="rating-stars">
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
          </div>
          <div className="rating-text">
            <span className="rating-score">4.9/5</span>
            <span className="rating-label">Based on 500+ Google Reviews</span>
          </div>
          <button className="rating-nav-button">
            <span className="nav-arrow">→</span>
          </button>
        </div>
      </div>
    </div>
  </section>
)
