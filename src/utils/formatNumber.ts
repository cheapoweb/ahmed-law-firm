/**
 * Map i18n language codes to BCP 47 locales for number/currency formatting.
 * Ensures numbers (digits, grouping, currency) adapt to the selected language.
 */
const LOCALE_MAP: Record<string, string> = {
  en: 'en-US',
  es: 'es',
  pa: 'pa-IN',
  ur: 'ur-PK',
  hi: 'hi-IN',
  bn: 'bn-BD',
  fr: 'fr-FR',
  ar: 'ar',
}

/**
 * Get the BCP 47 locale for the current i18n language (e.g. for Intl formatters).
 */
export function getLocaleForNumbers(lang: string): string {
  return LOCALE_MAP[lang] ?? 'en-US'
}

/**
 * Format a number with locale-appropriate grouping and digits (e.g. 1,000,000 in en vs ١٬٠٠٠٬٠٠٠ in ar).
 */
export function formatNumber(num: number, lang: string): string {
  const locale = getLocaleForNumbers(lang)
  return num.toLocaleString(locale)
}

/**
 * Format a number as USD with locale-appropriate digits and grouping (e.g. $110,174,972 in en).
 */
export function formatCurrency(num: number, lang: string): string {
  const locale = getLocaleForNumbers(lang)
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(num)
}
