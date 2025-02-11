import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ProtectedLayout from './ProtectedLayout';
import Home from './home/Home.jsx';
import Testimonials from './testimonials/Testimonials.jsx';
import AboutUs from './aboutUs/AboutUs.jsx';
import ContactUs from './contactUs/ContactUs.jsx';
import DomesticTours from './tourPackages/DomesticTours.jsx';
import InternationalTours from './tourPackages/InternationalTours.jsx';
import LoginSignup from './loginSignup/LoginSignup.jsx';
import ProtectedRoute from './ProtectedRoute';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const storedUsername = localStorage.getItem("username");

    if (token) {
      setIsAuthenticated(true);
      setUsername(storedUsername || "User");
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/react-app" replace />
            ) : (
              <Navigate to="/login-signup" replace />
            )
          }
        />
        <Route
          path="/login-signup"
          element={<LoginSignup setIsAuthenticated={setIsAuthenticated} setUsername={setUsername}/>}
        />
        <Route
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <ProtectedLayout isAuthenticated={isAuthenticated} username={username}/>
            </ProtectedRoute>
          }
        >
          <Route path="/react-app" element={<Home />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/tourpackages/domestic-tours" element={<DomesticTours />} />
          <Route path="/tourpackages/international-tours" element={<InternationalTours />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
