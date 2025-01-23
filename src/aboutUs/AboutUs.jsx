import Rating from "./Rating"
import Card from "../card/Card.jsx"
import Para from "./Para"

function AboutUs(){

    const styles = {
        // display: "flex",
        // justifyContent: "space-between",
        // alignItems: "center",
        // width: "100%",
        

    }

    return(
    <>
    <div style={styles}>
    <Card />
    <Rating/>
    <Para />
    </div>
    </>);
}


export default AboutUs

