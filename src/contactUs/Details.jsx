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

        <div className={styles.mapcard}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.634871322537!2d73.81633827335062!3d18.50019106980011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf37776116e7%3A0x8f4ec7af9cc14518!2sEllicium%20Solutions%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1737959225706!5m2!1sen!2sin"
        width="550" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </>
    )
}

export default Details