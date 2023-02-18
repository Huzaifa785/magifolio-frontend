import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { FetchUser } from "../utils/FetchUser";
import { UpdateUser } from "../utils/UpdateUser";

const AboutContent = () => {
  const [summary, setSummary] = useState("");
  const [headline, setHeadline] = useState("");
  const [birthday, setBirthday] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [isFreelancer, setIsFreelancer] = useState(false);

  const handleUpdate = async () => {
    try {
      const userDetails = {
        summary: summary,
        headline: headline,
        birthday: birthday,
        age: age,
        phone: phone,
        email: email,
        country: country,
        is_freelancer: isFreelancer,
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
        setSummary(response.summary);
        setHeadline(response.headline);
        setBirthday(response.birthday);
        setAge(response.age);
        setPhone(response.phone);
        setEmail(response.email);
        setCountry(response.country);
        setIsFreelancer(response.is_freelancer);
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
            <div className="container-fluid" style={{ margin: "3em" }}>
              <h1 className="h3 text-gray-800">About Content</h1>

              <div className="row">
                <div className="row mt-2 col-lg-8">
                  <div className="col-lg-12">
                    <label htmlFor="name">Summary</label>
                    <textarea
                      className="form-control"
                      id="summary"
                      rows="7"
                      value={summary}
                      onChange={(e) => setSummary(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="col-lg-6 mt-3">
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
                  <div className="col-lg-6 mt-3">
                    <label htmlFor="name">Birthday</label>
                    <input
                      type="date"
                      className="form-control"
                      id="birthday"
                      placeholder="Enter birthday"
                      value={birthday}
                      onChange={(e) => setBirthday(e.target.value)}
                    />
                  </div>
                  <div className="col-lg-6 mt-3">
                    <label htmlFor="name">Age</label>
                    <input
                      type="number"
                      className="form-control"
                      id="age"
                      placeholder="Enter age"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                    />
                  </div>
                  <div className="col-lg-6 mt-3">
                    <label htmlFor="name">Phone</label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      placeholder="Enter phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="col-lg-6 mt-3">
                    <label htmlFor="name">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="col-lg-6 mt-3">
                    <label htmlFor="name">Country</label>
                    <input
                      type="text"
                      className="form-control"
                      id="country"
                      placeholder="Enter country"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                    />
                  </div>
                  <div className="col-lg-6 mt-3">
                    <label htmlFor="name">Is Freelancer</label>
                    <br />
                    <input
                      type="checkbox"
                      id="isFreelancer"
                      checked={isFreelancer}
                      onChange={(e) => setIsFreelancer(e.target.checked)}
                      style={{ width: "20px", height: "20px" }}
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

export default AboutContent;
