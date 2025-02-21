import styles from "./Form.module.css"
import React, { useState } from "react";
import axios from 'axios';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
                 toast.success("Thank you for your Enquiry! We will get back to you shortly!");
            })
            .catch((error) => {
                if (error.response) {
                    const status = error.response.status;
                    const responseData = error.response.data;
    
                    // Handle validation errors (400 status with specific errors)
                    if (status === 400 && responseData.errors) {
                        Object.keys(responseData.errors).forEach((key) => {
                            toast.error(responseData.errors[key][0]); // Show each validation error
                        });
                    } else {
                        // Show general error message
                        const errorMessage = responseData.message || "Enquiry request failed!";
                        toast.error(errorMessage);
                    }
                } else {
                    toast.error("Something went wrong. Please try again.");
                }
            });

    // Clear input fields after submission
    setMobileNo("");
    setEnquiry("");
    };

    return(
        <>
        <ToastContainer position="top-center" autoClose={1000} />
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