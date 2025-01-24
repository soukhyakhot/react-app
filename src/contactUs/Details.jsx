// import travelimg from './TravelImage.jpg' 
import styles from "./Details.module.css"

function Details(){
    
    return(
    <>
    <h2>AtoZ Travels Pvt. Ltd.</h2>
    
        <div className={styles.card}>
        <h3>🏙️ Address</h3><br></br>
        <p>A/10, ABC XYZ, Near ABC Park, Tilak Road, Pune, Maharashtra, India,</p>
        </div>

        <div className={styles.card}>
        <h3>📧 Email</h3><br></br>
        <p>enquiry@atoztravels.com</p>
        <p>atoztravels@gmail.com</p>
        </div>

        <div className={styles.card}>
        <h3>📞 Phone</h3><br></br>
        <p>+91 1112223334</p>
        <p>+91 2223334445</p>
        </div>
    </>
    )
}

export default Details