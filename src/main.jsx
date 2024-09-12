import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import InputProvider from './context/InputContext.jsx'

createRoot(document.getElementById('root')).render(
  <InputProvider>
    <App />
  </InputProvider>,
)
