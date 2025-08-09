import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../../context/AppContext";

const LogoutAdmin = () => {
  const navigate = useNavigate();
  const { axios, setIsLoggedIn, setFromLogout } = useAppContext();

  const handleLogout = async () => {
    try {
      const res =await axios.post("/api/admin/logout", {}, { withCredentials: true });

      if (res.data.success) {
        setIsLoggedIn(false);
        setFromLogout(true);
        toast.success(res.data.message || "Logged out successfully");
        navigate("/login");
      } 
    }
     catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  useEffect(() => {
    handleLogout();
  }, []);

  return null;
};

export default LogoutAdmin;
