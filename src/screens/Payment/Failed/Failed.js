import React from "react";
import "./Failed.scss";
import Panda from "../../../images/Failed.svg";

const Failed = () => {
  const myStyle = {
    backgroundColor: "#090021",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="main-failed" style={myStyle}>
      <div className="containers">
        <img src={Panda} className="panda" />

        <div className="texts">
          <div className="text-1">Oops! Something went wrong</div>
          <div className="text-2">
            Payment transaction failed due to connection failure
          </div>

          <div className="button">Try Again</div>
        </div>
      </div>
    </div>
  );
};

export default Failed;
