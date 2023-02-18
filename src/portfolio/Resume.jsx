import React, { useEffect, useState } from "react";
import AOS from "aos";
import { FetchUser } from "../utils/FetchUser";
import { useParams } from "react-router-dom";

const Resume = () => {
  const { username } = useParams();
  const [firstSentenceOfSummary, setFirstSentenceOfSummary] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  useEffect(() => {
    AOS.init();
    const fetchUser = async () => {
      const response = await FetchUser(username);
      setFirstName(response.first_name);
      setLastName(response.last_name);
      setCountry(response.country);
      setPhone(response.phone);
      setEmail(response.email);
      setFirstSentenceOfSummary(response.summary.split(".")[0]);
      setEducation(response.education);
      setExperience(response.experience);
    };
    fetchUser();
  }, []);
  return (
    <>
      <section id="resume" class="resume">
        <div class="container">
          <div class="section-title">
            <h2>Resume</h2>
          </div>

          <div class="row">
            <div class="col-lg-6" data-aos="fade-up">
              <h3 class="resume-title">Summary</h3>
              <div class="resume-item pb-0">
                <h4>
                  {firstName} {lastName}
                </h4>
                <p>
                  <em>{firstSentenceOfSummary}</em>
                </p>
                <ul>
                  <li>{country}</li>
                  {phone && <li>{phone}</li>}
                  <li>{email}</li>
                </ul>
              </div>

              <h3 class="resume-title">Education</h3>
              {education.map((edu, index) => {
                return (
                  <div class="resume-item">
                    <h4>{edu.field_of_study}</h4>
                    <h5>
                      {
                        // if the user has set start and end dates, then show them
                        edu.starts_at.year && edu.ends_at.year && (
                          <>
                            {edu.starts_at.year} - {edu.ends_at.year}
                          </>
                        )
                      }
                    </h5>
                    <p>
                      <em>{edu.school}</em>
                    </p>
                    <p>{edu.description}</p>
                  </div>
                );
              })}
            </div>
            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <h3 class="resume-title">Professional Experience</h3>
              {experience.map((exp, index) => {
                return (
                  <div class="resume-item">
                    <h4>{exp.title}</h4>
                    <h5>
                      {exp.starts_at.year} -{" "}
                      {exp.ends_at.year ? exp.ends_at.year : "Present"}
                    </h5>
                    <p>
                      <em>{exp.company}</em>
                    </p>
                    <p>{exp.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
