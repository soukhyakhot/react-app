
import Card from "D:/ReactApp/react-app/src/card/Card.jsx"
import Places from "../places/Places.jsx"
import Rajasthan from "../assets/Rajasthan.jpg"
import Andaman from "../assets/Andaman.jpg"
import Kerala from "../assets/Kerala.jpg"
import Kashmir from "../assets/Kashmir.jpg"
import Maharashtra from "../assets/Maharashtra.jpg"




function Home() {
  const placesData = [
    { place: "Rajasthan", img: Rajasthan, url: "https://www.tourism.rajasthan.gov.in/"},
    { place: "Andaman", img: Andaman, url: "https://www.andamantourism.gov.in/" },
    { place: "Kerala", img: Kerala, url: "https://www.keralatourism.org/"},
    { place: "Kashmir", img: Kashmir, url: "https://tourism.jk.gov.in/" },
    { place: "Maharashtra", img: Maharashtra, url: "https://maharashtratourism.gov.in/" },
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
 