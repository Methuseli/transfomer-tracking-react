import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import Transformers from "./components/dashboard/Transformers";
import Cables from "./components/dashboard/Cables";
import Manholes from "./components/dashboard/Manholes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/transformers" element={<Transformers />} />
      <Route path="/manholes" element={<Manholes />} />
      <Route path="/cables" element={<Cables />} />
    </Routes>
  );
}

export default App;
