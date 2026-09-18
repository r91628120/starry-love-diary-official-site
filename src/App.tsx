import { useEffect, useState } from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { HomePage } from './pages/HomePage'
import { LegalPage } from './pages/LegalPage'
import { initialLocale, LocaleContext, storageKey, translations, type Locale } from './content/i18n'

export function App({ page }: { page: 'home' | 'privacy' | 'terms' }) {
  const [locale, updateLocale] = useState<Locale>(initialLocale)
  const t = translations[locale]
  function setLocale(next: Locale) {
    updateLocale(next)
    try { localStorage.setItem(storageKey, next) } catch { /* Optional preference only. */ }
    const url = new URL(window.location.href)
    url.searchParams.set('lang', next)
    window.history.replaceState(null, '', url)
  }
  useEffect(() => {
    document.documentElement.lang = locale
    const title = page === 'home' ? `${t.brand} | ${t.hero.title.replaceAll('\n', ' ')}` : `${t.legal[page]} | ${t.brand}`
    const description = page === 'home' ? t.hero.body.replaceAll('\n', ' ') : t.legal[page === 'privacy' ? 'privacyNotice' : 'termsNotice']
    document.title = title
    for (const [selector, value] of [
      ['meta[name="description"]', description], ['meta[property="og:title"]', title],
      ['meta[property="og:description"]', description], ['meta[name="twitter:title"]', title],
      ['meta[name="twitter:description"]', description], ['meta[property="og:locale"]', locale === 'zh-TW' ? 'zh_TW' : ({ en: 'en_US', ja: 'ja_JP', ko: 'ko_KR', es: 'es_ES', fr: 'fr_FR' }[locale])],
    ]) document.querySelector(selector)?.setAttribute('content', value)
  }, [locale, page, t])
  return <LocaleContext.Provider value={{ locale, setLocale }}>
    <a className="skip-link" href="#main-content">{t.nav.skip}</a>
    <Header home={page === 'home'} />
    <main id="main-content" tabIndex={-1}>{page === 'home' ? <HomePage /> : <LegalPage kind={page} />}</main>
    <Footer />
  </LocaleContext.Provider>
}
