import { createContext, useContext } from 'react'
import zh from './locales/zh-TW'
import en from './locales/en'
import ja from './locales/ja'
import ko from './locales/ko'
import es from './locales/es'
import fr from './locales/fr'
import type { Translation } from './types'

export const locales = ['zh-TW', 'en', 'ja', 'ko', 'es', 'fr'] as const
export type Locale = typeof locales[number]
export const translations: Record<Locale, Translation> = { 'zh-TW': zh, en, ja, ko, es, fr }
export const localeLabels: Record<Locale, string> = { 'zh-TW': '繁中', en: 'English', ja: '日本語', ko: '한국어', es: 'Español', fr: 'Français' }
export const storageKey = 'starry-website-language'
export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && locales.includes(value as Locale)
}
export function initialLocale(): Locale {
  const query = new URLSearchParams(window.location.search).get('lang')
  if (isLocale(query)) return query
  try {
    const saved = localStorage.getItem(storageKey)
    if (isLocale(saved)) return saved
  } catch { /* The site remains usable when storage is unavailable. */ }
  return 'zh-TW'
}
export const LocaleContext = createContext<{ locale: Locale; setLocale: (locale: Locale) => void }>({ locale: 'zh-TW', setLocale: () => {} })
export function useTranslation() {
  const context = useContext(LocaleContext)
  return { ...context, t: translations[context.locale] }
}
export function pageLink(page: string, locale: Locale) {
  return `${import.meta.env.BASE_URL}${page}?lang=${locale}`
}
