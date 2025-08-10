import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;
axios.defaults.withCredentials = true;

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    // Initialize isLoggedIn from localStorage if available
    return localStorage.getItem('isLoggedIn') === 'true';
  });
  const [blogs, setBlogs] = useState([]);
  const [input, setInput] = useState('');
  const [fromLogout, setFromLogout] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);

  const fetchBlogs = async () => {
    try {
      const { data } = await axios.get('/api/admin/get-All-blogs-admin');
      if (data.success) {
        setBlogs(data.blogs);
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', 'true'); // Persist login state
      }
    } catch (error) {
      if (error.response?.status === 401) {
        setIsLoggedIn(false);
        localStorage.setItem('isLoggedIn', 'false');
        navigate('/login', { replace: true });
        toast.error('Unauthorized! Please log in first.', { id: 'auth-error' });
      } else {
        toast.error(error.response?.data?.message || 'Something went wrong', { id: 'general-error' });
      }
    }
  };

  useEffect(() => {
    const checkAuthAndFetchBlogs = async () => {
      // Skip API call if not logged in and no cookies are present
      const hasAuthCookie = document.cookie.includes('your-auth-cookie-name'); // Replace with actual cookie name
      if (!isLoggedIn && !hasAuthCookie) {
        setAuthLoading(false);
        localStorage.setItem('isLoggedIn', 'false');
        navigate('/login', { replace: true });
        return;
      }

      try {
        setAuthLoading(true);
        const { data } = await axios.get('/api/admin/get-All-blogs-admin');
        if (data.success) {
          setBlogs(data.blogs);
          setIsLoggedIn(true);
          localStorage.setItem('isLoggedIn', 'true');
        }
      } catch (error) {
        setIsLoggedIn(false);
        localStorage.setItem('isLoggedIn', 'false');
        if (error.response?.status === 401) {
          navigate('/login', { replace: true });
          toast.error('Unauthorized! Please log in first.', { id: 'auth-error' });
        } else {
          toast.error(error.response?.data?.message || 'Failed to authenticate', { id: 'general-error' });
        }
      } finally {
        setAuthLoading(false);
      }
    };
    checkAuthAndFetchBlogs();
  }, []);

  useEffect(() => {
    if (fromLogout) {
      setFromLogout(false);
      setIsLoggedIn(false);
      setBlogs([]);
      localStorage.setItem('isLoggedIn', 'false');
      navigate('/login', { replace: true });
    } else if (isLoggedIn) {
      fetchBlogs();
    }
  }, [fromLogout]);

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
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);