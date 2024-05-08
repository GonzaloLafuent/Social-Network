import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import { AuthContextProvider } from '../context/authContext.jsx' 
import App from './App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <App></App>
    </AuthContextProvider>
  </React.StrictMode>,
)
