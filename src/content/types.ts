export interface Translation {
  brand: string
  nav: { story: string; spaces: string; privacy: string; menu: string; label: string; skip: string; language: string }
  hero: { title: string; body: string; explore: string }
  comingSoon: string
  story: { title: string; paragraphs: string[]; closing: string }
  spaces: { title: string; items: { title: string; body: string; image?: string; imageAlt?: string }[] }
  clarity: { title: string; statement: string; situations: string[]; body: string; words: string[] }
  daily: { title: string; statement: string; body: string }
  cat: { title: string; body: string; alt: string }
  privacy: { title: string; body: string }
  final: { body: string }
  testFlight: { entry: string; entrySubtitle: string; title: string; intro: string; stepOneTitle: string; stepOneBody: string; stepOneButton: string; stepTwoTitle: string; stepTwoBody: string; stepTwoButton: string; note: string }
  legal: { privacy: string; terms: string; back: string; pending: string; privacyNotice: string; termsNotice: string; privacySections: string[]; termsSections: string[] }
}
