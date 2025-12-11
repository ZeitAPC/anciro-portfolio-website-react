function NavBar() {
  return ( 
        <nav id="navContainer" class="nav nav-pills flex-column flex-sm-row">
            <a href="#" class="navLinks flex-sm-fill text-sm-center nav-link active" id="active">Homepage</a>
            <a href="html/aboutMe.html" class="navLinks flex-sm-fill text-sm-center nav-link">About</a>
            <a href="html/portfolio.html" class="navLinks flex-sm-fill text-sm-center nav-link">Portfolio</a>
            <a href="html/contact.html" class="navLinks flex-sm-fill text-sm-center nav-link">Contact</a>
        </nav>
    )
}
export default NavBar;