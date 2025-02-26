import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo.png";
import styles from './Header.module.css';
import Login from "./login.png";
import Person from "../assets/person.png";
import React, { useState, useEffect } from "react";

function Header({ isAuthenticated, username }) {
    const location = useLocation(); 
    const [activePage, setActivePage] = useState(localStorage.getItem("activePage") || location.pathname);

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Storing activePage in localStorage
    useEffect(() => {
        localStorage.setItem("activePage", activePage);
    }, [activePage]);

    useEffect(() => {
        setActivePage(location.pathname);
    }, [location.pathname]);

    const handleNavClick = (page) => {
        setActivePage(page);
        localStorage.setItem("activePage", page);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(prev => !prev);
    };

    const welcomeMessage = <p className={styles.welcomemsg}>Welcome {username}!</p>;
    const loginPrompt = <p className={styles.welcomemsg}>Login</p>;

    return (
        <>
            <header className={styles.headercls}>
                <h1><img className={styles.imglogo} src={Logo} alt="Logo" /></h1>
                <nav className={styles.navbar}>
                    <ul>
                        <li><Link to="/home" className={activePage === "/home" ? styles.active : ""} onClick={() => handleNavClick("/home")}>Home</Link></li>
                        <li><Link to="/aboutus" className={activePage === "/aboutus" ? styles.active : ""} onClick={() => handleNavClick("/aboutus")}>About Us</Link></li>
                        <li className={styles.dropdown} onClick={toggleDropdown}>
                            <Link to="#" className={activePage.includes("tourpackages") ? styles.active : ""} onClick={() => handleNavClick("tourpackages")}>Tour Packages</Link>
                            {isDropdownOpen && (
                                <div className={styles.dropdownMenu}>
                                    <p><Link to="tourpackages/domestic-tours" onClick={() => handleNavClick("tourpackages/domestic-tours")}>Domestic Tours</Link></p>
                                    <p><Link to="tourpackages/international-tours" onClick={() => handleNavClick("tourpackages/international-tours")}>International Tours</Link></p>
                                </div>
                            )}
                        </li>
                        <li><Link target="_blank" to="https://www.goindigo.in/">Air Tickets</Link></li>
                        <li><Link to="/testimonials" className={activePage === "/testimonials" ? styles.active : ""} onClick={() => handleNavClick("/testimonials")}>Testimonials</Link></li>
                        <li><Link to="/contactus" className={activePage === "/contactus" ? styles.active : ""} onClick={() => handleNavClick("/contactus")}>Contact Us</Link></li>
                    </ul>
                </nav>
                <div className={styles.container}>
                    <img className={styles.loginimg} src={Login} alt="Login" />
                    {isAuthenticated ? welcomeMessage : loginPrompt}
                </div>
            </header>
        </>
    );
}

export default Header;
