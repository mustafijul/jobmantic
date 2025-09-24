import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "@fontsource-variable/inter"; 
import './index.css'
import App from './App.jsx'
import Navbar from './Shared/Navbar.jsx'
import Home from './Home/Home.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='ms-44'>
      <Navbar></Navbar>
      <Home></Home>
    </div>
  
  </StrictMode>,
)
