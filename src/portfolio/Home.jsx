import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FetchUser } from "../utils/FetchUser";

const Home = () => {
  const { username } = useParams();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [headlineExcludingLastWord, setHeadlineExcludingLastWord] =
    useState("");
  const [bgImage, setBgImage] = useState("");
  const [lastWordOfHeadline, setLastWordOfHeadline] = useState("");

  useEffect(() => {
    try {
      const fetchUser = async () => {
        const response = await FetchUser(username);
        setFirstName(response.first_name);
        setLastName(response.last_name);
        setHeadlineExcludingLastWord(
          response.headline.split(" ").slice(0, -1).join(" ")
        );
        setLastWordOfHeadline(response.headline.split(" ").slice(-1).join(" "));
        setBgImage(response.cover_image);
      };
      fetchUser();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <section
        id="hero"
        class="d-flex flex-column justify-content-center align-items-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          width: "100%",
        }}
      >
        <div class="hero-container" data-aos="fade-in">
          <h1>
            {firstName} {lastName}
          </h1>
          <p>
            {headlineExcludingLastWord}{" "}
            <span class="typed">{lastWordOfHeadline}</span>
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
