import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Signin";
import Signup from "./pages/Signup";
import Movies from "./pages/Movies";
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* Protected Movies page */}
        <Route path="/movies" element={
          <PrivateRoute>
            <Movies />
          </PrivateRoute>
        } />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
