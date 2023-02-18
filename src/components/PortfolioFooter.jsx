import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { FetchUser } from "../utils/FetchUser";

const PortfolioFooter = () => {
    const { username } = useParams();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    useEffect(() => {
        try {
            const fetchUser = async () => {
                const response = await FetchUser(username);
                setFirstName(response.first_name);
                setLastName(response.last_name);
            };
            fetchUser();
        } catch (error) {
            console.log(error);
        }
    }, []);

  return (
    <>
      <footer id="footer">
        <div class="container">
          <div class="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>{firstName} {lastName}</span>
            </strong>
          </div>
          <div class="copyright">
            Designed By
            <strong>
              <span>MagiFolio</span>
            </strong>
          </div>
        </div>
      </footer>
    </>
  );
};

export default PortfolioFooter;
