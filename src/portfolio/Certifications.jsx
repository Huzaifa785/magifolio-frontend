import React, { useState, useEffect } from "react";
import { FetchUser } from "../utils/FetchUser";
import { Link, useParams } from "react-router-dom";
import CertIcon from "./cert-icon.png";

const Certifications = () => {
  const { username } = useParams();
  const [certifications, setCertifications] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      const response = await FetchUser(username);
      setCertifications(response.certifications);
    };
    fetchUser();
  }, []);

  return (
    <>
      <section id="certifications" class="certifications">
        <div class="container">
          <div class="section-title">
            <h2>Certifications</h2>
          </div>
          <div class="row">
            {/* build beautiful cards with shadow */}
            {certifications.map((certification, index) => {
              return (
                <div class="col-lg-4" data-aos="fade-up">
                  <div
                    class="card shadow mt-2"
                    // add a certificate badge to the top right corner of the card
                    style={{
                      position: "relative",
                    }}
                  >
                    <img
                      src={CertIcon}
                      alt="certificate"
                      style={{
                        position: "absolute",
                        bottom: "0",
                        right: "0",
                        width: "50px",
                        height: "50px",
                        opacity: "0.5",
                        marginRight: "10px",
                        marginBottom: "10px",
                      }}
                    />
                    <div class="card-body">
                      <h5 class="card-title font-weight-bold">
                        {certification.name}
                      </h5>
                      <p class="card-text">
                        License ID: {certification.license_number}
                      </p>
                      <p class="card-text">{certification.authority}</p>
                      <p class="card-text">{certification.ends_at.year}</p>
                      {
                        // if the user has a certificate url, then show a link to it
                        certification.url && (
                          <Link
                            target="_blank"
                            to={certification.url}
                            class="btn btn-primary"
                            style={{
                              cursor: "pointer",
                            }}
                          >
                            View Certificate
                          </Link>
                        )
                      }
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Certifications;
