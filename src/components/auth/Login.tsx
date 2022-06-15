/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Alert, AlertIcon, Spinner } from "@chakra-ui/react";

axios.defaults.withCredentials = true;

export default function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
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
    if (data.username === "" || data.password === "") {
      setLoading(false);
      setError("Cannot submit an empty form");
      return;
    }
    axios
      .post(
        `${process.env.REACT_APP_BASE_URL}api/token/`,
        data,
        { withCredentials: true }
      )
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("refresh_token", JSON.stringify(res.data['refresh']));
          localStorage.setItem("access_token", JSON.stringify(res.data['access']))
          setTimeout(() => {
            navigate("/dashboard");
          }, 3000);
        }
      })
      .catch((err) => {
        if (err.statusCode === 404) {
          setTimeout(() => {
            setError("Incorrect username or password");
            setLoading(false);
          }, 3000);
        } else {
          setTimeout(() => {
            setError("Something went wrong. Try again");
            setLoading(false);
          }, 3000);
        }
      });
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
    "SIGN IN"
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
                        Welcome back
                      </h3>
                      <p className="mb-0">
                        Enter your username and password to sign in
                      </p>
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
                        Don't have an account?
                        <a
                          href=""
                          className="text-info text-gradient font-weight-bold"
                        >
                          Sign up
                        </a>
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
                          "url('../assets/img/curved-images/fx_bg.webp')",
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
