import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BuyCredit from "./pages/BuyCredit";
import Result from "./pages/Result";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div
      className="px-4 sm:px-10 md:px-14 lg:px-28
    min-h-screen bg-gradient-to-b from-teal-50 to-orange-50"
    >
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<BuyCredit />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  );
};

export default App;
