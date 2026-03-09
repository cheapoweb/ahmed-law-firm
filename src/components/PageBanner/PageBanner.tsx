import bannerBuildings from '../../assets/banner-buildings.webp'
import { useTranslation } from 'react-i18next'
import './PageBanner.css'

interface PageBannerProps {
  title: string
  subtitle?: string
}

const PageBanner = ({ title, subtitle }: PageBannerProps) => {
  const { t } = useTranslation()
  return (
    <section className="page-banner">
      <div className="page-banner-background">
        <img src={bannerBuildings} alt={t('banner.buildingsAlt')} className="page-banner-image" />
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
