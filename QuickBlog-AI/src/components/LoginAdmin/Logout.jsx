import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../../context/AppContext";

const LogoutAdmin = () => {
  const navigate = useNavigate();
  const { axios, setIsLoggedIn } = useAppContext();

  const handleLogout = async () => {
    try {
      const res = await axios.post("/api/admin/logout");

      if (res.data.success) {
        setIsLoggedIn(false);
        toast.success(res.data.message || "Logged out successfully");
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  useEffect(() => {
    handleLogout();
  }, []);

  return null;
};

export default LogoutAdmin;
