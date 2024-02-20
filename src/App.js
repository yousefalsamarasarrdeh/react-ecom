import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MasterLayout from './layouts/admin/MasterLayout';
import Home from "./components/frontend/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="Home" element={<Home/>} />
          <Route path="/admin/*" element={<MasterLayout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;