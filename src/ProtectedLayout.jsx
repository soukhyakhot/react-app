import { Outlet } from 'react-router-dom';
import Header from './Header/Header.jsx';
import Footer from './Footer.jsx';

const ProtectedLayout = ({isAuthenticated, username }) => {
  return (
    <>
      <Header isAuthenticated={isAuthenticated} username={username} />
      <Outlet />
      <Footer />
    </>
  );
};

export default ProtectedLayout;
