import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import '@fontsource-variable/inter'
import '@fontsource-variable/manrope'
import './index.css'

const container = document.getElementById('root')!
const app = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

// Production pages are prerendered (scripts/prerender.mjs), so hydrate the existing markup.
// In development the root is empty and React renders from scratch.
if (container.firstElementChild) {
  ReactDOM.hydrateRoot(container, app)
} else {
  ReactDOM.createRoot(container).render(app)
}
