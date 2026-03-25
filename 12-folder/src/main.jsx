import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)


// Install react router dom -> npm i react-router-dom
// Import {BrowserRouter} from react-router-dom
// Wrap the App component with BrowserRouter in main.jsx file
// make <Routes> collection of all <Route>
// inside <Routes> make <Route> for individual route it takes two props - path and element.