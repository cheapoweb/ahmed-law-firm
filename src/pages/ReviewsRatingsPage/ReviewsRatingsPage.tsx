import Footer from '../../components/Footer'
import PageBanner from '../../components/PageBanner'
import { useTranslation } from 'react-i18next'
import '../../pages/HomePage/sections/TestimonialsSection/TestimonialsSection.css'
import './ReviewsRatingsPage.css'

const toInitials = (name: string) =>
  name
    .replace(/\./g, '')
    .trim()
    .split(/\s+/)
    .map((part) => part.charAt(0).toUpperCase())
    .join('.') + '.'

const videoReviews = [
  { id: 1, title: 'Client Testimonial - Auto Accident Case', embedUrl: 'https://www.youtube.com/embed/WGuNoKBQQEE', name: 'John D.' },
  { id: 2, title: 'Why I Chose Ahmed Law Firm', embedUrl: 'https://www.youtube.com/embed/KBm3C1AErzc', name: 'Maria S.' },
  { id: 3, title: 'Outstanding Results - Settlement Review', embedUrl: 'https://www.youtube.com/embed/i5Z00p-bHiE', name: 'Robert M.' },
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
  {
    id: 5,
    quote: 'The team at Ahmed Law Firm was incredible from start to finish. They explained everything clearly and fought hard for my family. We are so grateful for their dedication and the outcome.',
    name: 'Amanda P.',
    rating: 5,
    date: 'September 2023',
  },
  {
    id: 6,
    quote: 'After my construction accident, I was lost. Ahmed Law Firm guided me through every step and secured a fair settlement. They are compassionate professionals who really care.',
    name: 'Carlos M.',
    rating: 5,
    date: 'August 2023',
  },
  {
    id: 7,
    quote: 'I had a medical malpractice case and was afraid no one would take it. Ahmed Law Firm believed in me and won. I cannot thank them enough for giving my family hope.',
    name: 'Patricia W.',
    rating: 5,
    date: 'July 2023',
  },
  {
    id: 8,
    quote: 'Honest, thorough, and results-driven. Ahmed Law Firm handled my pedestrian accident case with expertise. They kept me updated and achieved a settlement I did not expect.',
    name: 'James H.',
    rating: 5,
    date: 'June 2023',
  },
  {
    id: 9,
    quote: 'From the first call, I knew I was in good hands. The team at Ahmed Law Firm was professional, kind, and relentless. They got me the compensation I deserved.',
    name: 'Nicole F.',
    rating: 5,
    date: 'May 2023',
  },
]

const ReviewsRatingsPage = () => {
  const { t } = useTranslation()
  return (
    <div className="reviews-ratings-page">
      <PageBanner
        title={t('pages.reviews.bannerTitle')}
        subtitle={t('pages.reviews.bannerSubtitle')}
      />

      <section className="reviews-video-section">
        <div className="reviews-container">
          <h2 className="reviews-section-heading">{t('pages.reviews.videoHeading', 'Hear From Our Clients')}</h2>
          <p className="reviews-section-sub">
            {t('pages.reviews.videoSub', 'Hear directly from clients who trusted us with their personal injury cases.')}
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
                <p className="reviews-video-caption">{toInitials(video.name)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="reviews-written-section testimonials-section">
        <div className="testimonials-container">
          <h2 className="reviews-section-heading">{t('pages.reviews.writtenHeading', 'What Our Clients Say')}</h2>
          <p className="reviews-section-sub">
            {t('pages.reviews.writtenSub', 'Read what our clients have shared about their experience.')}
          </p>
          <div className="testimonials-grid">
            {writtenReviews.map((review) => (
              <div key={review.id} className="testimonial-card">
                <div className="testimonial-top">
                  <div className="testimonial-firm-info">
                    <div className="testimonial-avatar" />
                    <div className="testimonial-firm-details">
                      <div className="testimonial-firm-name">AHMED LAW FIRM</div>
                      <div className="testimonial-firm-year">EST 1981</div>
                    </div>
                  </div>
                  <div className="testimonial-stars">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <span key={i} className="star" aria-hidden>★</span>
                    ))}
                  </div>
                </div>
                <div className="testimonial-quote">
                  <p className="testimonial-text">&ldquo;{review.quote}&rdquo;</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-name-section">
                    <div className="author-name-primary">{toInitials(review.name)} CLIENT</div>
                  </div>
                  <div className="author-signature">{toInitials(review.name)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ReviewsRatingsPage
