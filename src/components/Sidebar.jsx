import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faBarsProgress } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

const Sidebar = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
  };
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
      style={{
        backgroundColor: "#1a1a1a",
        color: "#fff",
        position: "fixed",
        top: "0",
        left: "0",
        width: "250px",
        height: "100vh",
        overflowY: "auto",
        boxShadow: "0 0 10px rgba(0,0,0,0.15)",
        // set proper z-index
        zIndex: "1000",
      }}
    >
      <Link
        className="sidebar-brand d-flex align-items-center justify-content-center"
        to="/home-content"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">MagiFolio 🎨</div>
      </Link>

      <hr className="sidebar-divider mb-3" />

      <div className="sidebar-heading">Modify Content</div>

      <li className="nav-item">
        <Link className="nav-link" to="/home-content">
          <FontAwesomeIcon icon={faHouse} />
          <span>&nbsp; Home</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about-content">
          <FontAwesomeIcon icon={faUser} />
          <span>&nbsp;&nbsp; About</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/resume-content">
          <FontAwesomeIcon icon={faFile} />
          <span>&nbsp;&nbsp; Resume</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/certificates-content">
          <FontAwesomeIcon icon={faCertificate} />
          <span>&nbsp; Certificates</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact-content">
          <FontAwesomeIcon icon={faEnvelope} />
          <span>&nbsp;&nbsp; Contact</span>
        </Link>
      </li>

      <hr className="sidebar-divider d-none d-md-block" />

      <div className="sidebar-heading">Portfolio</div>

      <li className="nav-item">
        <Link
          className="nav-link"
          to={`/${localStorage.getItem("username")}`}
          target="_blank"
        >
          <button type="button" className="btn btn-success btn-md btn-block">
            <FontAwesomeIcon icon={faBarsProgress} />
            &nbsp;&nbsp;View Portfolio
          </button>
        </Link>
      </li>

      <hr className="sidebar-divider d-none d-md-block" />
      <div className="sidebar-heading">Logout</div>

      <li className="nav-item">
        <Link className="nav-link" to="/login">
          <button
            onClick={handleLogout}
            type="button"
            className="btn btn-danger btn-md btn-block"
          >
            <FontAwesomeIcon icon={faRightFromBracket} />
            &nbsp;&nbsp;Logout
          </button>
        </Link>
      </li>
    </ul>

    
  );
};

export default Sidebar;
