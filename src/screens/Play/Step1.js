import React, { useState } from "react";
import { TextInput } from "../../components/TextInput/Textinput";
import "./Play.scss";
import "./Step1.scss";
import "./Stepper/Stepper.scss";
import Panda1 from "../../images/panda.png";
import Panda2 from "../../images/panda2.png";
// import Stepper from "./components/Stepper/Stepper";
import { useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const myStyle = {
  backgroundColor: "#090021",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const Play = () => {
  const navigate = useNavigate();

  const steps = [
    {
      step: 1,
      label: "Choose your panda",
      active: true,
    },
    {
      step: 2,
      label: "Place your bet",
      active: false,
    },
    {
      step: 3,
      label: "Select Payment Method",
      active: false,
    },
  ];

  const choosePanda = () => {
    navigate("/step2");
  };

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
        <div></div>
      </div>
      <div className="main-containers">
        <div className="main-left">
          {steps.map((item, index) => {
            return (
              <>
                <div
                  className={`main-left-circle ${
                    item.active ? "active-circle" : "inactive-circle"
                  }`}
                >
                  {index + 1}
                </div>
                <div
                  className={`main-left-label ${
                    item.active ? "active-label" : "inactive-label"
                  }`}
                >
                  {item.label}
                </div>
                {index != 2 && <div className="main-left-seperator"></div>}
              </>
            );
          })}
        </div>
        <div className="main-right">
          <div className="choose-character-container">
            <div className="choose-character">
              <div className="box1">
                <img src={Panda1} className="panda-img" />
                <p>Space Panda</p>
              </div>

              <div className="box2">
                <img src={Panda2} className="panda-img" />
                <p>Viking Panda</p>
              </div>
            </div>

            <div className="Buttons">
              <Popup
                trigger={
                  <div className="Button" onClick={choosePanda}>
                    <h2>Select</h2>
                  </div>
                }
                position="top center "
              >
                {" "}
                <div>Popup content here !!</div>{" "}
              </Popup>
              <div className="Button" onClick={choosePanda}>
                <h2>Select</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Play;
