import { pageLink, useTranslation } from '../content/i18n'

const appleTestFlightUrl = 'https://apps.apple.com/tw/app/testflight/id899247664'
const starryLoveDiaryTestFlightUrl = 'https://testflight.apple.com/join/7bdTDFY4'

export function TestFlightPage() {
  const { t, locale } = useTranslation()
  return <section className="testflight-page section"><a className="text-link" href={pageLink('', locale)}>← {t.legal.back}</a><p className="eyebrow">STARRY LOVE DIARY</p><h1>{t.testFlight.title}</h1><p className="testflight-intro">{t.testFlight.intro}</p><ol className="testflight-steps"><li><h2>{t.testFlight.stepOneTitle}</h2><p>{t.testFlight.stepOneBody}</p><a className="testflight-action" href={appleTestFlightUrl} target="_blank" rel="noreferrer">{t.testFlight.stepOneButton}</a></li><li><h2>{t.testFlight.stepTwoTitle}</h2><p>{t.testFlight.stepTwoBody}</p><a className="testflight-action" href={starryLoveDiaryTestFlightUrl} target="_blank" rel="noreferrer">{t.testFlight.stepTwoButton}</a></li></ol><p className="testflight-note">{t.testFlight.note}</p></section>
}
