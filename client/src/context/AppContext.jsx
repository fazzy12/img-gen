/* eslint-disable no-unused-vars */
import React, {
  useState,
  createContext,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [credit, setCredit] = useState(false);

  const backendUrl = import.meta.env.VITE_BACKEND_URL; 

  const navigate = useNavigate()

  if (!backendUrl) {
    console.error("Backend URL is not defined in environment variables.");
  }
  const loadCreditData = useCallback(async () => {
    try {
      const { data } = await axios.get(backendUrl + '/api/user/credits', {
        headers: {token}});

      if (data.success) {
        setCredit(data.credits);
        setUser(data.user);
      }
    } catch (e) {
      console.error(e);
      toast.error(e.message);
    }
  }, [backendUrl, token]);


  const generateImage = useCallback(async (prompt) => {
    try {
      const { data } = await axios.post(
        'backendUrl + /api/images/generate-image', 
        { prompt }, 
        { headers: { token } }
      );

      if (data.success) {
        loadCreditData();
        return data.resultImage;
      } else {
        toast.error(data.message);
        loadCreditData();
        if (data.creditBalance === 0) {
          navigate('/buy');
        }
      }
    } catch (e) {
      toast.error(e.message);
    }
  }, [loadCreditData, navigate, token]);


  const logout = () => {
    setToken("");
    setUser(null);
    localStorage.removeItem("token");
  };

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
      loadCreditData();
    } else {
      localStorage.removeItem("token");
    }
  }, [token, loadCreditData]);

  const value = useMemo(
    () => ({
      user,
      setUser,
      showLogin,
      setShowLogin,
      backendUrl,
      token,
      setToken,
      credit,
      setCredit,
      loadCreditData,
      logout,
      generateImage,
    }),
    [user, showLogin, backendUrl, token, credit, loadCreditData, generateImage,]
  );

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppContextProvider;
