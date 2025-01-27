import travelimg from './TravelImage.jpg'
import styles from './Card.module.css'

function Card(){
    return(
        <>
        <div>
        <h2 className={styles.title}>AtoZ Travels Pvt. Ltd.</h2>
        </div>
        <div className={styles.card}>
            <img className={styles.img} src={travelimg} alt='travel image'></img>
            <p className={styles.para}>Travels Pvt. Ltd. is in the service industry from January 1 2007. We are proud to say that we serve our same set of clientele from 2007 along with the new entries. ABC ZYZ, a first generation businessman has completed his masters in Travel & Tourism and always wanted to do career in Travel Industry. After completing the Post Graduation Diploma in Travel and Tourism, from ABC College of Career Education & Development, he came up with a thought of starting his own business.Travels Pvt. Ltd. is in the service industry from January 1 2007. We are proud to say that we serve our same set of clientele from 2007 along with the new entries. ABC ZYZ, a first generation businessman has completed his masters in Travel & Tourism and always wanted to do career in Travel Industry. After completing the Post Graduation Diploma in Travel and Tourism, from ABC College of Career Education & Development, he came up with a thought of starting his own business.</p>
        </div>
        </>

    );



}

export default Card