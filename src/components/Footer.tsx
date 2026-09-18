import { pageLink, useTranslation } from '../content/i18n'
import { LanguageSelector } from './LanguageSelector'

export function Footer() {
  const { t, locale } = useTranslation()
  return <footer className="site-footer"><a className="footer-brand" href={pageLink('', locale)}>✧ <span>STARRY LOVE DIARY</span></a><nav aria-label={t.nav.label}>
    <a href={pageLink('privacy.html', locale)}>{t.legal.privacy}</a><a href={pageLink('terms.html', locale)}>{t.legal.terms}</a>
  </nav><LanguageSelector id="footer-language" /><small>© 2026 Starry Love Diary</small></footer>
}
