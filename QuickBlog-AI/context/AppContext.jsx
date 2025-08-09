import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;
axios.defaults.withCredentials = true; // ✅ send cookies automatically

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [input, setInput] = useState("");
  const [fromLogout, setFromLogout] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);

  const fetchBlogs = async () => {
    try {
      const { data } = await axios.get("/api/admin/get-All-blogs-admin");

      if (data.success) {
        setBlogs(data.blogs);
      }
    } 
    catch (error) {
      if (error.response?.status === 401) {
        toast.error("Unauthorized! Please log in first.");
        setIsLoggedIn(false);
        navigate("/login");
      }
       else {
        toast.error(error.response?.data?.message || "Something went wrong");
      }
    }
  };

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data } = await axios.get("/api/admin/get-All-blogs-admin");
        if (data.success) {
          setBlogs(data.blogs);
          setIsLoggedIn(true);
        }
      } catch (error) {
        setIsLoggedIn(false);
      } finally {
        setAuthLoading(false);
      }
    };
    checkAuth();
  }, []);

  useEffect(() => {
    if (fromLogout) {
      setFromLogout(false);
    }
    if (isLoggedIn) {
      fetchBlogs();
    }
  }, [isLoggedIn, fromLogout]);

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
    authLoading
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);