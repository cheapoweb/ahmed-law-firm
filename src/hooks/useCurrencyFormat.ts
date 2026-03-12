import { useState, useEffect, useCallback } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { fetchUsdRates, formatMoney, formatLargeMoney } from '../utils/currency'

/**
 * Hook for locale-aware money formatting. Fetches USD→all target currencies once;
 * every language uses its currency from LANG_TO_CURRENCY (en=USD, es=EUR, ur=PKR, etc.).
 */
export function useCurrencyFormat() {
  const { language } = useLanguage()
  const [rates, setRates] = useState<Record<string, number> | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  // Fetch all USD→currency rates once on mount; used for every language.
  useEffect(() => {
    fetchUsdRates()
      .then(setRates)
      .catch(() => {
        setError(true)
        setRates(null)
      })
      .finally(() => setLoading(false))
  }, [])

  const formatAmount = useCallback(
    (amountUsd: number) => formatMoney(amountUsd, language, rates),
    [language, rates]
  )

  const formatLargeAmount = useCallback(
    (amountUsd: number, suffix = '') =>
      formatLargeMoney(amountUsd, language, rates, suffix),
    [language, rates]
  )

  return { formatAmount, formatLargeAmount, loading, error }
}
