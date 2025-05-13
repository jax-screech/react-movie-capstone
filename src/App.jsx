import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import Login from "./pages/Signin.jsx";
import Signup from "./pages/Signup.jsx";
import HomePage from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Account from "./pages/Account.jsx";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
