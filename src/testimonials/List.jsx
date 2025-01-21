import styles from "./List.module.css"

function List(props){

    const itemList = props.items;

    const listItems = itemList.map(item => <p key={item.id}>💠
                                            <b>{item.name}</b> <br/><br/>
                                            {item.comment}</p>);

return(
    <>
    <h1>Testimonials</h1>
    <p className={styles.testimonials}> {listItems}</p>
    </>
);


}

export default List
