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
        <div className={styles.rateContainer}>
            <button className={styles.rateButton} onClick={decrement}>◀</button>
            <div className={styles.centerContent}>
                <h1>Rate Us</h1>
                <p className={styles.rateDisplay}>{rate}</p>
            </div>
            <button className={styles.rateButton} onClick={increment}>▶</button>
    
    </div>
    </>

    );
}

export default Rating