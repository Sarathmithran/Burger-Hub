import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
  const { isAuthenticated, token } = useSelector((state) => state.auth);
  
  // If authenticated, redirect to home
  if (isAuthenticated && token) {
    return <Navigate to="/" replace />;
  }

  // Otherwise render the page
  return children;
};

export default PublicRoute;