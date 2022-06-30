function Footer() {
    return ( 
        <footer >
            <h2>Let's Work together...</h2>
            <p>How do you take your coffee?</p>
            <div className="contacts-icon" id="contact_me">
                <p><span className="fa fa-facebook-official"></span> <a href="https://www.facebook.com/">facebook</a></p>
                <p><span className="fa fa-github"></span> <a href="https://github.com/">github</a></p>
                <p><span className="fa fa-twitter"></span> <a href="https://twitter.com/?lang=en">twitter</a></p>
                <p><span className="fa fa-linkedin"></span> <a href="https://np.linkedin.com/">linkedin</a></p>
                <p><span className="fa fa-phone"></span> <a href="tel:555-555-5555">call Me</a></p>
            </div>
            <div className="footer-cont">
                <p>*the projects given above are trademark of freecodecamp.org and fictional only.</p>
                <p>powered by Chawang.</p>
            </div>
        </footer>
     );
}

export default Footer;