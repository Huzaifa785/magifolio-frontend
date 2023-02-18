import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AxiosInstance } from "../utils/AxiosInstance";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Logging in user\n", {
        email,
        password,
      });
      const response = await AxiosInstance.post("/users/login", {
        email: email,
        password: password,
      });
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("username", response.data.username);
      console.log("User logged in!\n", response.data);
      navigate("/home-content");
    } catch (error) {
      setErrors("Invalid credentials! Please try again!");
      console.log("Error logging in user!!!!\n", error.response.data);
    }
  };

  return (
    <div
      className="container"
      style={{
        marginTop: "150px",
      }}
    >
      <div className="card o-hidden border-0 shadow-lg my-5">
        <div className="card-body p-0">
          <div className="row">
            <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
            <div className="col-lg-7">
              <div className="p-5">
                <div className="text-center">
                  <h1 className="h4 text-gray-900 mb-4">
                    Login & see the magic!
                  </h1>
                </div>
                <form className="user" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control form-control-user"
                      id="exampleInputEmail"
                      placeholder="Email Address"
                      required
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      value={email}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control form-control-user"
                      id="exampleInputPassword"
                      placeholder="Password"
                      required
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      value={password}
                    />
                  </div>
                  <div>
                    <p style={{ color: "crimson" }}>{errors}</p>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-user btn-block"
                  >
                    Login &nbsp; 🚀
                  </button>
                </form>
                <hr />
                <div className="text-center">
                  <Link className="small" to="/register">
                    Dont't have an account? Create One!
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
