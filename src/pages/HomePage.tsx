import { pageLink, useTranslation } from '../content/i18n'
import { StoreButtons } from '../components/StoreButtons'

const base = import.meta.env.BASE_URL
const spaceSymbols = ['☀', '☾', '⌁', '✧', '♡']

export function HomePage() {
  const { t, locale } = useTranslation()
  return <>
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-atmosphere" style={{ backgroundImage: `url(${base}assets/starry-night-hero.webp)` }} aria-hidden="true" />
      <img className="hero-image" src={`${base}assets/starry-night-hero.webp`} width="941" height="1672" alt="" fetchPriority="high" />
      <div className="hero-shade" aria-hidden="true" />
      <div className="hero-copy">
        <p className="eyebrow">STARRY LOVE DIARY <span aria-hidden="true">✦</span></p>
        <h1 id="hero-title">{t.hero.title}</h1>
        <p className="hero-intro">{t.hero.body}</p>
        <StoreButtons />
      </div>
      <a className="hero-scroll" href="#story">{t.hero.explore}<span aria-hidden="true">↓</span></a>
    </section>
    <section className="section letter" id="story" aria-labelledby="story-title">
      <span className="section-star" aria-hidden="true">✧</span>
      <p className="section-number" aria-hidden="true">01 / 07</p>
      <h2 id="story-title">{t.story.title}</h2>
      <div className="letter-body">{t.story.paragraphs.map((p) => <p key={p}>{p}</p>)}</div>
      <p className="letter-closing">{t.story.closing}</p>
      <span className="fine-line" aria-hidden="true" />
    </section>
    <section className="spaces-wrap" id="spaces" aria-labelledby="spaces-title"><div className="section">
      <p className="section-number" aria-hidden="true">02 / 07</p><h2 id="spaces-title">{t.spaces.title}</h2>
      <div className="space-grid">{t.spaces.items.map((space, index) => <article className={`space-card space-card--${index}`} key={index}>
        <div className="space-card-top"><span className="space-symbol" aria-hidden="true">{spaceSymbols[index]}</span><span className="space-number" aria-hidden="true">0{index + 1}</span></div>
        {space.image && <img className="space-screenshot" loading="lazy" src={`${base}${space.image}`} alt={space.imageAlt ?? ''} />}
        <h3>{space.title}</h3><p>{space.body}</p>
      </article>)}</div>
    </div></section>
    <section className="clarity section" id="clarity" aria-labelledby="clarity-title">
      <div className="clarity-copy"><p className="section-number" aria-hidden="true">03 / 07</p><h2 id="clarity-title">{t.clarity.title}</h2><p className="statement">{t.clarity.statement}</p><p>{t.clarity.body}</p><div className="clarity-words">{t.clarity.words.map((word) => <span key={word}>{word}</span>)}</div></div>
      <div className="thoughts"><span className="orbit-star" aria-hidden="true">✧</span><ul>{t.clarity.situations.map((s) => <li key={s}>{s}</li>)}</ul></div>
    </section>
    <section className="daily" aria-labelledby="daily-title"><div className="section daily-inner">
      <div className="star-orbit" aria-hidden="true"><span>✦</span><i /><b>✧</b></div>
      <div><p className="section-number" aria-hidden="true">04 / 07</p><h2 id="daily-title">{t.daily.title}</h2><p className="statement">{t.daily.statement}</p><p>{t.daily.body}</p></div>
    </div></section>
    <section className="section companion" aria-labelledby="cat-title">
      <div className="cat-portrait"><img src={`${base}assets/final-black-cat.png`} alt={t.cat.alt} loading="lazy" width="1261" height="1247" /></div>
      <div><p className="section-number" aria-hidden="true">05 / 07</p><h2 id="cat-title">{t.cat.title}</h2><p>{t.cat.body}</p></div>
    </section>
    <section className="privacy section" id="privacy" aria-labelledby="privacy-title">
      <div className="privacy-symbol" aria-hidden="true">♡</div><p className="section-number" aria-hidden="true">06 / 07</p><h2 id="privacy-title">{t.privacy.title}</h2><p>{t.privacy.body}</p><a className="text-link" href={pageLink('privacy.html', locale)}>{t.legal.privacy}<span aria-hidden="true"> ↗</span></a>
    </section>
    <section className="final-cta" aria-labelledby="final-title"><div className="section">
      <p className="section-number" aria-hidden="true">07 / 07</p><span className="section-star" aria-hidden="true">✦</span><h2 id="final-title">{t.hero.title}</h2><p>{t.final.body}</p><StoreButtons /><p className="final-brand">{t.brand}<small>STARRY LOVE DIARY</small></p>
    </div></section>
  </>
}
