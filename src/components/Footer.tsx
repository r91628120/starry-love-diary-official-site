import { siteContent } from '../content/zh-TW'

const base = import.meta.env.BASE_URL

export function Footer() {
  return <footer className="site-footer"><div className="footer-brand"><strong><span aria-hidden="true">✦</span>{siteContent.brand.zh}</strong><span>{siteContent.brand.en}</span><p>記錄心動，也照顧自己的心。</p></div><nav className="footer-nav footer-nav--product" aria-label="頁尾產品導覽"><a href={`${base}#top`}>首頁</a><a href={`${base}#features`}>功能介紹</a><a href={`${base}#how-to-use`}>使用說明</a><a href={`${base}#star-systems`}>星心值與星星瓶</a><a href={`${base}#faq`}>常見問題</a></nav><nav className="footer-nav footer-nav--legal" aria-label="頁尾法律導覽"><a href={`${base}privacy.html`}>隱私政策</a><a href={`${base}terms.html`}>使用條款</a></nav><span className="footer-cat" aria-hidden="true">⌁</span><small>© 2026 Starry Love Diary</small></footer>
}
