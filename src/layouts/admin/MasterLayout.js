import React from "react";
import '../../assets/admin/css/styles.css';
import '../../assets/admin/js/scripts.js';
import Navbar from './Navbar';
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { Routes, Route, Navigate } from "react-router-dom";
import routers from "../../routes/routes.js";

const MasterLayout = () => {
  return (
    <div className="sb-nav-fixed">
      <Navbar />
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <Sidebar />
        </div>
        <div id="layoutSidenav_content">
          <main>
            <Routes>
              {routers.map((route, idx) => (
                <Route key={idx} path={route.path} element={route.element} />
              ))}
              {/* Redirect /admin to /admin/dashboard */}
              <Route path="/" element={<Navigate to="dashboard" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default MasterLayout;