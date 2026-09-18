import { pageLink, useTranslation } from '../content/i18n'

export function LegalPage({ kind }: { kind: 'privacy' | 'terms' }) {
  const { t, locale } = useTranslation()
  const sections = kind === 'privacy' ? t.legal.privacySections : t.legal.termsSections
  return <section className="legal-page section"><a className="text-link" href={pageLink('', locale)}>← {t.legal.back}</a><p className="eyebrow">STARRY LOVE DIARY</p><h1>{t.legal[kind]}</h1><p className="legal-notice">{t.legal[kind === 'privacy' ? 'privacyNotice' : 'termsNotice']}</p><div className="legal-sections">{sections.map((section) => <article key={section}><h2>{section}</h2><p>{t.legal.pending}</p></article>)}</div></section>
}
