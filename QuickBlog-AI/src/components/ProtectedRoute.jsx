import { Navigate, Outlet } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const ProtectedRoute = () => {
  const { isLoggedIn, authLoading } = useAppContext();

  if (authLoading) {
    // Show loading indicator while checking auth status (prevents redirect flicker)
    return <div>Loading...</div>;
  }

  // Only render Outlet (protected content) if authenticated, otherwise redirect to login
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
