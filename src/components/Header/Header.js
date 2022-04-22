import React, { useContext } from "react";
import { clear, getItem, removeItem, setItem } from "../../utils/LocalStorage";
import { MainContext } from "../../utils/MainContext";
import Logo from "../../images/PandaLotto.png";
import AccountLogo from "../../icons/Account.svg";
import ArrowDown from "../../icons/down.svg";
import Money from "../../icons/Money.svg";
import "./Header.scss";

const Header = () => {
  const { loggedIn, setLogIn } = useContext(MainContext);
  const handleLogin = () => {
    if (loggedIn) {
      clear();
    } else {
      setItem("token", 123);
    }
    setLogIn(loggedIn ? false : true);
  };
  return (
    <div className="main__header">
      <div className="nav">
        <img className="logo" src={Logo} />
        <div className="burger">|||</div>
      </div>
      <div className="right">
        <p>Previous Results</p>
        <p onClick={handleLogin}>
          {loggedIn ? (
            <div className="account">
              <img src={AccountLogo} />
              <p>Hello, UserID</p>
              <img src={ArrowDown} />

              <div className="money">
                <img src={Money} />
                <p>
                  <span>$</span>500.00
                </p>
              </div>
            </div>
          ) : (
            "Login/Register"
          )}
        </p>
        <div className="special">
          <p>Let's Play</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25.062"
            height="18.477"
            viewBox="0 0 25.062 18.477"
          >
            <g
              id="Group_1"
              data-name="Group 1"
              transform="translate(-402.75 -177.182)"
            >
              <path
                id="Path_3"
                data-name="Path 3"
                d="M414.7,195.66a1,1,0,0,1-.718-.3,1.022,1.022,0,0,1,0-1.436l7.506-7.506-7.506-7.506a1.016,1.016,0,0,1,1.436-1.436l8.224,8.224a1.022,1.022,0,0,1,0,1.436l-8.224,8.224A1,1,0,0,1,414.7,195.66Z"
                transform="translate(3.88)"
                fill="#fff"
              />
              <path
                id="Path_4"
                data-name="Path 4"
                d="M426.569,185.282h-22.8a1.016,1.016,0,1,1,0-2.032h22.8a1.016,1.016,0,1,1,0,2.032Z"
                transform="translate(0 2.153)"
                fill="#fff"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;
