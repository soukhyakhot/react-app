import React, { useState } from "react";
import styles from "./Rating.module.css"


function Rating(){

    const [rate, setRate] = useState(10);

    const increment = () => {
        if (rate < 10) {
            setRate(rate + 1)}
    }

    const decrement = () => {
        if (rate > 1) {
        setRate(rate - 1)}
    }

    return(<>

    <div className={styles.card}>
        <div className={styles.rateContainer}>
            <button className={styles.rateButton} onClick={decrement}>◀</button>
            <div className={styles.centerContent}>
                <h2 className={styles.heading}>Rate Us</h2>
                <p className={styles.rateDisplay}>{rate}</p>
                <button className={styles.submitButton}>Submit</button>
            </div>
            <button className={styles.rateButton} onClick={increment}>▶</button>
            
            </div>
        
    </div>

    </>

    );
}

export default Rating