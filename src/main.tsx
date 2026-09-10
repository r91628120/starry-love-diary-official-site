import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import './styles/site.css'
import './styles/brand-art.css'
import './styles/final-cat-card.css'

createRoot(document.getElementById('root')!).render(<StrictMode><App page={document.body.dataset.page === 'privacy' ? 'privacy' : document.body.dataset.page === 'terms' ? 'terms' : 'home'} /></StrictMode>)
