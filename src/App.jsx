import { useState } from 'react'
import './assets/css/index.css'
import NavBar  from '../src/components/HomepageComponents/navbar.jsx'
import Homepage from '../src/assets/pages/Homepage.jsx'
import PortfolioPage from '../src/assets/pages/PortfolioPage.jsx'
import ContactPage from '../src/assets/pages/ContactPage.jsx'
function App() {
  const [page, setPage] = useState('home');

  let content;
  if (page ==="home"){
    content = <Homepage />;
  } else if (page === "portfolio"){
    content = <PortfolioPage />
  } else if (page === "contact"){
    content = <ContactPage />
  }


  return (
    <>
      <NavBar setPage = {setPage}/>
      <div style={{ padding: '2rem'}}>
        {content}
      </div>
    </>
  )
}

export default App
