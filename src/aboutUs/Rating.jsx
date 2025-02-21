import React, { useState } from "react";
import axios from "axios";
import styles from "./Rating.module.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function Rating(){

    const [rate, setRate] = useState(10);
    const email = localStorage.getItem("email");

    const increment = () => {
        if (rate < 10) {
            setRate(rate + 1)}
    }

    const decrement = () => {
        if (rate > 1) {
        setRate(rate - 1)}
    }

    const submitRating = async () => {
       const data = { EmailId: email, Rating: rate };

       await axios.post("https://localhost:7066/api/Registration/rating", data)
            .then((result) => {
            toast.success("Rating Submitted Successfully!");
        })
        .catch((error) => {
            if (error.response) {
                toast.error(error.response.data.message || "Failed to submit rating!");
            } else {
                toast.error("Something went wrong. Please try again.");
            }
        });
            
        
            
        

        setRate(10)
    };

    return(<>
    <ToastContainer position="top-center" autoClose={3000} />
    <div className={styles.card}>
        <div className={styles.rateContainer}>
            <button className={styles.rateButton} onClick={decrement}>◀</button>
            <div className={styles.centerContent}>
                <h3 className={styles.heading}>Rate Us</h3>
                <p className={styles.rateDisplay}>{rate}</p>
                <button className={styles.submitButton} onClick={submitRating}>Submit</button>
            </div>
            <button className={styles.rateButton} onClick={increment}>▶</button>
            
            </div>
        
    </div>

    </>

    );
}

export default Rating