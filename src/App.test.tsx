import { cleanup, fireEvent, render, screen, within } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { App } from './App'
import { locales, storageKey, translations } from './content/i18n'

beforeEach(() => {
  localStorage.clear()
  window.history.replaceState(null, '', '/')
  document.head.innerHTML = '<meta name="description"><meta property="og:title"><meta property="og:description"><meta property="og:locale"><meta name="twitter:title"><meta name="twitter:description">'
})
afterEach(() => { cleanup(); vi.restoreAllMocks() })

describe('Multilingual official website', () => {
  it.each(locales)('renders eight complete sections and honest store states in %s', (locale) => {
    window.history.replaceState(null, '', '/?lang=' + locale)
    render(<App page="home" />)
    const t = translations[locale]
    expect(document.documentElement.lang).toBe(locale)
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
    expect(document.querySelector('h1')?.textContent).toBe(t.hero.title)
    expect(document.querySelectorAll('main > section')).toHaveLength(8)
    for (const title of [t.story.title, t.spaces.title, t.clarity.title, t.daily.title, t.cat.title, t.privacy.title]) {
      expect(screen.getByRole('heading', { name: title.replaceAll('\n', ' ') })).toBeInTheDocument()
    }
    for (const item of t.spaces.items) expect(screen.getByRole('heading', { name: item.title, level: 3 })).toBeInTheDocument()
    const spaceScreenshots = [...document.querySelectorAll<HTMLImageElement>('.space-screenshot')]
    expect(spaceScreenshots).toHaveLength(5)
    expect(spaceScreenshots.map((image) => image.getAttribute('src'))).toEqual([
      '/starry-love-diary-official-site/assets/spaces/today.webp',
      '/starry-love-diary-official-site/assets/spaces/clarity.webp',
      '/starry-love-diary-official-site/assets/spaces/footprints.webp',
      '/starry-love-diary-official-site/assets/spaces/star-bottle.webp',
      '/starry-love-diary-official-site/assets/spaces/our.webp',
    ])
    expect(spaceScreenshots.map((image) => image.alt)).toEqual(t.spaces.items.map((item) => item.imageAlt))
    expect(screen.getAllByText(t.comingSoon)).toHaveLength(4)
    expect(screen.getAllByText('App Store')).toHaveLength(2)
    expect(screen.getAllByText('Google Play')).toHaveLength(2)
    expect(screen.queryByRole('link', { name: /App Store|Google Play/ })).not.toBeInTheDocument()
    expect(document.querySelector('.hero-image')).toHaveAttribute('fetchpriority', 'high')
    expect(document.querySelector('.hero-image')).toHaveAttribute('alt', '')
    expect(document.querySelector('.hero-image')).not.toHaveAttribute('loading', 'lazy')
    expect(document.body.innerHTML).not.toMatch(/testflight|qa-12|beta tester/i)
    const expectedSeo = locale === 'zh-TW'
      ? { title: '星星戀愛日記｜戀愛日記、暈船整理與戀愛腦清醒 App', description: '星星戀愛日記是一款陪伴單戀、暗戀、曖昧與戀愛中情緒的戀愛日記 App。記錄心情、戀愛足跡與重要回憶，透過星星瓶與清醒工具整理暈船、等待訊息與戀愛腦帶來的內耗。' }
      : { title: `${t.brand} | ${t.hero.title.replaceAll('\n', ' ')}`, description: t.hero.body.replaceAll('\n', ' ') }
    expect(document.querySelector('meta[name="description"]')).toHaveAttribute('content', expectedSeo.description)
    expect(document.title).toBe(expectedSeo.title)
  })

  it('switches all locales through the header and persists a choice across remounts', () => {
    const view = render(<App page="home" />)
    for (const locale of locales) {
      fireEvent.change(document.getElementById('header-language')!, { target: { value: locale } })
      expect(document.querySelector('h1')?.textContent).toBe(translations[locale].hero.title)
      expect(document.getElementById('footer-language')).toHaveValue(locale)
      expect(localStorage.getItem(storageKey)).toBe(locale)
      expect(new URLSearchParams(window.location.search).get('lang')).toBe(locale)
    }
    view.unmount()
    window.history.replaceState(null, '', '/')
    render(<App page="home" />)
    expect(document.querySelector('h1')?.textContent).toBe(translations.fr.hero.title)
  })

  it('switches through the footer and carries language into legal links', () => {
    render(<App page="home" />)
    fireEvent.change(document.getElementById('footer-language')!, { target: { value: 'es' } })
    expect(document.getElementById('header-language')).toHaveValue('es')
    expect(screen.getAllByRole('link', { name: translations.es.legal.privacy })[0]).toHaveAttribute('href', expect.stringContaining('privacy.html?lang=es'))
  })

  it('prefers explicit locale links over a saved preference', () => {
    localStorage.setItem(storageKey, 'fr')
    window.history.replaceState(null, '', '/?lang=ja')
    render(<App page="home" />)
    expect(document.documentElement.lang).toBe('ja')
  })

  it('uses the source locale for invalid preferences', () => {
    localStorage.setItem(storageKey, 'invalid')
    window.history.replaceState(null, '', '/?lang=invalid')
    render(<App page="home" />)
    expect(document.documentElement.lang).toBe('zh-TW')
  })

  it('keeps language switching functional when storage is blocked', () => {
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => { throw new Error('blocked') })
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => { throw new Error('blocked') })
    render(<App page="home" />)
    fireEvent.change(document.getElementById('header-language')!, { target: { value: 'ko' } })
    expect(document.documentElement.lang).toBe('ko')
  })

  it('opens, closes, and dismisses mobile navigation with Escape', () => {
    render(<App page="home" />)
    const toggle = screen.getByRole('button', { name: '開啟選單' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const nav = document.getElementById('site-navigation')!
    fireEvent.keyDown(nav, { key: 'Escape' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(toggle).toHaveFocus()
    fireEvent.click(toggle)
    expect(within(nav).getByRole('link', { name: '五個空間' })).toHaveAttribute('href', '#spaces')
    expect(screen.getByRole('link', { name: '跳至主要內容' })).toHaveAttribute('href', '#main-content')
  })

  it.each(locales)('preserves pending legal content in %s without inventing policies', (locale) => {
    window.history.replaceState(null, '', '/?lang=' + locale)
    const privacy = render(<App page="privacy" />)
    expect(screen.getByRole('heading', { level: 1, name: translations[locale].legal.privacy })).toBeInTheDocument()
    expect(screen.getByText(translations[locale].legal.privacyNotice)).toBeInTheDocument()
    expect(document.querySelectorAll('.legal-sections article')).toHaveLength(6)
    privacy.unmount()
    render(<App page="terms" />)
    expect(screen.getByRole('heading', { level: 1, name: translations[locale].legal.terms })).toBeInTheDocument()
    expect(screen.getByText(translations[locale].legal.termsNotice)).toBeInTheDocument()
    expect(document.querySelectorAll('.legal-sections article')).toHaveLength(7)
  })
})
