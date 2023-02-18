import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import AboutContent from "./dashboard/AboutContent";
import ContactContent from "./dashboard/ContactContent";
import HomeContent from "./dashboard/HomeContent";
import CertificatesContent from "./dashboard/CertificatesContent";
import ResumeContent from "./dashboard/ResumeContent";
import Landing from "./Landing";
import PrivateRoutes from "./utils/PrivateRoutes";
import Main from "./portfolio/Main";

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/home-content" element={<HomeContent />} />
          <Route path="/about-content" element={<AboutContent />} />
          <Route path="/resume-content" element={<ResumeContent />} />
          <Route
            path="/certificates-content"
            element={<CertificatesContent />}
          />
          <Route path="/contact-content" element={<ContactContent />} />
        </Route>

        <Route path="/" element={<Landing />} />
        <Route path="/:username" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
