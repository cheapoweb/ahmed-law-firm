import Footer from '../../components/Footer'
import PageBanner from '../../components/PageBanner'
import { useTranslation } from 'react-i18next'
import { AttorneysGridSection } from './sections/AttorneysGridSection'
import { LocationsSection } from '../HomePage/sections/LocationsSection'
import './AttorneysPage.css'

const AttorneysPage = () => {
  const { t } = useTranslation()
  return (
    <div className="attorneys-page">
      <PageBanner 
        title={t('pages.attorneys.bannerTitle')}
        subtitle={t('pages.attorneys.bannerSubtitle')}
      />
      <AttorneysGridSection />
      <LocationsSection />
      <Footer />
    </div>
  )
}

export default AttorneysPage
