import { Link, useLocation } from "react-router-dom";
import navIcon from "../../assets/img/globalImg/coffee-beans.png";
function NavBar({activePage}) {
    const location = useLocation();
    activePage = location.pathname; // automatically updates when route changes

    const baseClass = "navLinks text-sm-center nav-link ";
    const navBarLinks = [
        { label: "Home", path: "/" },
        { label: "About", path: "/about" },
        { label: "Projects", path: "/portfolio" },
        { label: "Contact", path: "/contact" }
    ];

    return (
        <nav id="navContainer" className="nav nav-pills flex-column flex-sm-row">
            <img src={navIcon} alt="" className="navIcon" />

            {/* Map over links and highlight the one that matches the current URL */}
            {navBarLinks.map(link => (
                <Link
                    key={link.path} // required by React for list rendering
                    to={link.path}
                    className={`${baseClass}${activePage === link.path ? " active" : ""}`}
                >
                    {link.label}
                </Link>
            ))}
        </nav>
    );
}

export default NavBar;