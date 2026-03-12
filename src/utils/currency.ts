/**
 * Live currency conversion and locale-aware money formatting.
 * One fetch gets USD→all target currencies; each language maps to one currency.
 */
import { getLocaleForNumbers } from './formatNumber'

const RATE_URL = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.min.json'
const CACHE_MS = 5 * 60 * 1000 // 5 minutes

/** Currency code (ISO 4217) per language. Single source of truth for the whole app. */
export const LANG_TO_CURRENCY: Record<string, string> = {
  en: 'USD',
  es: 'EUR',
  fr: 'EUR',
  ar: 'AED',
  ur: 'PKR',
  hi: 'INR',
  bn: 'BDT',
  pa: 'INR',
}

/** All supported currency codes (for type safety). */
export type CurrencyCode = keyof typeof LANG_TO_CURRENCY extends string ? string : never

/** Get the display currency for a language. */
export function getCurrencyForLang(lang: string): string {
  return LANG_TO_CURRENCY[lang] ?? 'USD'
}

/** Cached rates: USD → target (e.g. { eur: 0.92, pkr: 279 }). API uses lowercase keys. */
let cachedRates: Record<string, number> | null = null
let cachedAt = 0

/** Fetch USD→all currencies once; used for every language. */
export async function fetchUsdRates(): Promise<Record<string, number>> {
  if (cachedRates !== null && Date.now() - cachedAt < CACHE_MS) {
    return cachedRates
  }
  const res = await fetch(RATE_URL)
  if (!res.ok) throw new Error('Exchange rate unavailable')
  const data = await res.json()
  const usd = data?.usd
  if (!usd || typeof usd !== 'object') throw new Error('Invalid rate data')
  const rates: Record<string, number> = {}
  for (const [key, value] of Object.entries(usd)) {
    if (typeof value === 'number') rates[key.toLowerCase()] = value
  }
  cachedRates = rates
  cachedAt = Date.now()
  return rates
}

/** Get rate for a currency (e.g. 'EUR' → rate from cached usd.eur). API keys are lowercase. */
function getRate(rates: Record<string, number> | null, currency: string): number | null {
  if (!rates) return null
  const key = currency.toLowerCase()
  const r = rates[key]
  return typeof r === 'number' ? r : null
}

/**
 * Format a USD amount for display in the given language's currency.
 * Uses LANG_TO_CURRENCY and live rates; falls back to USD if rate missing.
 */
export function formatMoney(
  amountUsd: number,
  lang: string,
  rates: Record<string, number> | null
): string {
  const locale = getLocaleForNumbers(lang)
  const currency = getCurrencyForLang(lang)

  if (currency === 'USD') {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
      minimumFractionDigits: 0,
    }).format(amountUsd)
  }

  const rate = getRate(rates, currency)
  if (rate === null) {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
      minimumFractionDigits: 0,
    }).format(amountUsd)
  }

  const amount = amountUsd * rate
  const useDecimals = currency === 'PKR' || currency === 'BDT' || currency === 'INR' || currency === 'AED'
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: useDecimals ? 2 : 0,
    maximumFractionDigits: useDecimals ? 2 : 0,
  }).format(amount)
}

/**
 * Format large amount (e.g. 100M+) with optional suffix.
 */
export function formatLargeMoney(
  amountUsd: number,
  lang: string,
  rates: Record<string, number> | null,
  suffix = ''
): string {
  const locale = getLocaleForNumbers(lang)
  const currency = getCurrencyForLang(lang)

  if (currency === 'USD') {
    const formatted = new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
      minimumFractionDigits: 0,
    }).format(amountUsd)
    return `${formatted}${suffix}`
  }

  const rate = getRate(rates, currency)
  if (rate === null) {
    const formatted = new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
      minimumFractionDigits: 0,
    }).format(amountUsd)
    return `${formatted}${suffix}`
  }

  const amount = amountUsd * rate
  const formatted = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
  return `${formatted}${suffix}`
}
