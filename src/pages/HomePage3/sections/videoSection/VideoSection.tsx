import './VideoSection.css'

const YOUTUBE_ID = 'i5Z00p-bHiE'
const EMBED_URL = `https://www.youtube.com/embed/${YOUTUBE_ID}?rel=0&modestbranding=1`

const VideoSection = () => {
  return (
    <section className="hp3-video-section" aria-label="Watch our video">
      <div className="hp3-video-container">
        <p className="hp3-video-label">WATCH</p>
        <h2 className="hp3-video-heading">
          Hear From <em>Ahmed Law Firm</em>
        </h2>
        <p className="hp3-video-subheading">
          See why clients across New York trust us with their most important legal matters.
        </p>
        <div className="hp3-video-wrapper">
          <div className="hp3-video-aspect">
            <iframe
              src={EMBED_URL}
              title="Ahmed Law Firm - Client Testimonial or Firm Overview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="hp3-video-iframe"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoSection
