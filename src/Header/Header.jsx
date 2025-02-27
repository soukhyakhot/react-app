import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "./Logo.png";
import styles from './Header.module.css';
import Login from "./login.png";
import LogoutIcon from "../assets/logout.png"; // Assuming you have a logout icon
import React, { useState, useEffect } from "react";

function Header({ isAuthenticated, username, setIsAuthenticated }) {
    const location = useLocation(); 
    const navigate = useNavigate();
    const [activePage, setActivePage] = useState(localStorage.getItem("activePage") || location.pathname);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [showLogoutPopup, setShowLogoutPopup] = useState(false);

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

    const handleLogout = () => {
        localStorage.removeItem("authToken"); // Clear token
        setIsAuthenticated(false); // Update auth state
        navigate("/login-signup"); // Redirect to login page
    };

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
                        {isAuthenticated && (
                            <li>
                                <button className={styles.logoutBtn} onClick={() => setShowLogoutPopup(true)}>
                                    <img src={LogoutIcon} alt="Logout" className={styles.logoutIcon} />
                                </button>
                            </li>
                        )}
                    </ul>
                </nav>
                <div className={styles.container}>
                    <img className={styles.loginimg} src={Login} alt="Login" />
                    {isAuthenticated ? <p className={styles.welcomemsg}>Welcome {username}!</p> : <p className={styles.welcomemsg}>Login</p>}
                </div>
            </header>

            {showLogoutPopup && (
                <div className={styles.popupOverlay}>
                    <div className={styles.popup}>
                        <p>Do you want to logout?</p>
                        <button className={styles.yesBtn} onClick={handleLogout}>Yes</button>
                        <button className={styles.noBtn} onClick={() => setShowLogoutPopup(false)}>No</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Header;
