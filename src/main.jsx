import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MyThemeProvider } from './theme/ThemeProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyThemeProvider>
      <App />
    </MyThemeProvider>
  </React.StrictMode>,
)
