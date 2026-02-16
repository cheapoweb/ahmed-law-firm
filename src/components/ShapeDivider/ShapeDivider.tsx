import './ShapeDivider.css'

interface ShapeDividerProps {
  variant?: 'dark-to-light' | 'light-to-dark'
  flip?: boolean
  color?: string // Custom color for flexibility across multiple sections
}

const ShapeDivider = ({ variant = 'dark-to-light', flip = false, color }: ShapeDividerProps) => {
  // Determine fill color: custom color > variant-based color
  const fillColor = color || (variant === 'light-to-dark' ? '#1a2332' : '#ffffff')
  
  return (
    <div className={`shape-divider ${variant} ${flip ? 'flip' : ''}`}>
      <svg
        className="shape-divider-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        {/* Slightly curved slope: gentle dip in the middle, filled with specified color */}
        <path d="M0,0 L0,20 C360,65 1080,65 1440,20 L1440,0 Z" fill={fillColor} />
      </svg>
    </div>
  )
}

export default ShapeDivider
