export function FeatureCard({ icon, title, body, items }: { icon: string; title: string; body: string; items: readonly string[] }) {
  return <article className="feature-card"><span className="feature-card__icon" aria-hidden="true">{icon}</span><h3>{title}</h3><p>{body}</p><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul><span className="feature-card__arrow" aria-hidden="true">↗</span></article>
}
