import { pageLink, useTranslation } from '../content/i18n'

// Add verified official URLs here when the stores launch; null keeps a non-link status.
const stores: { name: string; icon: string; url: string | null }[] = [
  { name: 'App Store', icon: 'apple', url: null },
  { name: 'Google Play', icon: 'play', url: null },
]
export function StoreButtons() {
  const { t, locale } = useTranslation()
  const buttons = stores.map((store) => {
    const content = <><svg viewBox="0 0 24 24" aria-hidden="true" width="23" height="23">{store.icon === 'play' ? <path d="M5 3 21 12 5 21Z" fill="none" stroke="currentColor" strokeWidth="1.5" /> : <path fill="currentColor" d="M16.8 2c.1 1.3-.4 2.5-1.1 3.3-.8.9-2 1.4-3.1 1.3-.2-1.2.4-2.4 1.1-3.1.8-.9 2.1-1.5 3.1-1.5ZM20 17c-.5 1.2-.8 1.8-1.5 2.9-.9 1.3-2.1 2.9-3.6 2.9-1.3 0-1.7-.8-3.4-.8s-2.1.8-3.4.8c-1.5 0-2.6-1.5-3.5-2.8C2.1 16.4 1.7 12 3.2 9.7c1.1-1.6 2.8-2.5 4.4-2.5 1.5 0 2.5.8 3.7.8s1.9-.8 3.7-.8c1.4 0 3 .8 4.1 2.1-3.6 2-3 6.6.9 7.7Z" />}</svg><span><strong>{store.name}</strong>{!store.url && <small>{t.comingSoon}</small>}</span></>
    return store.url ? <a className="store-button" href={store.url} key={store.name}>{content}</a> : <div className="store-button store-button--pending" key={store.name}>{content}</div>
  })
  return <div className="store-buttons"><div className="store-button-stack">{buttons[0]}<a className="store-button store-button--testflight" href={pageLink('ios-testflight.html', locale)}><span><strong>{t.testFlight.entry}</strong><small>{t.testFlight.entrySubtitle}</small></span></a></div>{buttons[1]}</div>
}
