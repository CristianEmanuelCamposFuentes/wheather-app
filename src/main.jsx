import React from 'react'
import ReactDOM from 'react-dom/client'
import { WeatherApp } from './WeatherApp'
import './styles/weatherStyles.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <WeatherApp />
    <Footer />
  </React.StrictMode>,
)
