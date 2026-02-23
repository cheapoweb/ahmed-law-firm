import Footer from '../../components/Footer'
import PageBanner from '../../components/PageBanner'
import './ReviewsRatingsPage.css'

const videoReviews = [
  {
    id: 1,
    title: 'Client Testimonial - Auto Accident Case',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    name: 'John D.',
  },
  {
    id: 2,
    title: 'Why I Chose Ahmed Law Firm',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    name: 'Maria S.',
  },
  {
    id: 3,
    title: 'Outstanding Results - Settlement Review',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    name: 'Robert M.',
  },
]

const writtenReviews = [
  {
    id: 1,
    quote: 'Ahmed Law Firm fought tirelessly for my family after my husband was injured in a truck accident. They kept us informed every step of the way and secured a settlement that has helped us move forward. I cannot recommend them enough.',
    name: 'Sarah L.',
    rating: 5,
    date: 'January 2024',
  },
  {
    id: 2,
    quote: 'Professional, responsive, and truly caring. From the first consultation to the final settlement, the team at Ahmed Law Firm exceeded my expectations. They treated my case with the attention it deserved.',
    name: 'Michael T.',
    rating: 5,
    date: 'December 2023',
  },
  {
    id: 3,
    quote: 'I was nervous about the legal process after my car accident. Ahmed Law Firm put me at ease and handled everything. They got me a fair settlement and I am grateful for their expertise and kindness.',
    name: 'Jennifer K.',
    rating: 5,
    date: 'November 2023',
  },
  {
    id: 4,
    quote: "After being injured in a slip and fall, I didn't know where to turn. Ahmed Law Firm took my case and delivered results. They are knowledgeable, honest, and I would refer anyone to them.",
    name: 'David R.',
    rating: 5,
    date: 'October 2023',
  },
]

const clientLogos = [
  { id: 1, name: 'Client 1' },
  { id: 2, name: 'Client 2' },
  { id: 3, name: 'Client 3' },
  { id: 4, name: 'Client 4' },
  { id: 5, name: 'Client 5' },
  { id: 6, name: 'Client 6' },
  { id: 7, name: 'Client 7' },
  { id: 8, name: 'Client 8' },
]

const ReviewsRatingsPage = () => {
  return (
    <div className="reviews-ratings-page">
      <PageBanner
        title="Reviews & Ratings"
        subtitle="What our clients say about their experience with Ahmed Law Firm"
      />

      <section className="reviews-logos-section">
        <div className="reviews-container">
          <h2 className="reviews-section-heading">Trusted by Our Clients</h2>
          <p className="reviews-section-sub">
            We are proud to have helped thousands of clients across New York.
          </p>
          <div className="reviews-logos-carousel">
            <div className="reviews-logos-track">
              {[...clientLogos, ...clientLogos].map((client) => (
                <div key={`${client.id}-${client.name}`} className="reviews-logo-item">
                  <div className="reviews-logo-placeholder">
                    <span className="reviews-logo-text">{client.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="reviews-video-section">
        <div className="reviews-container">
          <h2 className="reviews-section-heading">Video Reviews</h2>
          <p className="reviews-section-sub">
            Hear directly from clients who trusted us with their personal injury cases.
          </p>
          <div className="reviews-video-grid">
            {videoReviews.map((video) => (
              <div key={video.id} className="reviews-video-card">
                <div className="reviews-video-wrapper">
                  <iframe
                    title={video.title}
                    src={video.embedUrl}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="reviews-video-iframe"
                  />
                </div>
                <p className="reviews-video-caption">{video.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="reviews-written-section">
        <div className="reviews-container">
          <h2 className="reviews-section-heading">Written Reviews</h2>
          <p className="reviews-section-sub">
            Read what our clients have shared about their experience.
          </p>
          <div className="reviews-written-grid">
            {writtenReviews.map((review) => (
              <article key={review.id} className="reviews-written-card">
                <div className="reviews-stars">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <span key={i} className="reviews-star" aria-hidden>★</span>
                  ))}
                </div>
                <blockquote className="reviews-quote">&ldquo;{review.quote}&rdquo;</blockquote>
                <footer className="reviews-meta">
                  <span className="reviews-author">{review.name}</span>
                  <span className="reviews-date">{review.date}</span>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ReviewsRatingsPage
