import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { FetchUser } from "../utils/FetchUser";
import { UpdateUser } from "../utils/UpdateUser";

const ResumeContent = () => {
  // Summary
  const [summary, setSummary] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  // Education
  const [education, setEducation] = useState([]);

  // Experience
  const [experience, setExperience] = useState([]);

  const handleUpdate = async () => {
    try {
      const userDetails = {
        summary: summary,
        first_name: firstName,
        last_name: lastName,
        country: country,
        phone: phone,
        email: email,
        education: education,
        experience: experience,
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
        setFirstName(response.first_name);
        setLastName(response.last_name);
        setCountry(response.country);
        setPhone(response.phone);
        setEmail(response.email);
        setEducation(response.education);
        setExperience(response.experience);
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
              <h1 className="h3 text-gray-900">Resume Content</h1>

              <div className="row mt-4">
                <div className="row mt-2 col-lg-8">
                  <h1
                    className="h4 text-gray-800"
                    style={{ marginLeft: "10px" }}
                  >
                    1.) Summary <br />
                  </h1>
                  <div className="row ml-2 mt-3">
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
                      <label htmlFor="name">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="first-name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                    <div className="col-lg-6 mt-3">
                      <label htmlFor="name">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="last-name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                    <div className="col-lg-6 mt-3">
                      <label htmlFor="name">Country</label>
                      <input
                        type="text"
                        className="form-control"
                        id="country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                      />
                    </div>
                    <div className="col-lg-6 mt-3">
                      <label htmlFor="name">Phone</label>
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                    <div className="col-lg-6 mt-3">
                      <label htmlFor="name">Email</label>
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mt-4">
                <div className="row mt-2 col-lg-8">
                  <h1
                    className="h4 text-gray-800"
                    style={{ marginLeft: "10px" }}
                  >
                    2.) Education <br />
                  </h1>
                  {education.map((edu, index) => {
                    return (
                      <div className="row ml-2" key={index}>
                        <h1 className="h5 text-gray-700 mt-4">
                          {index + 1}.) {edu.school}
                        </h1>
                        <div className="col-lg-12">
                          <label htmlFor="name">School</label>
                          <input
                            type="text"
                            className="form-control"
                            id="school"
                            value={edu.school}
                            onChange={(e) => {
                              const values = [...education];
                              values[index].school = e.target.value;
                              setEducation(values);
                            }}
                          />
                        </div>
                        <div className="col-lg-12 mt-3">
                          <label htmlFor="name">Field of Study</label>
                          <input
                            type="text"
                            className="form-control"
                            id="field-of-study"
                            value={edu.field_of_study}
                            onChange={(e) => {
                              const values = [...education];
                              values[index].field_of_study = e.target.value;
                              setEducation(values);
                            }}
                          />
                        </div>
                        <div className="col-lg-6 mt-3">
                          <label htmlFor="name">Start Date</label>
                          <input
                            type="date"
                            className="form-control"
                            id="start-date"
                            value={
                              edu.starts_at.year +
                              "-" +
                              edu.starts_at.month +
                              "-" +
                              edu.starts_at.day
                            }
                            onChange={(e) => {
                              const values = [...education];
                              values[index].starts_at.day =
                                e.target.value.split("-")[2];
                              values[index].starts_at.month =
                                e.target.value.split("-")[1];
                              values[index].starts_at.year =
                                e.target.value.split("-")[0];
                              setEducation(values);
                            }}
                          />
                        </div>
                        <div className="col-lg-6 mt-3">
                          <label htmlFor="name">End Date</label>
                          <input
                            type="date"
                            className="form-control"
                            id="end-date"
                            value={
                              edu.ends_at.year +
                              "-" +
                              edu.ends_at.month +
                              "-" +
                              edu.ends_at.day
                            }
                            onChange={(e) => {
                              const values = [...education];
                              values[index].ends_at.day =
                                e.target.value.split("-")[2];
                              values[index].ends_at.month =
                                e.target.value.split("-")[1];
                              values[index].ends_at.year =
                                e.target.value.split("-")[0];
                              setEducation(values);
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="row mt-4">
                <div className="row mt-2 col-lg-8">
                  <h1
                    className="h4 text-gray-800"
                    style={{ marginLeft: "10px" }}
                  >
                    3.) Experience <br />
                  </h1>
                  {experience.map((exp, index) => {
                    return (
                      <div className="row ml-2" key={index}>
                        <h1 className="h5 text-gray-700 mt-4">
                          {index + 1}.) {exp.company}
                        </h1>
                        <div className="col-lg-12">
                          <label htmlFor="name">Company</label>
                          <input
                            type="text"
                            className="form-control"
                            id="company"
                            value={exp.company}
                            onChange={(e) => {
                              const values = [...experience];
                              values[index].company = e.target.value;
                              setExperience(values);
                            }}
                          />
                        </div>
                        <div className="col-lg-12 mt-3">
                          <label htmlFor="name">Position</label>
                          <input
                            type="text"
                            className="form-control"
                            id="position"
                            value={exp.title}
                            onChange={(e) => {
                              const values = [...experience];
                              values[index].title = e.target.value;
                              setExperience(values);
                            }}
                          />
                        </div>
                        <div className="col-lg-12 mt-3">
                          <label htmlFor="name">Description</label>
                          <textarea
                            type="text"
                            className="form-control"
                            id="description"
                            value={exp.description}
                            onChange={(e) => {
                              const values = [...experience];
                              values[index].description = e.target.value;
                              setExperience(values);
                            }}
                          />
                        </div>

                        <div className="col-lg-6 mt-3">
                          <label htmlFor="name">Start Date</label>
                          <input
                            type="date"
                            className="form-control"
                            id="start-date"
                            value={
                              exp.starts_at.year +
                              "-" +
                              exp.starts_at.month +
                              "-" +
                              exp.starts_at.day
                            }
                            onChange={(e) => {
                              const values = [...experience];
                              values[index].starts_at.day =
                                e.target.value.split("-")[2];
                              values[index].starts_at.month =
                                e.target.value.split("-")[1];
                              values[index].starts_at.year =
                                e.target.value.split("-")[0];
                              setExperience(values);
                            }}
                          />
                        </div>
                        <div className="col-lg-6 mt-3">
                          <label htmlFor="name">End Date</label>
                          <input
                            type="date"
                            className="form-control"
                            id="end-date"
                            value={
                              exp.ends_at.year +
                              "-" +
                              exp.ends_at.month +
                              "-" +
                              exp.ends_at.day
                            }
                            onChange={(e) => {
                              const values = [...experience];
                              values[index].ends_at.day =
                                e.target.value.split("-")[2];
                              values[index].ends_at.month =
                                e.target.value.split("-")[1];
                              values[index].ends_at.year =
                                e.target.value.split("-")[0];
                              setExperience(values);
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="row mt-3">
                <p id="success-msg" style={{ color: "green" }}></p>
              </div>

              <div className="row mt-3 ml-2">
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

export default ResumeContent;
