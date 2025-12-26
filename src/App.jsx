import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import './assets/css/index.css'
import NavBar  from '../src/components/HomepageComponents/navbar.jsx'
import Homepage from '../src/assets/pages/Homepage.jsx'
import AboutPage from '../src/assets/pages/AboutPage.jsx'
import PortfolioPage from '../src/assets/pages/PortfolioPage.jsx'
import ContactPage from '../src/assets/pages/ContactPage.jsx'
function App() {
    const [activePage, setActivePage] = useState(window.location.pathname || "/");
    return (
    <>
        <NavBar activePage = {activePage} setActivePage = {setActivePage}/>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/portfolio" element={<PortfolioPage/>} />
          <Route path="/contact" element={<ContactPage/>} />
        </Routes>
    </>
  )
}


export default App
