import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FetchUser } from "../utils/FetchUser";

const PortfolioSidebar = () => {
  const { username } = useParams();
  const [profilePic, setProfilePic] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [githubUrl, setGithubUrl] = useState("");
  const [email, setEmail] = useState("");
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await FetchUser(username);
      setProfilePic(response.profile_pic);
      setFirstName(response.first_name);
      setLastName(response.last_name);
      setLinkedinUrl(response.linkedin_url);
      setGithubUrl(response.github);
      setEmail(response.email);
      setCertifications(response.certifications);
    };
    fetchUser();
  }, []);

  return (
    <>
      <header id="header">
        <div className="d-flex flex-column">
          <div className="profile">
            <img src={profilePic} alt="" className="img-fluid rounded-circle" />
            <h1 className="text-light">
              <Link to={`/${username}`}>
                {firstName} {lastName}
              </Link>
            </h1>
            <div className="social-links mt-3 text-center">
              <Link to={`${linkedinUrl}`} className="linkedin" target="_blank">
                <i className="bx bxl-linkedin"></i>
              </Link>
              <Link to={`${githubUrl}`} className="github" target="_blank">
                <i className="bx bxl-github"></i>
              </Link>
              <Link
                to="#"
                className="google-plus"
                target="_blank"
                onClick={() => window.open(`mailto:${email}`, "_blank")}
              >
                <i className="bx bxl-google-plus"></i>
              </Link>
            </div>
          </div>

          <nav id="navbar" className="nav-menu navbar">
            <ul>
              <li>
                <a href="#hero" className="nav-link scrollto">
                  <i className="bx bx-home"></i> <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#about" className="nav-link scrollto">
                  <i className="bx bx-user"></i> <span>About</span>
                </a>
              </li>
              <li>
                <a href="#resume" className="nav-link scrollto">
                  <i className="bx bx-file-blank"></i> <span>Resume</span>
                </a>
              </li>
              {
                // if the user has any certifications, then show a link to them
                certifications.length > 0 && (
                  <li>
                    <a href="#certifications" className="nav-link scrollto">
                      <i className="bx bx-certification"></i>{" "}
                      <span>Certifications</span>
                    </a>
                  </li>
                )
              }
              <li>
                <a href="#contact" className="nav-link scrollto">
                  <i className="bx bx-envelope"></i> <span>Contact</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default PortfolioSidebar;
