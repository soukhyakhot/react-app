
import Wishlist from "./Wishlist";
import Places from "../places/Places.jsx"
import Rajasthan from "../assets/Rajasthan.jpg"
import Andaman from "../assets/Andaman.jpg"
import Kerala from "../assets/Kerala.jpg"
import Kashmir from "../assets/Kashmir.jpg"
import Maharashtra from "../assets/Maharashtra.jpg"
import Gujarat from "../assets/Gujarat.jpg"

function DomesticTours() {

    const placesData = [
        { place: "Rajasthan", img: Rajasthan, url: "https://www.tourism.rajasthan.gov.in/"},
        { place: "Andaman", img: Andaman, url: "https://www.andamantourism.gov.in/" },
        { place: "Kerala", img: Kerala, url: "https://www.keralatourism.org/"},
        { place: "Kashmir", img: Kashmir, url: "https://tourism.jk.gov.in/" },
        { place: "Maharashtra", img: Maharashtra, url: "https://maharashtratourism.gov.in/" },
        { place: "Gujarat", img: Gujarat, url: "https://www.gujarattourism.com/"},
      ];
  return(
    <>
        <h1 style={styles.h1}>Domestic Tours</h1>
        
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

export default DomesticTours;