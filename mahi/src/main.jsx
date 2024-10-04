import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './Components/Header.jsx'
import Hero from './Pages/Hero.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Hero/>
    <App />
  </StrictMode>,
)
