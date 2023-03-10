import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AxiosInstance } from "../utils/AxiosInstance";

const Register = () => {
  const [email, setEmail] = useState("");
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [errors, setErrors] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Registering user\n", {
        email,
        linkedinUrl,
        password,
        cpassword,
      });
      const response = await AxiosInstance.post("/users/register", {
        email: email,
        linkedin_url: linkedinUrl,
        password: password,
        cpassword: cpassword,
      });
      console.log("User registered\n", response.data);
      navigate("/login");
    } catch (error) {
      if (error.response.data.email) {
        setErrors(error.response.data.email);
      } else if (error.response.data.linkedin_url) {
        setErrors(error.response.data.linkedin_url);
      } else if (error.response.data.password) {
        setErrors(error.response.data.password);
      } else if (error.response.data.cpassword) {
        setErrors(error.response.data.cpassword);
      }
      console.log("Error registering user!!!!\n", error.response.data);
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
                  <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
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
                      type="text"
                      className="form-control form-control-user"
                      id="exampleLinkedInUrl"
                      placeholder="LinkedIn URL"
                      required
                      onChange={(e) => {
                        setLinkedinUrl(e.target.value);
                      }}
                      value={linkedinUrl}
                    />
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
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
                    <div className="col-sm-6">
                      <input
                        type="password"
                        className="form-control form-control-user"
                        id="exampleRepeatPassword"
                        placeholder="Repeat Password"
                        required
                        onChange={(e) => {
                          setCpassword(e.target.value);
                        }}
                        value={cpassword}
                      />
                    </div>
                  </div>
                  <div>
                    <p style={{ color: "crimson" }}>{errors}</p>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-user btn-block"
                  >
                    Register Account
                  </button>
                </form>
                <hr />
                <div className="text-center">
                  <Link className="small" to="/login">
                    Already have an account? Login!
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

export default Register;
