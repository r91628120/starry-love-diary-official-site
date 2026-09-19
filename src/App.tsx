import { useEffect, useState } from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { HomePage } from './pages/HomePage'
import { LegalPage } from './pages/LegalPage'
import { TestFlightPage } from './pages/TestFlightPage'
import { initialLocale, LocaleContext, storageKey, translations, type Locale } from './content/i18n'

const zhTwHomeSeo = {
  title: '星星戀愛日記｜戀愛日記、暈船整理與戀愛腦清醒 App',
  description: '星星戀愛日記是一款陪伴單戀、暗戀、曖昧與戀愛中情緒的戀愛日記 App。記錄心情、戀愛足跡與重要回憶，透過星星瓶與清醒工具整理暈船、等待訊息與戀愛腦帶來的內耗。',
}

export function App({ page }: { page: 'home' | 'privacy' | 'terms' | 'ios-testflight' }) {
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
    const localizedHomeSeo = { title: `${t.brand} | ${t.hero.title.replaceAll('\n', ' ')}`, description: t.hero.body.replaceAll('\n', ' ') }
    const homeSeo = locale === 'zh-TW' ? zhTwHomeSeo : localizedHomeSeo
    const title = page === 'home' ? homeSeo.title : page === 'ios-testflight' ? `${t.testFlight.title} | ${t.brand}` : `${t.legal[page]} | ${t.brand}`
    const description = page === 'home' ? homeSeo.description : page === 'ios-testflight' ? t.testFlight.intro : t.legal[page === 'privacy' ? 'privacyNotice' : 'termsNotice']
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
    <main id="main-content" tabIndex={-1}>{page === 'home' ? <HomePage /> : page === 'ios-testflight' ? <TestFlightPage /> : <LegalPage kind={page} />}</main>
    <Footer />
  </LocaleContext.Provider>
}
