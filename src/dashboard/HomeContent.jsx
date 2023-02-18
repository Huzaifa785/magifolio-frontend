import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { FetchUser } from "../utils/FetchUser";
import { UpdateUser } from "../utils/UpdateUser";

const HomeContent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [headline, setHeadline] = useState("");
  const [bgImage, setBgImage] = useState("");

  const handleUpdate = async () => {
    try {
      const userDetails = {
        first_name: firstName,
        last_name: lastName,
        headline: headline,
        cover_image: bgImage,
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
        setFirstName(response.first_name);
        setLastName(response.last_name);
        setHeadline(response.headline);
        setBgImage(response.cover_image);
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
                Home Content
              </h1>

              <div className="row">
                <div className="row mt-2">
                  <div className="col-lg-8">
                    <label htmlFor="name">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstname"
                      placeholder="Enter first name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="col-lg-8">
                    <label htmlFor="name">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastname"
                      placeholder="Enter last name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                  <div className="col-lg-8 mt-3">
                    <label htmlFor="name">Headline</label>
                    <input
                      type="text"
                      className="form-control"
                      id="headline"
                      placeholder="Enter headline"
                      value={headline}
                      onChange={(e) => setHeadline(e.target.value)}
                    />
                  </div>
                  <div className="col-lg-8 mt-3">
                    <label htmlFor="name">Background Image</label>
                    <input
                      type="text"
                      className="form-control"
                      id="bgImage"
                      placeholder="Enter background image URL"
                      value={bgImage}
                      onChange={(e) => setBgImage(e.target.value)}
                    />
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

export default HomeContent;
