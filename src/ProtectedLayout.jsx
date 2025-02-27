import { Outlet } from 'react-router-dom';
import Header from './Header/Header.jsx';
import Footer from './Footer.jsx';

const ProtectedLayout = ({isAuthenticated, username, setIsAuthenticated }) => {
  return (
    <>
      <Header isAuthenticated={isAuthenticated} username={username} setIsAuthenticated={setIsAuthenticated} />
      <Outlet />
      <Footer />
    </>
  );
};

export default ProtectedLayout;
