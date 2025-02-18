import React, { useState } from "react";
import axios from "axios";
import styles from "./Rating.module.css";


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
        if (!email) {
            alert("You must be logged in to submit a rating!");
            return;
        }

        try {
            const response = await axios.post("https://localhost:7066/api/Registration/rating", {
                EmailId: email, // Send stored email
                Rating: rate,
            });
            alert(response.data.message);
        } catch (error) {
            console.error("Error submitting rating:", error); // Logs full error in the console
    
            if (error.response) {
                // Server responded with a status code outside the 2xx range
                console.error("Server Response:", error.response.data);
                alert(`Server Error: ${error.response.data.message || JSON.stringify(error.response.data)}`);
            } else if (error.request) {
                // Request was made but no response received
                console.error("No response received:", error.request);
                alert("No response from the server. Please try again later.");
            } else {
                // Something else went wrong
                console.error("Error:", error.message);
                alert(`Unexpected Error: ${error.message}`);
            }
        }

        setRate(10)
    };

    return(<>

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