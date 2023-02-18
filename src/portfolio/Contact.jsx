import React, { useState, useEffect } from "react";
import { FetchUser } from "../utils/FetchUser";
import { useParams } from "react-router-dom";

const Contact = () => {
  const { username } = useParams();
  const [email, setEmail] = useState("");
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [isFreelancer, setIsFreelancer] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await FetchUser(username);
      setEmail(response.email);
      setGithub(response.github);
      setLinkedin(response.linkedin_url);
      setPhone(response.phone);
      setLocation(response.country);
      setIsFreelancer(response.is_freelancer);
    };
    fetchUser();
  }, []);

  return (
    <>
      <section id="contact" class="contact">
        <div class="container">
          <div class="section-title">
            <h2>Contact</h2>
          </div>
          <div class="row" data-aos="fade-in">
            <div class="col-lg-6 d-flex align-items-stretch">
              <div class="info">
                <div class="address">
                  <i class="bi bi-geo-alt"></i>
                  <h4>Location:</h4>
                  <p>{location}</p>
                </div>

                <div class="email">
                  <i class="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>{email}</p>
                </div>

                <div class="phone">
                  <i class="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>{phone}</p>
                </div>
              </div>
            </div>

            <div class="col-lg-6 d-flex align-items-stretch">
              <div class="info">
                <div class="address">
                  <i class="bi bi-linkedin"></i>
                  <h4>Linkedin:</h4>
                  <p>{linkedin}</p>
                </div>

                <div class="email">
                  <i class="bi bi-envelope"></i>
                  <h4>Github:</h4>
                  <p>{github}</p>
                </div>

                <div class="phone">
                  <i class="bi bi-phone"></i>
                  <h4>Freelance:</h4>
                  <p>{isFreelancer ? "Available" : "Not Available"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
