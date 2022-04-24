import React from "react";
import "./Success.scss";
import Panda from "../../../images/Success.svg";

const Success = () => {
  const myStyle = {
    backgroundColor: "#090021",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="main-success" style={myStyle}>
      <div className="containers">
        <img src={Panda} className="panda" />

        <div className="texts">
          <div className="text-1">Payment Accepted!</div>
          <div className="text-2">Thank you for playing with Pandalotto</div>

          <div className="button">Place another bet</div>
        </div>
      </div>
    </div>
  );
};

export default Success;
