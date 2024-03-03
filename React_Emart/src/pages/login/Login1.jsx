import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import './login1.css';
import { Link, useNavigate } from "react-router-dom";

const Login1 = () => {
  const navigate = useNavigate();
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="login-container">
      <h2 className="login-heading">Please Log in</h2>
      <div className="login-body">
        <p className="login-message">If you're already a member, please login with your email and password.</p>
        <Formik
          initialValues={{ custEmail: "", custPassword: "" }}
          validationSchema={Yup.object().shape({
            custEmail: Yup.string()
                  .email("Invalid email format")
                  .required("Email is required"),
            custPassword: Yup.string()
                  .required("Password is required.")
                  .matches(/^[A-Za-z0-9]+$/, "Password must contain only numbers and letters")
                  .min(5, "Password is too short - should be 10 characters minimum.")
                  .max(10, "Password is too long - should be 10 characters maximum.")
          })}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              const res = await axios.post("http://localhost:5062/api/Customer/check", values);
              console.log(res);
              localStorage.setItem("islogin", true);
              localStorage.setItem("custId", res.data);
              navigate('/');
            } catch (err) {
              console.log(err);
              console.log(values);
              alert("Invalid credentials");
            }
            setSubmitting(false);
          }}
        >
          {({
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit
          }) => (
            <form onSubmit={handleSubmit}>
              <input
                id="custEmail"
                name="custEmail"
                type="text"
                placeholder="Email"
                value={values.custEmail}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`login-input ${errors.custEmail && touched.custEmail && "error"}`}
              />
              {errors.custEmail && touched.custEmail && (
                <div className="error-message">{errors.custEmail}</div>
              )}

              <div className="password-field">
                <input
                  id="custPassword"
                  name="custPassword"
                  type={passwordShown ? "text" : "password"}
                  placeholder="Password"
                  value={values.custPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`login-input ${errors.custPassword && touched.custPassword && "error"}`}
                />
                <button
                  className="toggle-password"
                  type="button"
                  onClick={togglePassword}
                >
                  {passwordShown ? "Hide" : "Show"}
                </button>
              </div>
              {errors.custPassword && touched.custPassword && (
                <div className="error-message">{errors.custPassword}</div>
              )}

              <div className="login-footer">
                <button
                  className="login-btn"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="login-spinner"></div>
                  ) : (
                    "Sign in"
                  )}
                </button>
                <button
                  className="register-btn"
                  disabled={isSubmitting}
                  onClick={() => navigate('/login/register')}
                >
                  Register
                </button>
              </div>
            </form>
          )}
          
        </Formik>
      </div>
     
    </div>
  );
};

export default Login1;
