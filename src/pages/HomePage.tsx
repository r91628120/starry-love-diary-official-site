import { FeatureCard } from '../components/FeatureCard'
import { SignatureFeature } from '../components/SignatureFeature'
import { siteContent } from '../content/zh-TW'

export function HomePage() {
  const { hero, philosophy, features, signatures, scoreRules, howToUse, faqs } = siteContent
  return <>
    <section className="hero section" id="top">
      <div className="hero__copy">
        <p className="eyebrow">{siteContent.brand.en}</p>
        <h1>{hero.title}</h1>
        <h2>{hero.subtitle}</h2>
        <p>{hero.body}</p>
        <div className="hero__actions"><a className="button button--primary" href="#philosophy">{hero.primary}</a><a className="button button--secondary" href="#features">{hero.secondary}</a></div>
        <span className="coming-soon">✦ App {hero.comingSoon}</span>
        <p className="hero__whisper">喜歡一個人沒有錯，只是別在喜歡他的時候，把自己弄丟了。</p>
      </div>
      <HeroArtwork />
    </section>

    <section className="section philosophy" id="philosophy">
      <div className="philosophy__scenery" aria-hidden="true"><span className="philosophy__moon">☾</span><span className="philosophy__skyline" /><span className="philosophy__pair">● ●</span><span className="philosophy__cat">⌁</span></div>
      <div className="philosophy__copy"><p className="eyebrow">給喜歡著某個人的你</p><h2>{philosophy.title}</h2><p>{philosophy.body}</p><p>{philosophy.answer}</p><ul className="philosophy__highlights">{philosophy.highlights.map((item) => <li key={item}>{item}</li>)}</ul></div>
    </section>

    <section className="section" id="features"><p className="eyebrow">五個頁面</p><h2>每一天，都有一個可以回來的地方。</h2><div className="feature-grid">{features.map((feature) => <FeatureCard key={feature.title} {...feature} />)}</div></section>

    <section className="section signatures"><p className="eyebrow">兩個特別的收藏方式</p><h2>把想留下的心意，好好收起來。</h2>{signatures.map((feature, index) => <SignatureFeature key={feature.title} {...feature} alternate={index % 2 === 1} />)}</section>

    <section className="storybook-break section" aria-label="星星戀愛日記的故事">
      <div className="storybook-break__art" aria-hidden="true" />
      <div className="storybook-break__copy"><p className="eyebrow">Artistic Storybook Style</p><h2>在某個平凡的日子裡，也為自己留一點溫柔。</h2><p>你可以喜歡一個人，也可以期待、想念、猜測與不安。這本日記不替你回答愛情，只陪你把心動記下來，再慢慢把注意力帶回自己。</p><span>記錄 · 觀察 · 理解 · 回到自己</span></div>
    </section>

    <section className="section star-systems" id="star-systems"><div><p className="eyebrow">累積與收藏</p><h2>星心值是什麼？</h2><p>它只是使用 App、記錄自己與整理心情時，留下的累積足跡。不是愛情分數、不是對方愛你的程度，也不是關係成功率。</p><div className="score-table" role="table" aria-label="星心值規則">{scoreRules.map(([action, score]) => <div role="row" key={action}><span role="cell">{action}</span><strong role="cell">{score}</strong></div>)}</div></div><div className="star-bottle-copy"><h3>星星是怎麼來的？</h3><p><strong>心情星星：</strong>每天記錄心情時，建立當天的一顆心情星星。同一天改變心情，更新同一顆，不重複增加。</p><p><strong>清醒星星：</strong>完成清醒工具後，只有主動選擇「存成清醒星星」才建立。</p><p className="notice">星星數量不等於星心值分數；它們是兩個不同系統。</p></div></section>

    <section className="section how-to-use" id="how-to-use"><p className="eyebrow">使用說明</p><h2>從今天開始，慢慢留下自己的路。</h2><ol>{howToUse.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, '0')}</span>{step}</li>)}</ol></section>

    <section className="section faq" id="faq"><p className="eyebrow">常見問題</p><h2>想知道的事，都先放在這裡。</h2><div>{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></section>

    <section className="download-callout section"><div><p className="eyebrow">即將推出</p><h2>星星戀愛日記，即將與你見面。</h2><p>App Store · Coming soon / Google Play · Coming soon</p></div><img className="download-callout__cat" src="/starry-love-diary-official-site/assets/final-black-cat.webp" alt="" aria-hidden="true" /></section>
  </>
}

function HeroArtwork() {
  return <div className="hero-art" aria-hidden="true"><span className="hero-art__moon">☾</span><span className="hero-art__window" /><div className="hero-art__person hero-art__person--boy"><i /><b /></div><div className="hero-art__person hero-art__person--girl"><i /><b /></div><div className="hero-art__phone"><span className="hero-art__notebook" /><span className="hero-art__star">✦</span></div><div className="hero-art__cat"><i /><i /><b>● ●</b><em>⌣</em></div><span className="hero-art__sparkles">✦ · ✧ · ✦</span></div>
}
