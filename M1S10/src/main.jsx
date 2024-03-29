//importando React , ReactDOM e App
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
//importando css global 
import './index.css'
//importando bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

//renderizando app
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
