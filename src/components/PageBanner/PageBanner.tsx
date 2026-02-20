import bannerBuildings from '../../assets/banner-buildings.webp'
import './PageBanner.css'

interface PageBannerProps {
  title: string
  subtitle?: string
}

const PageBanner = ({ title, subtitle }: PageBannerProps) => {
  return (
    <section className="page-banner">
      <div className="page-banner-background">
        <img src={bannerBuildings} alt="Buildings Background" className="page-banner-image" />
        <div className="page-banner-overlay"></div>
      </div>
      
      <div className="page-banner-content">
        <h1 className="page-banner-title">{title}</h1>
        {subtitle && <p className="page-banner-subtitle">{subtitle}</p>}
      </div>
    </section>
  )
}

export default PageBanner
