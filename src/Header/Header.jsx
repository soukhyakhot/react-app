import { Link } from "react-router-dom";
import Logo from "./Logo.png"
import styles from './Header.module.css'
import Login from "./login.png"
import React, { useState } from "react";


function Header(props){
    
    const [activePage, setActivePage] = useState("home");
    const welcomeMessage = <p className = {styles.welcomemsg}>Welcome {props.username}!</p>
    
    const loginPrompt = <p className = {styles.welcomemsg}>Login</p>

    const handleNavClick = (page) => {
        setActivePage(page);
    };

    return(
        <>
        <header className={styles.headercls}> 
            <h1><img className={styles.imglogo} src={Logo}></img></h1>
            <nav className={styles.navbar}>
                <ul>
                    <li><Link to="/"  className={activePage === "home" ? styles.active : ""}
                                onClick={() => handleNavClick("home")}>Home</Link></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Tour Packages</a></li>
                    <li><Link target = "_blank" to="https://www.goindigo.in/">Air Tickets</Link></li>
                    <li><Link to="/testimonials" className={activePage === "testimonials" ? styles.active : ""}
                                onClick={() => handleNavClick("testimonials")}>Testimonials</Link></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </nav>
            <div>
            <img className={styles.loginimg} src={Login} alt="Login" />
            {props.isLoggedIn ? welcomeMessage : loginPrompt}
            </div>
        </header>
        </>
    );

}

export default Header