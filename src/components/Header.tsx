import { useState } from 'react'
import { siteContent } from '../content/zh-TW'

const base = import.meta.env.BASE_URL

export function Header() {
  const [open, setOpen] = useState(false)
  const links = siteContent.nav
  return <header className="site-header"><a className="brand" href={base} aria-label={`${siteContent.brand.zh} ${siteContent.brand.en}`}><span aria-hidden="true">✦</span><span>{siteContent.brand.zh}<small>{siteContent.brand.en}</small></span></a>
    <button className="menu-button" type="button" aria-expanded={open} aria-controls="site-navigation" onClick={() => setOpen((value) => !value)}><span className="sr-only">開啟選單</span><span aria-hidden="true">☰</span></button>
    <nav id="site-navigation" className={open ? 'site-nav is-open' : 'site-nav'} aria-label="主要導覽">{links.map((link) => <a key={link.href} href={`${base}${link.href}`} onClick={() => setOpen(false)}>{link.label}</a>)}<a href={`${base}privacy.html`}>隱私政策</a><a href={`${base}terms.html`}>使用條款</a></nav>
  </header>
}
