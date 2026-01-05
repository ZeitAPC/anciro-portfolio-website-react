import {Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import {NavBar, Footer} from "./components/common"
import {Homepage, ProjectsPage, ContactPage} from "./pages/"

function App() {
    const [activePage, setActivePage] = useState(window.location.pathname || "/");
    return (
    <>
        <NavBar activePage = {activePage} setActivePage = {setActivePage}/>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/portfolio" element={<ProjectsPage/>} />
          <Route path="/contact" element={<ContactPage/>} />
        </Routes>
        <Footer />
    </>
  )
}


export default App
