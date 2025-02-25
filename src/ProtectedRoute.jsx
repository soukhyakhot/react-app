import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ isAuthenticated, children }) => {
  // Check authentication state
  const token = localStorage.getItem('authToken');

  if (!isAuthenticated && !token) {
    return <Navigate to="/login-signup" replace />;
  }

  return children;
};

export default ProtectedRoute;
