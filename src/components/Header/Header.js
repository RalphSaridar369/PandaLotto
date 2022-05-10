import React, { useContext, useState } from "react";
import { clear, getItem, removeItem, setItem } from "../../utils/LocalStorage";
import { MainContext } from "../../utils/MainContext";
import Logo from "../../images/PandaLotto.png";
import AccountLogo from "../../icons/Account.svg";
import ArrowDown from "../../icons/down.svg";
import Money from "../../icons/Money.svg";
import "./Header.scss";
// import { display, style } from "@mui/system";
import { Link } from "react-router-dom";
import Dot from '../../images/dot.svg'

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { loggedIn, setLogIn } = useContext(MainContext);
  const handleLogin = () => {
    if (loggedIn) {
      clear();
    } else {
      setItem("token", 123);
    }
    setLogIn(loggedIn ? false : true);
  };

  let style = window.location.pathname == "/"?
  {backgroundImage:`url(${Dot})`}:
  {backgroundImage:null}

  return (
    <div className="main__header" style={style}>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div className="nav">
          <Link to="/">
            {isMobile === false ? <img className="logo" src={Logo} /> : null}
          </Link>
          {isMobile === false ? (
            <div className="burger" onClick={() => setIsMobile(!isMobile)}>
              |||
            </div>
          ) : null}
        </div>
        <div className="right">
          <p>Previous Results</p>
          <Link to="/login" className="header__link">
            <p onClick={handleLogin}>
              {/* {loggedIn ? (
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
              ) : ( */}
              Login/Register
              {/* )} */}
            </p>
          </Link>
          <Link to="/play" className="header__link">
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
          </Link>
        </div>
      </div>

      {isMobile === true ? (
        <div className="main-mobile">
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div className="nav">
              {isMobile === true ? (
                <div className="close" onClick={() => setIsMobile(!isMobile)}>
                  X
                </div>
              ) : null}
            </div>

            <div className="body">
              <h1>
                Download<br></br>Our mobile app
              </h1>

              <div className="download">
                <div className="download-app">App Store</div>
                <div className="download-app">Play Store</div>
              </div>

              <div className="menu">
                <p>Previous Results</p>
                <p>Let’s Play</p>
                <p>Why Panda Lotto</p>
                <p>Contact</p>
                <p>Jackpot</p>
                <p>Lucky Winners</p>
              </div>

              <div className="footer">
                <p>Terms & Conditions</p>
                <div className="bar"></div>
                <p>Privacy Policy</p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
