import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "@fontsource-variable/inter"; 
import './index.css'
import App from './App.jsx'
import Navbar from './Shared/Navbar.jsx'
import Home from './Home/Home.jsx';
import Footer from './Shared/Footer.jsx';
import Stats from './Stats/Stats.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='ms-44'>
      <Navbar></Navbar>
      <Home></Home>
      <Stats></Stats>
      <Footer></Footer>
    </div>
  
  </StrictMode>,
)
