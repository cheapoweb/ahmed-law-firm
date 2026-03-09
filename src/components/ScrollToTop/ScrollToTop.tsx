import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Scrolls the window to the top whenever the route changes.
 * Fixes the issue where navigating (e.g. from sidebar or footer) keeps the previous scroll position.
 */
export const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
