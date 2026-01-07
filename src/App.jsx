import {Routes, Route} from 'react-router-dom';
import {NavBar, Footer} from "./components/common"
import {Homepage, ProjectsPage, ContactPage} from "./pages/"

function App() {
    return (
    <>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/portfolio" element={<ProjectsPage/>} />
          <Route path="/contact" element={<ContactPage/>} />
        </Routes>
        <Footer />
    </>
  )
}


export default App;
