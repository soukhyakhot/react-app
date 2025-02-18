import styles from "./Form.module.css"
import React, { useState } from "react";
import axios from 'axios';

function Form(){

    const name = localStorage.getItem("username");
    const email = localStorage.getItem("email");
    const [mobileNo, setMobileNo] = useState('');
    const [enquiry, setEnquiry] = useState('');


    const handleEnquiry = () => {
        // e.preventDefault();
        const data = { Name: name, EmailId: email, MobileNo: mobileNo, EnquiryFor: enquiry };
        axios.post("https://localhost:7066/api/Enquiry/enquiry", data)
            .then((result) => {
                alert("Thank you for your Enquiry! We will get back to you shortly!");
            })
            .catch((error) => {
                alert("Enquiry request failed!" + error);
            });

    // Clear input fields after submission
    setMobileNo("");
    setEnquiry("");
    };

    return(
        <>
       
            
        

        <div className={styles.card}>
        <h2>Fill in Details for Enquiry</h2>
            <input className={styles.name} type="text" placeholder="Name*" value={name} readOnly></input><br></br>
            <input className={styles.telemail} type="tel" placeholder="Mobile No.*" pattern="[0-9]{10}" value={mobileNo} onChange={(e) => setMobileNo(e.target.value)} required></input><br></br>
            <input className={styles.telemail} type="email" placeholder="Email ID*" value={email} readOnly></input><br></br>
            <textarea className={styles.enquiry} placeholder="Enquiry For" value={enquiry} onChange={(e) => setEnquiry(e.target.value)} required></textarea>
            <button className={styles.button} onClick={handleEnquiry}>Submit</button>

        </div>
        </>
    );
}

export default Form