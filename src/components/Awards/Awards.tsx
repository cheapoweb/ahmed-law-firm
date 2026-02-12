import './Awards.css'

const Awards = () => {
  // Using award badge images - replace with your actual award images later
  const awardImages = [
    'https://via.placeholder.com/120x120/D4AF37/FFFFFF?text=AWARD',
    'https://via.placeholder.com/120x120/1a1a1a/D4AF37?text=AWARD',
    'https://via.placeholder.com/120x120/D4AF37/FFFFFF?text=AWARD',
    'https://via.placeholder.com/120x120/1a1a1a/D4AF37?text=AWARD',
    'https://via.placeholder.com/120x120/D4AF37/FFFFFF?text=AWARD',
    'https://via.placeholder.com/120x120/1a1a1a/D4AF37?text=AWARD',
    'https://via.placeholder.com/120x120/D4AF37/FFFFFF?text=AWARD',
    'https://via.placeholder.com/120x120/1a1a1a/D4AF37?text=AWARD',
    'https://via.placeholder.com/120x120/D4AF37/FFFFFF?text=AWARD',
    'https://via.placeholder.com/120x120/1a1a1a/D4AF37?text=AWARD',
    'https://via.placeholder.com/120x120/D4AF37/FFFFFF?text=AWARD',
    'https://via.placeholder.com/120x120/1a1a1a/D4AF37?text=AWARD',
    'https://via.placeholder.com/120x120/D4AF37/FFFFFF?text=AWARD',
    'https://via.placeholder.com/120x120/1a1a1a/D4AF37?text=AWARD',
    'https://via.placeholder.com/120x120/D4AF37/FFFFFF?text=AWARD',
    'https://via.placeholder.com/120x120/1a1a1a/D4AF37?text=AWARD',
    'https://via.placeholder.com/120x120/D4AF37/FFFFFF?text=AWARD',
    'https://via.placeholder.com/120x120/1a1a1a/D4AF37?text=AWARD',
    'https://via.placeholder.com/120x120/D4AF37/FFFFFF?text=AWARD',
    'https://via.placeholder.com/120x120/1a1a1a/D4AF37?text=AWARD',
    'https://via.placeholder.com/120x120/D4AF37/FFFFFF?text=AWARD',
    'https://via.placeholder.com/120x120/1a1a1a/D4AF37?text=AWARD',
    'https://via.placeholder.com/120x120/D4AF37/FFFFFF?text=AWARD',
    'https://via.placeholder.com/120x120/1a1a1a/D4AF37?text=AWARD',
  ]

  return (
    <section className="awards-section">
      <div className="awards-container">
        <h2 className="awards-title">OUR AWARDS</h2>
        <div className="awards-grid">
          {awardImages.map((imageUrl, index) => (
            <div key={index} className="award-badge">
              <img src={imageUrl} alt={`Award ${index + 1}`} className="award-image" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Awards
