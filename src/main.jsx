import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'  // ← добавляем
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>   {/* ← оборачиваем App */}
      <App />
    </BrowserRouter>
  </StrictMode>,
)