import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FetchUser } from "../utils/FetchUser";
import AOS from "aos";

const About = () => {
  const { username } = useParams();

  const [headline, setHeadline] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [firstSentenceOfSummary, setFirstSentenceOfSummary] = useState("");
  const [secondSentenceOfSummary, setSecondSentenceOfSummary] = useState("");
  const [summary, setSummary] = useState("");
  const [birthday, setBirthday] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [isFreelancer, setIsFreelancer] = useState(false);

  useEffect(() => {
    try {
      AOS.init();
      const fetchUser = async () => {
        const response = await FetchUser(username);
        setProfileImage(response.profile_pic);
        setHeadline(response.headline);

        // if the sentence has "i.e." or "e.g." in it, then dont split it
        if (
          response.summary.includes("i.e.") ||
          response.summary.includes("e.g.")
        ) {
          setSummary(response.summary);
        } else {
          setFirstSentenceOfSummary(response.summary.split(".")[0]);
          setSecondSentenceOfSummary(response.summary.split(".")[1]);
        }

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
  }, [username]);
  return (
    <>
      <section id="about" class="about">
        <div class="container">
          <div class="section-title">
            <h2>About</h2>
            <p>{firstSentenceOfSummary}</p>
          </div>

          <div class="row">
            <div class="col-lg-4" data-aos="fade-right">
              <img src={profileImage} class="img-fluid" alt="" />
            </div>
            <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3>{headline}.</h3>
              <p class="fst-italic">{
                summary.includes("i.e.") || summary.includes("e.g.") ? summary : secondSentenceOfSummary
              }</p>
              <div class="row">
                <div class="col-lg-6">
                  <ul>
                    <li>
                      <i class="bi bi-chevron-right"></i>{" "}
                      <strong>Birthday:</strong> <span>{birthday}</span>
                    </li>
                    <li>
                      <i class="bi bi-chevron-right"></i>{" "}
                      <strong>Phone:</strong> <span>{phone}</span>
                    </li>
                    <li>
                      <i class="bi bi-chevron-right"></i>{" "}
                      <strong>Country:</strong> <span>{country}</span>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-6">
                  <ul>
                    <li>
                      <i class="bi bi-chevron-right"></i> <strong>Age:</strong>{" "}
                      <span>{age}</span>
                    </li>
                    <li>
                      <i class="bi bi-chevron-right"></i>{" "}
                      <strong>Email:</strong> <span>{email}</span>
                    </li>
                    <li>
                      <i class="bi bi-chevron-right"></i>{" "}
                      <strong>Freelance:</strong>{" "}
                      <span>
                        {isFreelancer ? "Available" : "Not Available"}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
