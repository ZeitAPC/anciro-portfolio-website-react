import { Link, useLocation } from "react-router-dom";
import {coffeeBeans} from "../../assets/img/global"
function NavBar({activePage}) {
    const location = useLocation();
    activePage = location.pathname;

    const baseClass = "rounded-[2%] py-[5px] px-[25px] text-center flex items-center justify-center hover:bg-accent-secondary hover:text-[#FFF8E1] ";
    const navBarLinks = [
        { label: "Home", path: "/" },
        { label: "Projects", path: "/portfolio" },
        { label: "Contact", path: "/contact" }
    ];

    return (
        <nav id="navContainer" className="
        flex items-center justify-evenly
        h-15
        z-10
        ">
        <img src={coffeeBeans} alt="" className="h-full pl-5" />

            {navBarLinks.map(link => (
                <Link
                    key={link.path}
                    to={link.path}
                    className={`${baseClass}${activePage === link.path ? " bg-accent-secondary text-text-muted shadow-[0px_0px_20px_0px_#6F4E37]" : ""}`}>
                    {link.label}
                </Link>
            ))}
        </nav>
    );
}

export default NavBar;