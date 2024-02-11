import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Movies from "./pages/Movies";
import Booking from "./pages/Tickets";

function App() {
  return (
    <Router>
      <Routes>
          <Route index element={<Home />} />
          <Route path="login" element={<Login /> } />
          <Route path="register" element={<Register />} />
          <Route path="movies" element={<Movies />} />
          <Route path="tickets" element={<Booking />} />
      </Routes>
  </Router>
  )
}

export default App
