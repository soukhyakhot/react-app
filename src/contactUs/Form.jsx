import styles from "./Form.module.css"

function Form(){

    return(
        <>
       
            
        

        <div className={styles.card}>
        <h2>Fill in Details for Enquiry</h2>
            <input className={styles.name} type="text" placeholder="Name*"></input><br></br>
            <input className={styles.telemail} type="tel" placeholder="Mobile No.*" ></input><br></br>
            <input className={styles.telemail} type="email" placeholder="Email ID*" ></input><br></br>
            <textarea className={styles.enquiry} placeholder="Enquiry For"></textarea>
            <button className={styles.button}>Submit</button>

        </div>
        </>
    );
}

export default Form