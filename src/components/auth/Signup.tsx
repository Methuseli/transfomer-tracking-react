import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Alert, AlertIcon, Spinner } from "@chakra-ui/react";

export default function Signup(){
    const [data, setData] = useState({
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    email: "",
    company_name: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setError("");
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const errorComponent = (
    <Alert status="error">
      <AlertIcon />
      {error}
    </Alert>
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    if (data.username === "" || data.password === "" || data.email === "" || data.company_name === "") {
      setLoading(false);
      setError("Fill all the required fields!");
      return;
    }
    axios
      .post(
        `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_API_VERSION}users`,
        data
      )
      .then((res) => {
        if (res.status === 201) {
          setTimeout(() => {
            navigate("/");
          }, 3000);
        }
      })
      .catch((err) => {
        console.log(err);
          setTimeout(() => {
            setError("Something went wrong. Try again");
            setLoading(false);
          }, 3000);
        }
      );
  };

  const hasError = error === "";

  const errorValue = hasError ? "" : errorComponent;

  const isLoading = loading ? (
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
    />
  ) : (
    "Sign Up"
  );

  return (
    <>
      <div className="container position-sticky z-index-sticky top-0">
        <div className="row">
          <div className="col-12"></div>
        </div>
      </div>
      <main className="main-content  mt-0">
        <section>
          <div className="page-header min-vh-75">
            <div className="container">
              <div className="row">
                <div className="col-xl-4 col-lg-5 col-md-6 d-flex flex-column mx-auto">
                  <div className="card card-plain mt-8">
                    <div className="card-header pb-0 text-left bg-transparent">
                      <h3 className="font-weight-bolder text-info text-gradient">
                        Welcome
                      </h3>
                      <p className="mb-0">Fill the required data to sign up</p>
                    </div>
                    <div className="card-body">
                      <form method="POST" onSubmit={handleSubmit}>
                        <>{errorValue}</>
                        <br />
                        <label>Username</label>
                        <div className="mb-3">
                          <input
                            type="text"
                            name="username"
                            className="form-control"
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="username-addon"
                            onChange={handleChange}
                          />
                        </div>
                        <label>Password</label>
                        <div className="mb-3">
                          <input
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="Password"
                            aria-label="Password"
                            aria-describedby="password-addon"
                            onChange={handleChange}
                          />
                        </div>
                        <label>First Name</label>
                        <div className="mb-3">
                          <input
                            type="text"
                            name="first_name"
                            className="form-control"
                            placeholder="First Name"
                            aria-label="First Name"
                            aria-describedby="first_name-addon"
                            onChange={handleChange}
                          />
                        </div>
                        <label>Last Name</label>
                        <div className="mb-3">
                          <input
                            type="text"
                            name="last_name"
                            className="form-control"
                            placeholder="Last Name"
                            aria-label="Last Name"
                            aria-describedby="last_name-addon"
                            onChange={handleChange}
                          />
                        </div>
                        <label>Company Name</label>
                        <div className="mb-3">
                          <input
                            type="text"
                            name="company_name"
                            className="form-control"
                            placeholder="Company Name"
                            aria-label="Company Name"
                            aria-describedby="company_name-addon"
                            onChange={handleChange}
                          />
                        </div>
                        <label>Email</label>
                        <div className="mb-3">
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Email"
                            aria-label="Email"
                            aria-describedby="email-addon"
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="rememberMe"
                            checked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="rememberMe"
                          >
                            Remember me
                          </label>
                        </div>
                        <div className="text-center">
                          <button
                            type="submit"
                            className="btn bg-gradient-info w-100 mt-4 mb-0"
                          >
                            {isLoading}
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="card-footer text-center pt-0 px-lg-2 px-1">
                      <p className="mb-4 text-sm mx-auto">
                        Already have an account?
                        <Link
                          to="/"
                          className="text-info text-gradient font-weight-bold"
                        >
                          Login
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="oblique position-absolute top-0 h-100 d-md-block d-none me-n8">
                    <div
                      className="oblique-image bg-cover position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6"
                      style={{
                        backgroundImage:
                          "url('../assets/img/curved-images/survey_form.jpg')",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}