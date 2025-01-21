import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header/Header.jsx"
import Footer from "./Footer.jsx"
import Home from "./home/Home.jsx"
import Card from "./card/Card.jsx"
import Places from "./places/Places.jsx"
import Rajasthan from "./assets/rajasthan.jpg"
import Andaman from "./assets/Andaman.jpg"
import Kerala from "./assets/Kerala.jpg"
import Kashmir from "./assets/Kashmir.jpg"
import Maharashtra from "./assets/Maharashtra.jpg"
import Testimonials from "./testimonials/Testimonials.jsx";


function App() {
  const placesData = [
    { place: "Rajasthan", img: Rajasthan, url: "https://www.tourism.rajasthan.gov.in/"},
    { place: "Andaman", img: Andaman, url: "https://www.andamantourism.gov.in/" },
    { place: "Kerala", img: Kerala, url: "https://www.keralatourism.org/"},
    { place: "Kashmir", img: Kashmir, url: "https://tourism.jk.gov.in/" },
    { place: "Maharashtra", img: Maharashtra, url: "https://maharashtratourism.gov.in/" },
  ];

  return(
    <>
    <Router>
      <Header isLoggedIn={true} username='Soukhya'/> <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/testimonials" element={<Testimonials />} />
            </Routes>
      </Router>
      
      <Footer/>
    </>
  )


};

export default App
 