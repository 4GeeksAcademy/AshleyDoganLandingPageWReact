import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import MyCard from "./MyCard";

//include images into your bundle

//create your first component
const Home = () => {
  return (
    <>
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <Jumbotron></Jumbotron>
      </div>
      <div>
        <MyCard></MyCard>
        <MyCard></MyCard>
        <MyCard></MyCard>
      </div>
    </>
  );
};

export default Home;
