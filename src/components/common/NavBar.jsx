import { Link, useLocation } from "react-router-dom";
import {coffeeBeans} from "../../assets/img/global";
function NavBar() {
    // This component is the navigation bar to move around my website
    // get current location to design active link
    const location = useLocation();
    const activePage = location.pathname;

    // Styling for all the links in nav bar
    const baseStyle = "rounded-[2%] py-[5px] px-[25px] text-center flex items-center justify-center hover:bg-accent-secondary hover:text-[#FFF8E1] hover:shadow-[0px_0px_20px_0px_#6F4E37] hover:scale-[105%] ";

    // additional styling for active link
    const activeLinkStyle = "bg-accent-secondary text-text-muted shadow-[0px_0px_20px_0px_#6F4E37]";

    // links with label and data
    const navBarLinks = [
        { label: "Home", path: "/" },
        { label: "Projects", path: "/portfolio" },
        { label: "Contact", path: "/contact" }
    ];

    return (
        <nav className=" flex items-center justify-evenly h-15 z-10 ">

            {/*Nav bar logo*/}
            <img src={coffeeBeans} alt="Coffee beans logo" className="h-full pl-5" />

            {/*Renders the links*/}
            {navBarLinks.map(link => (
                <Link
                    key={link.path} // needed to render component
                    to={link.path} //points to path

                    //conditional styling depending on if active link or not
                    className={`${baseStyle}${activePage === link.path ? `${activeLinkStyle}` : ""}`}
                >
                    {link.label}
                </Link>
            ))}
        </nav>
    );
}

export default NavBar;