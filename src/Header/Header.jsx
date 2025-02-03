import { Link } from "react-router-dom";
import Logo from "./Logo.png"
import styles from './Header.module.css'
import Login from "./login.png"
import Person from "../assets/person.png"
import React, { useState } from "react";



function Header(props){
    
    const [activePage, setActivePage] = useState("home");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    
    const handleNavClick = (page) => {
        setActivePage(page);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(prev=> !prev);
      };
    
    const welcomeMessage = <p className = {styles.welcomemsg}>Welcome {props.username}!</p>
    
    const loginPrompt = <p className = {styles.welcomemsg}>Login</p>

    return(
        <>
        <header className={styles.headercls}> 
            <h1><img className={styles.imglogo} src={Logo}></img></h1>
            <nav className={styles.navbar}>
                <ul>
                    <li><Link to="/react-app"  className={activePage === "home" ? styles.active : ""}
                                onClick={() => handleNavClick("home")}>Home</Link></li>
                    <li><Link to="/aboutus" className={activePage === "aboutus" ? styles.active : ""}
                                onClick={() => handleNavClick("aboutus")}>About Us</Link></li>
                     <li
                        
                        className={styles.dropdown}
                        onClick={toggleDropdown}
                        
                        >
                        <Link
                            to="#"
                            className={activePage === "domestic-tours" || activePage === "international-tours" ? styles.active : ""}
                            onClick={() => handleNavClick("tourpackages")}
                        >
                            Tour Packages
                        </Link>
                        {isDropdownOpen && (
                            <><div className={styles.dropdownMenu}>
                                    <p>
                                        <Link to="tourpackages/domestic-tours" onClick={() => handleNavClick("domestic-tours")}>
                                            Domestic Tours
                                        </Link>

                                    </p>
                                
                                    <p>
                                        <Link to="tourpackages/international-tours" onClick={() => handleNavClick("international-tours")}>
                                            International Tours
                                        </Link>
                                    </p>
                                    </div></>
                        )}
                        </li>
                    
                    {/* <li><Link to="/tourpackages" className={activePage === "tourpackages" ? styles.active : ""}
                                onClick={() => handleNavClick("tourpackages")}>Tour Packages </Link></li> */}
                    <li><Link target = "_blank" to="https://www.goindigo.in/">Air Tickets</Link></li>
                    <li><Link to="/testimonials" className={activePage === "testimonials" ? styles.active : ""}
                                onClick={() => handleNavClick("testimonials")}>Testimonials</Link></li>
                    <li><Link to="/contactus" className={activePage === "contactus" ? styles.active : ""}
                                onClick={() => handleNavClick("contactus")}>Contact Us</Link></li>
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