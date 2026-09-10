import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { HomePage } from './pages/HomePage'
import { LegalPage } from './pages/LegalPage'

export function App({ page }: { page: 'home' | 'privacy' | 'terms' }) {
  return <><Header /><main>{page === 'home' ? <HomePage /> : <LegalPage kind={page} />}</main><Footer /></>
}
