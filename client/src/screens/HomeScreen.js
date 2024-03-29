import React from "react";
import { useSelector } from "react-redux";
import Hedaer from "../components/Header/Header";
import img2 from "../assets/img2.png";
import img1 from "../assets/img1.png";
import { Link } from "react-router-dom";
export default function HomeScreen() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  return (
    <div>
      <Hedaer />
      <div className="container ">
        <div className="container-fluid p-5 col">
          <h1 className="head1">
            An Initiative towards{" "}
            <span className="title">clean environment</span>
          </h1>
          <div className="mid">
            <p>
              <img src={img1} className="img1" alt="" />
              <span className="to"> To </span>
              <img src={img2} className="img2" alt="" />
            </p>
          </div>
          <div className="logo-tag">
            <span className="img-tags">Waste</span>
            <span className="img-tags">Bucks</span>
          </div>
          <div className="text-center">
          {userInfo ? (
            <div>
              <Link to="/form1" className="link-sell-now common-link-class">
            <button type="button" className="btn btn-custom btn-lg ">
              Sell Now!
            </button>
            </Link>
            </div>
          ) : (
            <Link to="/register" className="link-sell-now common-link-class">
            <button type="button" className="btn btn-custom btn-lg ">
              Sell Now!
            </button>
            </Link>
          )}
          </div>
        </div>
      </div>
    </div>
  );
}
