import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;
axios.defaults.withCredentials = true;

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('isLoggedIn') === 'true'
  );
  const [blogs, setBlogs] = useState([]);
  const [input, setInput] = useState('');
  const [fromLogout, setFromLogout] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);

  // Fetch blogs & check auth in one step (auth middleware handles 401)
  const fetchBlogsAndCheckAuth = async () => {
    try {
      const { data } = await axios.get('/api/admin/get-All-blogs-admin');
      if (data.success) {
        setBlogs(data.blogs);
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', 'true');
      }
    } catch (error) {
      // If user is unauthorized
      if (error.response?.status === 401) {
        setIsLoggedIn(false);
        setBlogs([]);
        localStorage.setItem('isLoggedIn', 'false');
        navigate('/login', { replace: true });
        toast.error('Unauthorized! Please log in first.', { id: 'auth-error' });
      } else {
        toast.error(error.response?.data?.message || 'Something went wrong', { id: 'general-error' });
      }
    } finally {
      setAuthLoading(false);
    }
  };

  // Run on first mount
  useEffect(() => {
    fetchBlogsAndCheckAuth();
  }, []);

  // Handle logout
  useEffect(() => {
    if (fromLogout) {
      setFromLogout(false);
      setIsLoggedIn(false);
      setBlogs([]);
      localStorage.setItem('isLoggedIn', 'false');
      navigate('/login', { replace: true });
    }
  }, [fromLogout, navigate]);

  const value = {
    axios,
    navigate,
    isLoggedIn,
    setIsLoggedIn,
    blogs,
    setBlogs,
    input,
    setInput,
    fromLogout,
    setFromLogout,
    authLoading,
    fetchBlogsAndCheckAuth, // export for manual refresh if needed
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
