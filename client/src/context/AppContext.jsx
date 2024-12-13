/* eslint-disable no-unused-vars */
import React, { useState, createContext } from "react";
import PropTypes from "prop-types";

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false)

  const value = {
    user,
    setUser,
    showLogin,
    setShowLogin,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppContextProvider;
