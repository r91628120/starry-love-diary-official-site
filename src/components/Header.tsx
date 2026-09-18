import { useState } from 'react'
import { pageLink, useTranslation } from '../content/i18n'
import { LanguageSelector } from './LanguageSelector'

export function Header({ home }: { home: boolean }) {
  const [open, setOpen] = useState(false)
  const { t, locale } = useTranslation()
  const homeLink = pageLink('', locale)
  return <header className={`site-header ${home ? 'site-header--home' : ''}`}>
    <a className="brand" href={homeLink}><span className="brand-star" aria-hidden="true">✧</span><span>{t.brand}<small>STARRY LOVE DIARY</small></span></a>
    <nav id="site-navigation" className={`site-nav ${open ? 'is-open' : ''}`} aria-label={t.nav.label} onKeyDown={(e) => { if (e.key === 'Escape') { setOpen(false); document.getElementById('menu-toggle')?.focus() } }}>
      {(['story', 'spaces', 'privacy'] as const).map((id) => <a key={id} href={`${home ? '' : homeLink}#${id}`} onClick={() => setOpen(false)}>{t.nav[id]}</a>)}
    </nav>
    <div className="header-controls"><LanguageSelector id="header-language" /><button id="menu-toggle" className="menu-button" type="button" aria-label={t.nav.menu} aria-expanded={open} aria-controls="site-navigation" onClick={() => setOpen(!open)}><span aria-hidden="true">{open ? '×' : '☰'}</span></button></div>
  </header>
}
