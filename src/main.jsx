import './styles/index.css' 
import { createRoot } from 'react-dom/client'
import './styles/token.css'
import './styles/global.css'
import App from './App.jsx'
import React from 'react'
import { StrictMode } from 'react'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)

