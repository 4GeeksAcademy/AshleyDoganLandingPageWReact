import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import MyCard from "./MyCard";
import Footer from "./Footer";

import "../../styles/home.css";

//create your first component
const Home = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <div className="container">
          <Jumbotron />
        </div>
      </div>
      <div className="card-container-home">
        <div className="row justify-content-center">
          <div className="col-sm-3 m-3">
            <MyCard />
          </div>
          <div className="col-sm-3 m-3">
            <MyCard />
          </div>
          <div className="col-sm-3 m-3">
            <MyCard />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-3 m-3">
            <MyCard />
          </div>
          <div className="col-sm-3 m-3">
            <MyCard />
          </div>
          <div className="col-sm-3 m-3">
            <MyCard />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-3 m-3">
            <MyCard />
          </div>
          <div className="col-sm-3 m-3">
            <MyCard />
          </div>
          <div className="col-sm-3 m-3">
            <MyCard />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
