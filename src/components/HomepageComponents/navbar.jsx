import navIcon from "../../assets/img/globalImg/coffee-beans.png";
function NavBar({setPage}) {
  return ( 
        <nav id="navContainer" className="nav nav-pills flex-column flex-sm-row">
            <img src={navIcon} alt="" className ="navIcon"/>
            <button 
                className="navLinks text-sm-center nav-link active" onClick={() => setPage('home')}>
                Home
            </button>
            <button 
                className="navLinks text-sm-center nav-link" onClick={() => setPage('portfolio')}>
                My Projects
            </button>
            <button 
                className="navLinks text-sm-center nav-link" onClick={() => setPage('contact')}>
                Contact
            </button>
        </nav>
    )
}
export default NavBar;