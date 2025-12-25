import { Link } from "react-router-dom";
import navIcon from "../../assets/img/globalImg/coffee-beans.png";
function NavBar({activePage, setActivePage}) {
    const baseClass = "navLinks text-sm-center nav-link ";
    const navBarLinks = [
        {label: "Home", path: "/"},
        {label: "About", path: "/about"},
        {label: "Projects", path: "/portfolio"},
        {label: "Contact", path: "/contact"}
    ]

    return ( 
        <nav id="navContainer" className="nav nav-pills flex-column flex-sm-row">
            <img src={navIcon} alt="" className ="navIcon"/>
            {navBarLinks.map(link => (
                <Link 
                    to = {link.path}
                    className={`${baseClass}${activePage === link.path ? ' active' : ''}`}
                    onClick={() => setActivePage(link.path)}>
                        {link.label}
                    </Link>
            ))}
        </nav>
    )
}
export default NavBar;