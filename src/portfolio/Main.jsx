import React from "react";
import PortfolioSidebar from "../components/PortfolioSidebar";
import Home from "./Home";
import Footer from "../components/PortfolioFooter";
import About from "./About";
import Resume from "./Resume";
import Certifications from "./Certifications";
import Contact from "./Contact";

const Main = () => {
  return (
    <>
      <i class="bi bi-list mobile-nav-toggle d-xl-none"></i>
      <PortfolioSidebar />

      <div>
        <Home />
      </div>

      <main id="main">
        <About />
        <Resume />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default Main;
