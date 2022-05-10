import React, { useState } from "react";
import { TextInput } from "../../components/TextInput/Textinput";
import "./Play.scss";
import Panda1 from "../../images/panda.png";
import Panda2 from "../../images/panda2.png";
import Stepper from "./Stepper/Stepper";
// import Stepper from "./components/Stepper/Stepper";

const myStyle = {
  backgroundColor: "#090021",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const Play = () => {
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [ticket, setTicket] = useState();
  const tickets = [
    { id: 1, value: 20 },
    { id: 2, value: 50 },
    { id: 3, value: 100 },
    { id: 4, value: 200 },
    { id: 5, value: 300 },
    { id: 6, value: 400 },
    { id: 7, value: 500 },
    { id: 8, value: 750 },
    { id: 9, value: 1000 },
    { id: 10, value: 2000 },
    { id: 11, value: 3000 },
    { id: 12, value: 5000 },
  ];

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
        <div>
        </div>
      </div>
        <Stepper />
    </div>
  );
};

export default Play;
