import Wishlist from "./Wishlist";
import Places from "../places/Places.jsx"
import Canada from "../assets/Canada.jpg"
import SouthAmerica from "../assets/SouthAmerica.jpg"
import Japan from "../assets/Japan.jpg"
import Egypt from "../assets/Egypt.jpg"
import Bhutan from "../assets/Bhutan.jpg"
import Vietnam from "../assets/Vietnam.jpg"

function InternationalTours() {

    const placesData = [
        { place: "Canada", img: Canada, url: "https://travel.destinationcanada.com/en-gb"},
        { place: "South America", img: SouthAmerica, url: "https://visitsouthamerica.co/" },
        { place: "Japan", img: Japan, url: "https://www.japan.travel/en/in/"},
        { place: "Egypt", img: Egypt, url: "https://www.experienceegypt.eg/en" },
        { place: "Bhutan", img: Bhutan, url: "https://bhutan.travel/" },
        { place: "Vietnam", img: Vietnam, url: "https://vietnam.travel/node/1336"},
      ];
  return(
    <>
        <h1 style={styles.h1}>International Tours</h1>
        
        <Wishlist / >

        <div style={styles.cardContainer}>
        {placesData.map((place, index) => (
          <Places key={index} place={place.place} img={place.img} url={place.url}/>
        ))}
        </div>

        
        
        
    </>
);


}

const styles = {
  cardContainer: {
    display: "flex",
    // gap: "16px",
    justifyContent: "center",
    flexWrap: "wrap", // Allows wrapping on smaller screens
    marginTop: "10px",
  },

  h1:{
    paddingBottom: "20px"
  }
};
export default InternationalTours;