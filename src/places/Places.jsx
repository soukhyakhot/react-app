import styles from './Places.module.css'


function Places(props){
    return(
    
        <div className={styles.place}>
            <h2 className={styles.title}>{props.place}</h2>
            <a href={props.url} target="_blank" rel="noopener noreferrer">
            <img className={styles.img} src={props.img} alt={props.place}></img></a>
        </div>
    );
}

export default Places 