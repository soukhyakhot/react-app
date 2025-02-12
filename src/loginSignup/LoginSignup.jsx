import styles from './LoginSignup.module.css';
import Email from '../assets/email.png';
import Person from '../assets/person.png';
import Password from '../assets/password.png';
import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Logo from "../Header/Logo.png"

function LoginSignup({setIsAuthenticated, setUsername }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [action, setAction] = useState("Sign Up");
    const navigate = useNavigate();

    const handleSignUp = () => {
        const data = { UserName: name, EmailId: email, Password: password, IsActive: 1 };
        axios.post("https://localhost:7066/api/Registration/registration", data)
            .then((result) => {
                alert("Registration successful!");
            })
            .catch((error) => {
                alert("Registration failed: " + error);
            });
    };

    const handleLogin = async () => {
        const data = { EmailId: email, Password: password };
        await axios.post("https://localhost:7066/api/Registration/login", data, { headers: { "Content-Type": "application/json" } })
            .then((response) => {
                console.log("Login Response:", response.data); // Debugging
                if (!response.data.username) {
                    alert("Error: Username missing in API response.");
                    return;
                }

                localStorage.setItem("authToken", response.data.token);
                localStorage.setItem("username", response.data.username);
                localStorage.setItem("email", email);
                setIsAuthenticated(true);
                setUsername(response.data.username);
                navigate("/react-app");

            })
            .catch((error) => {
                alert("Login failed: " + error);
            });
    };

    return (
        <>
        
        <div className={styles.container}>
        <img src={Logo} className={styles.logo} alt='AtoZ Travles Logo' />
        <h1>Welcome to AtoZ Travels!</h1>
            <div className={styles.header}><div className={styles.text}>{action}</div></div>
            <div className={styles.inputs}>
                {action === "Login" ? null : (
                    <div className={styles.input}>
                        <img src={Person} alt='Person Icon' />
                        <input type='text' placeholder='Name' onChange={(e) => setName(e.target.value)} required />
                    </div>
                )}
                <div className={styles.input}>
                    <img src={Email} alt='Email Icon' />
                    <input type='email' placeholder='Email Id' onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className={styles.input}>
                    <img src={Password} alt='Password Icon' />
                    <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} required />
                </div>
            </div>
            <div className={styles.submitcontainer}>
                {action === "Sign Up" ? (
                    <div className={styles.submit} onClick={handleSignUp}>Sign Up</div>
                ) : (
                    <div className={styles.submit} onClick={handleLogin}>Login</div>
                )}
                <div className={styles.switchAction} onClick={() => setAction(action === "Sign Up" ? "Login" : "Sign Up")}>
                    {action === "Sign Up" ? "Switch to Login" : "Switch to Sign Up"}
                </div>
            </div>
        </div>
        </>
    );
}

export default LoginSignup;
