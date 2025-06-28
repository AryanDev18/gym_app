import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import TrainerList from "./components/TrainerList";
import TrainerDetail from "./components/TrainerDetail";
import GymList from "./components/GymList";
import Login from "./components/Login";
import Register from "./components/Register";
import DarkModeToggle from "./components/DarkModeToggle";

function App() {
  return (
    <Router>
      {/* Top Navigation */}
      <Navbar />
      {/* Dark Mode Toggle Button */}
      <DarkModeToggle />

      {/* Route Definitions */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trainers" element={<TrainerList />} />
        <Route path="/trainers/:id" element={<TrainerDetail />} />
        <Route path="/gyms" element={<GymList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;



