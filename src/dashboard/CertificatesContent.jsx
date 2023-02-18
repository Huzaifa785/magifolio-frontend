import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { FetchUser } from "../utils/FetchUser";
import { UpdateUser } from "../utils/UpdateUser";

const CertificatesContent = () => {
  const [certifications, setCertifications] = useState([]);

  const handleUpdate = async () => {
    try {
      const userDetails = {
        certifications: certifications,
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
        setCertifications(response.certifications);
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
                Certificates Content
              </h1>

              <div className="row">
                <div className="row mt-2">
                  {certifications.map((certification, index) => {
                    return (
                      <div className="col-lg-8">
                        <div className="card shadow mb-4">
                          <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">
                              Certificate {index + 1}
                            </h6>
                          </div>
                          <div className="card-body">
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <label htmlFor="certification-title">
                                    Title
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="certification-title"
                                    placeholder="Enter title"
                                    value={certification.name}
                                    onChange={(e) => {
                                      const newCertifications = [
                                        ...certifications,
                                      ];
                                      newCertifications[index].name =
                                        e.target.value;
                                      setCertifications(newCertifications);
                                    }}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <label htmlFor="certification-issuer">
                                    Issuer
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="certification-issuer"
                                    placeholder="Enter issuer"
                                    value={certification.authority}
                                    onChange={(e) => {
                                      const newCertifications = [
                                        ...certifications,
                                      ];
                                      newCertifications[index].authority =
                                        e.target.value;
                                      setCertifications(newCertifications);
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <label htmlFor="certification-start-date">
                                    Start Date
                                  </label>
                                  <input
                                    type="date"
                                    className="form-control"
                                    id="certification-start-date"
                                    placeholder="Enter start date"
                                    value={
                                      certification.starts_at.year +
                                      "-" +
                                      certification.starts_at.month +
                                      "-" +
                                      certification.starts_at.day
                                    }
                                    onChange={(e) => {
                                      const newCertifications = [
                                        ...certifications,
                                      ];
                                      newCertifications[index].starts_at.year =
                                        e.target.value.split("-")[0];
                                      newCertifications[index].starts_at.month =
                                        e.target.value.split("-")[1];
                                      newCertifications[index].starts_at.day =
                                        e.target.value.split("-")[2];
                                      setCertifications(newCertifications);
                                    }}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <label htmlFor="certification-end-date">
                                    End Date
                                  </label>
                                  <input
                                    type="date"
                                    className="form-control"
                                    id="certification-end-date"
                                    placeholder="Enter end date"
                                    value={
                                      certification.ends_at.year +
                                      "-" +
                                      certification.ends_at.month +
                                      "-" +
                                      certification.ends_at.day
                                    }
                                    onChange={(e) => {
                                      const newCertifications = [
                                        ...certifications,
                                      ];
                                      newCertifications[index].ends_at.year =
                                        e.target.value.split("-")[0];
                                      newCertifications[index].ends_at.month =
                                        e.target.value.split("-")[1];
                                      newCertifications[index].ends_at.day =
                                        e.target.value.split("-")[2];
                                      setCertifications(newCertifications);
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="form-group">
                                  <label htmlFor="certification-url">URL</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="certification-url"
                                    placeholder="Enter url"
                                    value={certification.url}
                                    onChange={(e) => {
                                      const newCertifications = [
                                        ...certifications,
                                      ];
                                      newCertifications[index].url =
                                        e.target.value;
                                      setCertifications(newCertifications);
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
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

export default CertificatesContent;
