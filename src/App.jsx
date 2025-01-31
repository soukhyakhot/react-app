import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header/Header.jsx"
import Footer from "./Footer.jsx"
import Home from "./home/Home.jsx"
import Card from "./card/Card.jsx"
import Places from "./places/Places.jsx"
import Rajasthan from "./assets/Rajasthan.jpg"
import Andaman from "./assets/Andaman.jpg"
import Kerala from "./assets/Kerala.jpg"
import Kashmir from "./assets/Kashmir.jpg"
import Maharashtra from "./assets/Maharashtra.jpg"
import Testimonials from "./testimonials/Testimonials.jsx";
import AboutUs from "./aboutUs/AboutUs.jsx";
import TourPackages from "./tourPackages/TourPackages.jsx";
import ContactUs from "./contactUs/ContactUs.jsx";
import DomesticTours from "./tourPackages/DomesticTours.jsx";
import InternationalTours from "./tourPackages/InternationalTours.jsx";
import LoginSignup from "./loginSignup/LoginSignup.jsx";


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
                <Route path="/react-app/login-signup" element={<LoginSignup/>} />
                <Route path="/react-app" element={<Home/>} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/aboutus" element={<AboutUs />} />
                {/* <Route path="/tourpackages" element={<TourPackages />} /> */}
                <Route path="tourpackages/domestic-tours" element={<DomesticTours />} />
                <Route path="tourpackages/international-tours" element={<InternationalTours />} />  
                <Route path="/contactus" element={<ContactUs />} />
            </Routes>
      </Router>
      
      <Footer/>
    </>
  )


};

export default App
 