import { Navigate, Outlet } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

    export const ProtectedRoute = () => {
       const { isLoggedIn, authLoading } = useAppContext();

       if (authLoading) {
         return <div>Loading...</div>;
       }

       return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
     };
