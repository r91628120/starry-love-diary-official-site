import { isLocale, localeLabels, locales, useTranslation } from '../content/i18n'

export function LanguageSelector({ id }: { id: string }) {
  const { t, locale, setLocale } = useTranslation()
  return <div className="language-control">
    <label className="sr-only" htmlFor={id}>{t.nav.language}</label>
    <span aria-hidden="true">◎</span>
    <select id={id} value={locale} onChange={(event) => { if (isLocale(event.target.value)) setLocale(event.target.value) }}>
      {locales.map((value) => <option lang={value} key={value} value={value}>{localeLabels[value]}</option>)}
    </select>
  </div>
}
