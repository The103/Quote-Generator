import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MovieQuotes from './MovieQuotes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MovieQuotes />
  </StrictMode>,
)
