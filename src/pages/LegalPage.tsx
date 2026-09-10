import { legalPageContent, siteContent } from '../content/zh-TW'

const base = import.meta.env.BASE_URL

export function LegalPage({ kind }: { kind: 'privacy' | 'terms' }) {
  const content = legalPageContent[kind]
  return <section className="legal-page section"><a className="back-link" href={base}>← 返回首頁</a><p className="eyebrow">{siteContent.brand.en}</p><h1>{content.title}</h1><p className="legal-page__notice">{content.notice}</p><div className="legal-page__sections">{content.sections.map((section) => <article key={section}><h2>{section}</h2><p>此項正式內容將於 App 發布前提供。</p></article>)}</div></section>
}
