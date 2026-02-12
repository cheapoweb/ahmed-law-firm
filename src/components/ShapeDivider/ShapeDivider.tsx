import './ShapeDivider.css'

interface ShapeDividerProps {
  variant?: 'dark-to-light' | 'light-to-dark'
  flip?: boolean
}

const ShapeDivider = ({ variant = 'dark-to-light', flip = false }: ShapeDividerProps) => {
  return (
    <div className={`shape-divider ${variant} ${flip ? 'flip' : ''}`}>
      <svg 
        className="shape-divider-svg" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1440 80" 
        preserveAspectRatio="none"
      >
        <path 
          d="M0,0 L0,10 Q720,70 1440,10 L1440,0 Z" 
        />
      </svg>
    </div>
  )
}

export default ShapeDivider
