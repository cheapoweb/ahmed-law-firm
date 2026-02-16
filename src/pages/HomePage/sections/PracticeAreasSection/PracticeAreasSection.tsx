import ShapeDivider from '../../../../components/ShapeDivider'
import './PracticeAreasSection.css'

// Convert YouTube URL to embed format
const youtubeUrl = 'https://youtu.be/i5Z00p-bHiE'
const youtubeId = youtubeUrl.replace('https://youtu.be/', '').split('?')[0]
const embedUrl = `https://www.youtube.com/embed/${youtubeId}`

export const PracticeAreasSection = () => (
  <section className="practice-areas-section">
    <ShapeDivider color="#222F40" />
    <div className="practice-areas-container">
      <div className="practice-areas-content">
        <div className="practice-video-column">
          <div className="video-wrapper">
            <iframe
              src={embedUrl}
              title="Ahmed Law Firm Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="practice-video"
            ></iframe>
          </div>
        </div>
        
        <div className="practice-text-column">
          <h3 className="practice-label">OUR PERFORMANCE</h3>
          <h2 className="practice-heading">
            We put people first,<br />
            <em>don't take it from us.</em>
          </h2>
          <p className="practice-description">
            Every case is a life story waiting for a new chapter. We provide the expertise to write it. Listen to the voices of those we've helped restore.
          </p>
          <a href="#testimonials" className="practice-cta">
            <span className="cta-icon">→</span>
            <span className="cta-text">VIEW ALL TESTIMONIALS</span>
          </a>
        </div>
      </div>
    </div>
  </section>
)
