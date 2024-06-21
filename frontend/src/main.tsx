import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Provider from './providers'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider />
  </React.StrictMode>,
)
