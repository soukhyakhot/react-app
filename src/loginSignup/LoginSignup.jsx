import styles from './LoginSignup.module.css'
import Email from '../assets/email.png'
import Person from '../assets/person.png'
import Password from '../assets/password.png'
import React, { useState } from "react";

function LoginSignup(){

    const [action, setAction] = useState("Sign Up");

    return(
        <>
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.text}>{action}</div>
            </div>
        </div>
        <div className={styles.inputs}>
                {action==="Login" ? <div></div>:<div className = {styles.input}>
                <img src={Person} alt ='Person Icon'/>
                <input type='text'placeholder='Name'/>
            </div>}
                
            <div className ={styles.input}>
                <img src={Email} alt ='Email Icon'/>
                <input type='email' placeholder='Email Id'/>
            </div>
            <div className = {styles.input}>
                <img src={Password} alt ='Password Icon'/>
                <input type='password' placeholder='Password'/>
            </div>
        </div>
        {/* <div className={styles.forgotpassword}>Forgot Password?</div> */}
        <div className={styles.submitcontainer}>
            
            <div className={action==="Login"? styles.submitgray : styles.submit} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"? styles.submitgray : styles.submit} onClick={()=>{setAction("Login")}}>Login</div>
        


        </div>
        </>
    );

}

export default LoginSignup;