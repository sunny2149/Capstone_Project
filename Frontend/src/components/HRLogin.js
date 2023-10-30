import React, { useState } from "react";
import { Button, TextField, Snackbar } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import "./style.css";
import MainHeader from "./MainHeader";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

export default function HRLogin() {
  const [loginErrorMessage, setLoginErrorMessage] = useState("");

  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      employeeId: "",
      hrPassword: "",
    },
    validationSchema: yup.object().shape({
      employeeId: yup.string().required("Employee ID cannot be empty"),
      hrPassword: yup.string().required("Password cannot be empty"),
    }),

    onSubmit: (values) => {
      const { employeeId, hrPassword } = values;
      formik.validateForm().then((errors) => {
        if (Object.keys(errors).length === 0) {
          fetch("http://localhost:8089/hauth/v1/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ employeeId, hrPassword }),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.token) {
                sessionStorage.setItem("token", data.token);
                const userobj = data.hrDetails;
                sessionStorage.setItem("hrobj", JSON.stringify(userobj));

                const currentTime = new Date().toLocaleString();
                localStorage.setItem("lastLoginTime", currentTime);
                navigate("/hrdashboard");
              } else {
                setLoginErrorMessage("Incorrect Employee ID or Password");
              }
            })
            .catch((error) => {
              setLoginErrorMessage("Incorrect Employee ID or Password");
            });
        }
      });
    },
  });

  return (
    <div>
      <MainHeader />
      <div
        className="app-container"
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <div className="login-page">
          <div>
            <div className="sign-icon row mt-3 d-flex justify-content-center align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                align="center"
                width="40"
                height="40"
                fill="purple"
                className="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path
                  fillRule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                />
              </svg>
              <div className="row">
                <div className="register-heading register-form col-md-4 text-center offset-md-4 mt-3 text-uppercase text-black rounded">
                  <h4 style={{ color: "purple" }}>Sign in</h4>
                </div>
              </div>
            </div>
            <div>
              <form onSubmit={formik.handleSubmit} autoComplete="off">
                <div className="row">
                  <div className="col-md-4 offset-md-4 mt-4">
                    <TextField
                      fullWidth
                      error={
                        formik.errors.employeeId && formik.touched.employeeId
                      }
                      label="Enter Employee ID"
                      helperText={
                        formik.errors.employeeId &&
                        formik.touched.employeeId &&
                        formik.errors.employeeId
                      }
                      variant="outlined"
                      size="small"
                      name="employeeId"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.employeeId}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 offset-md-4 mt-4">
                    <TextField
                      fullWidth
                      error={
                        formik.errors.hrPassword && formik.touched.hrPassword
                      }
                      label="Enter Password"
                      helperText={
                        formik.errors.hrPassword &&
                        formik.touched.hrPassword &&
                        formik.errors.hrPassword
                      }
                      variant="outlined"
                      size="small"
                      name="hrPassword"
                      type="password"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.hrPassword}
                    />
                  </div>
                </div>
                {loginErrorMessage && (
                  <div className="row">
                    <div className="col-md-4 offset-md-4 mt-4 text-center">
                      <div className="error-message">{loginErrorMessage}</div>
                    </div>
                  </div>
                )}
                <div className="row">
                  <div className="btn-register col-md-4 text-center offset-md-4 mt-3">
                    <Button
                      type="submit"
                      variant="contained"
                      style={{
                        backgroundColor: "rgb(122, 63, 122)",
                        color: "white",
                      }}
                    >
                      Login
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}
