import { Outlet } from 'react-router-dom';
import Header from './Header/Header.jsx';
import Footer from './Footer.jsx';

const ProtectedLayout = () => {
  return (
    <>
      <Header isLoggedIn={true} username="Soukhya" />
      <Outlet />
      <Footer />
    </>
  );
};

export default ProtectedLayout;
