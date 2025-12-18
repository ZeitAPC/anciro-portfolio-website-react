import { Link } from "react-router-dom";
import navIcon from "../../assets/img/globalImg/coffee-beans.png";
function NavBar({activePage, setActivePage}) {
    const baseClass = "navLinks text-sm-center nav-link ";

    let homeClass = baseClass;
    let aboutClass = baseClass;
    let portfolioClass = baseClass;
    let contactClass = baseClass;

    if (activePage === '/') {
    homeClass += " active";
    } 
    else if (activePage === '/about') {
    aboutClass += " active";
    } 
    else if (activePage === '/portfolio') {
    portfolioClass += " active";
    } 
    else if (activePage === '/contact') {
    contactClass += " active";
    }
    return ( 
        <nav id="navContainer" className="nav nav-pills flex-column flex-sm-row">
            <img src={navIcon} alt="" className ="navIcon"/>
            <Link to="/" 
                className={homeClass} 
                onClick={() => setActivePage('/')}>
                Home
            </Link>
            <Link to="/about" 
                className={aboutClass}
                onClick={() => setActivePage('/about')}>
                About me
            </Link>
            <Link to="/portfolio" 
                className={portfolioClass}
                onClick={() => setActivePage('/portfolio')}>
                My Projects
            </Link>
            <Link to="/contact" 
                className={contactClass}
                onClick={() => setActivePage('/contact')}>
                Contact
            </Link>
        </nav>
    )
}
export default NavBar;