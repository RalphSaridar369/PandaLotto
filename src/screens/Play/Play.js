import React from "react";
import "./Play.scss";

import Stepper from "./components/Stepper/Stepper";

const myStyle = {
  backgroundColor: "#090021",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const Play = () => {
  return (
    <div className="main"> 
      <div className="main-play" style={myStyle}>
        <div className="containers">
          <div className="title">
            <div className="title-part1">
              <h2>Buy your ticket</h2>
              <div className="separator"></div>
              <h3>March 1, 2022</h3>
            </div>
            <div className="title-part2">
              <h3>Next Draw in:</h3>
              <h2>53:45</h2>
            </div>
          </div>
          <div className="line"></div>

        </div>
      </div>
      <Stepper />
    </div>
  );
};

export default Play;
