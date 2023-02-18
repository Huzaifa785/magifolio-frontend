import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { FetchUser } from "../utils/FetchUser";
import { UpdateUser } from "../utils/UpdateUser";

const ContactContent = () => {
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [profile_pic, setProfilePic] = useState("");

  const handleUpdate = async () => {
    try {
      const userDetails = {
        linkedin: linkedin,
        github: github,
        email: email,
        phone: phone,
        profile_pic: profile_pic,
      };

      const response = await UpdateUser(userDetails);

      if (response) {
        document.getElementById("success-msg").innerHTML =
          "Successfully updated!";
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    try {
      const fetchUser = async () => {
        const response = await FetchUser(localStorage.getItem("username"));
        setLinkedin(response.linkedin_url);
        setGithub(response.github);
        setEmail(response.email);
        setPhone(response.phone);
        setProfilePic(response.profile_pic);
      };
      fetchUser();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <div id="wrapper">
        <Sidebar />
        <div
          id="content-wrapper"
          className="d-flex flex-column"
          style={{ marginLeft: "12em" }}
        >
          <div id="content">
            <div className="container-fluid m-5">
              <h1 className="h3 text-gray-800" style={{ marginLeft: "-13px" }}>
                Contact Content
              </h1>

              <div className="row">
                <div className="row mt-2">
                  <div className="col-lg-8">
                    <div className="form-group">
                      <label htmlFor="linkedin">LinkedIn</label>
                      <input
                        type="text"
                        className="form-control"
                        id="linkedin"
                        value={linkedin}
                        onChange={(e) => setLinkedin(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="form-group">
                      <label htmlFor="github">Github</label>
                      <input
                        type="text"
                        className="form-control"
                        id="github"
                        value={github}
                        onChange={(e) => setGithub(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="form-group">
                      <label htmlFor="phone">Phone</label>
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="form-group">
                      <label htmlFor="profile_pic">Profile Picture</label>
                      <input
                        type="text"
                        className="form-control"
                        id="profile_pic"
                        value={profile_pic}
                        onChange={(e) => setProfilePic(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <p id="success-msg" style={{ color: "green" }}></p>
              </div>

              <div className="row mt-3">
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Update 🚀"
                  onClick={handleUpdate}
                  style={{ width: "10em", marginLeft: "0.8em" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactContent;
