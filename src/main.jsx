import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/components/App.jsx'
import AppMobile from '@/components/mobile components/AppMobile'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppMobile />
    <App />
  </React.StrictMode>,
)
