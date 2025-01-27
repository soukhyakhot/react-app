
import Card from "../card/Card.jsx"
import Places from "../places/Places.jsx"
import Rajasthan from "../assets/Rajasthan.jpg"
import Andaman from "../assets/Andaman.jpg"
import Kerala from "../assets/Kerala.jpg"
import Kashmir from "../assets/Kashmir.jpg"
import Maharashtra from "../assets/Maharashtra.jpg"
import Canada from "../assets/Canada.jpg"
import SouthAmerica from "../assets/SouthAmerica.jpg"
import Japan from "../assets/Japan.jpg"
import Egypt from "../assets/Egypt.jpg"
import Bhutan from "../assets/Bhutan.jpg"
import Vietnam from "../assets/Vietnam.jpg"




function Home() {
  const placesData = [
    { place: "Rajasthan", img: Rajasthan, url: "https://www.tourism.rajasthan.gov.in/"},
    { place: "Andaman", img: Andaman, url: "https://www.andamantourism.gov.in/" },
    { place: "Kerala", img: Kerala, url: "https://www.keralatourism.org/"},
    { place: "Kashmir", img: Kashmir, url: "https://tourism.jk.gov.in/" },
    { place: "Maharashtra", img: Maharashtra, url: "https://maharashtratourism.gov.in/" },
    { place: "Canada", img: Canada, url: "https://travel.destinationcanada.com/en-gb"},
    { place: "South America", img: SouthAmerica, url: "https://visitsouthamerica.co/" },
    { place: "Japan", img: Japan, url: "https://www.japan.travel/en/in/"},
    { place: "Egypt", img: Egypt, url: "https://www.experienceegypt.eg/en" },
    { place: "Vietnam", img: Vietnam, url: "https://vietnam.travel/node/1336"},
  ];

  return(
    <> 
      <Card/>
      <div style={styles.cardContainer}>
        {placesData.map((place, index) => (
          <Places key={index} place={place.place} img={place.img} url={place.url}/>
        ))}
      </div>
    </>
  )


}

const styles = {
  cardContainer: {
    display: "flex",
    // gap: "16px",
    justifyContent: "center",
    flexWrap: "wrap", // Allows wrapping on smaller screens
    marginTop: "20px",
  },
};

export default Home
 