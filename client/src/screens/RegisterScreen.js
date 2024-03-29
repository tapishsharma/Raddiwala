import React, { useEffect, useState } from "react";
import Header2 from "../components/header2";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

export default function RegisterScreen(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password and confirm password are not match");
    } else {
      dispatch(register(name, email, password));
    }
  };
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);
  return (
    <div>
      <Header2/>
      <form className="form-register" onSubmit={submitHandler}>
        <div>
          <h1>Register Here</h1>
        </div>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}

        {/* userName field */}

        <div className="div-in-form">
          <label className="register-label" htmlFor="userName">Name</label>
          <input
            type="text"
            id="userName"
            placeholder="Enter your Name"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Email address field */}

        <div className="div-in-form">
          <label className="register-label" htmlFor="inputEmail">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* password */}

        <div className="div-in-form">
          <label className="register-label" htmlFor="inputEmail">Password</label>
          <input
            type="password"
            id="password"
            placeholder="****"
            autoComplete="on"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Confirm Password Field */}

        <div className="div-in-form">
          <label className="register-label" htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="****"
            autoComplete="on"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <div className="div-in-form">
          <label />
          <button className="primary" type="submit">
            Register
          </button>
        </div>
        <div className="div-in-form">
          <label />
          <div className="below-form-note">
            Already a user ?{" "}
            <Link to={`/signin?redirect=${redirect}`}>Login Here</Link>
          </div>
        </div>
      </form>
    </div>
  );
}
