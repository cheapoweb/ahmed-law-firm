import { useState, useEffect, useRef, useCallback } from 'react'
import './AwardsSection.css'

const lawAwards = [
  { name: 'Best Lawyers', image: 'https://www.thelawyersglobal.org/images/badges/round/TLG-Legal-Award-Badge-2020@0.75x.png' },
  { name: 'Super Lawyers', image: 'https://www.thelawyersglobal.org/images/badges/round/TLG-Legal-Award-Badge-2020@0.75x.png' },
  { name: 'Martindale-Hubbell', image: 'https://www.thelawyersglobal.org/images/badges/round/TLG-Legal-Award-Badge-2020@0.75x.png' },
  { name: 'AV Preeminent', image: 'https://www.thelawyersglobal.org/images/badges/round/TLG-Legal-Award-Badge-2020@0.75x.png' },
  { name: 'Legal 500', image: 'https://www.thelawyersglobal.org/images/badges/round/TLG-Legal-Award-Badge-2020@0.75x.png' },
  { name: 'Chambers USA', image: 'https://www.thelawyersglobal.org/images/badges/round/TLG-Legal-Award-Badge-2020@0.75x.png' },
  { name: 'Law360', image: 'https://www.thelawyersglobal.org/images/badges/round/TLG-Legal-Award-Badge-2020@0.75x.png' },
  { name: 'Trial Lawyers', image: 'https://www.thelawyersglobal.org/images/badges/round/TLG-Legal-Award-Badge-2020@0.75x.png' },
  { name: 'Million Dollar', image: 'https://www.thelawyersglobal.org/images/badges/round/TLG-Legal-Award-Badge-2020@0.75x.png' },
  { name: 'Multi-Million Dollar', image: 'https://www.thelawyersglobal.org/images/badges/round/TLG-Legal-Award-Badge-2020@0.75x.png' },
  { name: 'Top Verdict', image: 'https://www.thelawyersglobal.org/images/badges/round/TLG-Legal-Award-Badge-2020@0.75x.png' },
  { name: 'National Trial Lawyers', image: 'https://www.thelawyersglobal.org/images/badges/round/TLG-Legal-Award-Badge-2020@0.75x.png' },
]

export const AwardsSection = () => {
  const [translateX, setTranslateX] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const startXRef = useRef(0)
  const translateXRef = useRef(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null)
  const awardWidth = 120
  const gap = 24 // 1.5rem = 24px
  const itemWidth = awardWidth + gap

  // Create enough duplicates for seamless infinite scroll
  const duplicatedAwards = [...lawAwards, ...lawAwards, ...lawAwards]

  // Keep refs in sync with state
  useEffect(() => {
    translateXRef.current = translateX
  }, [translateX])

  // Infinite auto-scroll
  useEffect(() => {
    if (isDragging) return

    const startAutoScroll = () => {
      autoScrollRef.current = setInterval(() => {
        setTranslateX((prev) => {
          const newX = prev + itemWidth
          // Reset seamlessly when we've scrolled through one full set
          // Use modulo to create infinite loop
          const maxScroll = lawAwards.length * itemWidth
          if (newX >= maxScroll) {
            return newX % maxScroll
          }
          return newX
        })
      }, 3000) // Auto-slide every 3 seconds
    }

    startAutoScroll()
    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current)
      }
    }
  }, [isDragging, itemWidth])

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    startXRef.current = e.clientX - translateXRef.current
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current)
    }
  }

  const handleMouseMove = useCallback((e: MouseEvent) => {
    e.preventDefault()
    const newX = e.clientX - startXRef.current
    setTranslateX(newX)
  }, [])

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
    
    setTranslateX((prevX) => {
      // Snap to nearest item
      const snappedIndex = Math.round(prevX / itemWidth)
      let snappedX = snappedIndex * itemWidth
      
      // Handle infinite loop reset
      const maxScroll = lawAwards.length * itemWidth
      if (snappedX < 0) {
        snappedX = maxScroll + (snappedX % maxScroll)
      } else if (snappedX >= maxScroll) {
        snappedX = snappedX % maxScroll
      }
      
      return snappedX
    })
  }, [itemWidth])

  // Global mouse events for smooth dragging
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      document.body.style.cursor = 'grabbing'
      document.body.style.userSelect = 'none'
      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
        document.body.style.cursor = ''
        document.body.style.userSelect = ''
      }
    }
  }, [isDragging, handleMouseMove, handleMouseUp])

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    startXRef.current = e.touches[0].clientX - translateXRef.current
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current)
    }
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    const newX = e.touches[0].clientX - startXRef.current
    setTranslateX(newX)
  }

  const handleTouchEnd = () => {
    if (!isDragging) return
    setIsDragging(false)
    
    setTranslateX((prevX) => {
      // Snap to nearest item
      const snappedIndex = Math.round(prevX / itemWidth)
      let snappedX = snappedIndex * itemWidth
      
      // Handle infinite loop reset
      const maxScroll = lawAwards.length * itemWidth
      if (snappedX < 0) {
        snappedX = maxScroll + (snappedX % maxScroll)
      } else if (snappedX >= maxScroll) {
        snappedX = snappedX % maxScroll
      }
      
      return snappedX
    })
  }

  return (
    <section className="awards-section">
      <div className="awards-container">
        <h2 className="awards-title">OUR AWARDS</h2>
        <div className="awards-carousel-wrapper">
          <div 
            ref={carouselRef}
            className={`awards-carousel ${isDragging ? 'dragging' : ''}`}
            style={{
              transform: `translateX(-${translateX}px)`,
              transition: isDragging ? 'none' : 'transform 0.6s ease-in-out',
              cursor: isDragging ? 'grabbing' : 'grab'
            }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {duplicatedAwards.map((award, index) => (
              <div key={index} className="award-badge">
                <img src={award.image} alt={award.name} className="award-image" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
