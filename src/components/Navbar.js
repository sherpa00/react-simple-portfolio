function Navbar(props) {
    return ( 
        <nav>
            <h1 id="logo">CHA-WANG</h1>
            <ul>
                <li key="about_me" id="1">
                    <a href="#about_me">About me</a>
                </li>
                <li key="services" id="2">
                    <a href="#services">Services</a>
                </li>
                <li key="my_works" id="3">
                    <a href="#my_works">my Works</a>
                </li>
                <li key="contact_me" id="4">
                    <a href="#contact_me">Contact me</a>
                </li>
            </ul>

        </nav>
     );
}

export default Navbar;