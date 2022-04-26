import React, { useContext, useRef, useEffect, useState } from "react";
import { MainContext } from "../../utils/MainContext";
import title from "../../images/title.png";
import mercury from "../../images/mercury.png";
import rocket from "../../images/rocket.svg";
import rocketSmall from "../../images/rocketSmall.png";

import dots from "../../images/dots.png";
import ancient from "../../images/Character_ancient.png";
import Background from "../../images/Rectangle_52.png";
import astro from "../../images/panda.png";
import createAccount from "../../images/create-account.png";
import "./Home.scss";
import { Step, Stepper, Box, StepButton } from "@mui/material";

const useMountEffect = (fun) => useEffect(fun, []);
const steps = ["", "", ""];

const Home = () => {
  const { loggedIn } = useContext(MainContext);
  const myStyle = {
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  const [activeStep, setActiveStep] = useState(0);

  const myRef = useRef(null);
  const executeScroll = () => myRef.current.scrollIntoView();
  const myRef1 = useRef(null);
  const executeScroll1 = () => myRef1.current.scrollIntoView();
  const myRef2 = useRef(null);
  const executeScroll2 = () => myRef2.current.scrollIntoView();
  const myRef3 = useRef(null);
  const executeScroll3 = () => myRef3.current.scrollIntoView();

  // useMountEffect(executeScroll);
  let scrolltest = window.scrollY;
  console.log(scrolltest);
  useEffect(() => {
    const onScroll = (e) => {
      window.addEventListener("onScroll", (e) => console.log(e));
      // setScrollTop(e.target.documentElement.scrollTop);
      // console.log(scrollTop);
      console.log("huhuhu");
    };
  }, []);

  // const onScroll = (e) => {
  //   // setScrollTop(e.target.documentElement.scrollTop);
  //   // console.log(scrollTop);
  //   console.log("huhuhu");
  // };

  function myFunction(x) {
    if (x.matches) {
      // If media query matches
      // console.log("huhu");
    } else {
      // console.log("huhuhuh");
    }
  }

  var x = window.matchMedia("(max-width: 700px)");
  myFunction(x); // Call listener function at run time
  x.addListener(myFunction); // Attach listener function on state changes

  return (
    // <div>Loggedin: {!loggedIn?"No":"Yes"}</div>
    // onScroll={onScroll}
    <>
      <div className="home" style={myStyle}>
        {/* <svg
          id="points"
          width="100vw"
          height="400vh"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xmlnsAvocode="https://avocode.com/"
          viewBox="0 0 100vw 400vh"
        >
          <path
            d="M84.51148,727.62332c0.8897,0 1.61307,-0.72186 1.61307,-1.61313c0,-0.89133 -0.72337,-1.6131 -1.61307,-1.6131c-0.8913,0 -1.61307,0.72177 -1.61307,1.6131c0,0.89127 0.72177,1.61313 1.61307,1.61313z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M84.51148,727.62332c0.8897,0 1.61307,-0.72186 1.61307,-1.61313c0,-0.89133 -0.72337,-1.6131 -1.61307,-1.6131c-0.8913,0 -1.61307,0.72177 -1.61307,1.6131c0,0.89127 0.72177,1.61313 1.61307,1.61313z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1989.18002,727.62332c0.88818,0 1.61462,-0.72186 1.61462,-1.61313c0,-0.89133 -0.72644,-1.6131 -1.61462,-1.6131c-0.88794,0 -1.61462,0.72177 -1.61462,1.6131c0,0.89127 0.72668,1.61313 1.61462,1.61313z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1989.18002,727.62332c0.88818,0 1.61462,-0.72186 1.61462,-1.61313c0,-0.89133 -0.72644,-1.6131 -1.61462,-1.6131c-0.88794,0 -1.61462,0.72177 -1.61462,1.6131c0,0.89127 0.72668,1.61313 1.61462,1.61313z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>

          <path
            d="M1852.09329,727.62332c0.88794,0 1.61475,-0.72186 1.61475,-1.61313c0,-0.89133 -0.72681,-1.6131 -1.61475,-1.6131c-0.88782,0 -1.61462,0.72177 -1.61462,1.6131c0,0.89127 0.72681,1.61313 1.61462,1.61313z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1852.09329,727.62332c0.88794,0 1.61475,-0.72186 1.61475,-1.61313c0,-0.89133 -0.72681,-1.6131 -1.61475,-1.6131c-0.88782,0 -1.61462,0.72177 -1.61462,1.6131c0,0.89127 0.72681,1.61313 1.61462,1.61313z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1716.62149,727.62332c0.88806,0 1.61475,-0.72186 1.61475,-1.61313c0,-0.89133 -0.72668,-1.6131 -1.61475,-1.6131c-0.88806,0 -1.61487,0.72177 -1.61487,1.6131c0,0.89127 0.72681,1.61313 1.61487,1.61313z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1716.62149,727.62332c0.88806,0 1.61475,-0.72186 1.61475,-1.61313c0,-0.89133 -0.72668,-1.6131 -1.61475,-1.6131c-0.88806,0 -1.61487,0.72177 -1.61487,1.6131c0,0.89127 0.72681,1.61313 1.61487,1.61313z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1581.15414,727.62332c0.88989,0 1.61322,-0.72186 1.61322,-1.61313c0,-0.89133 -0.72333,-1.6131 -1.61322,-1.6131c-0.89124,0 -1.61298,0.72177 -1.61298,1.6131c0,0.89127 0.72174,1.61313 1.61298,1.61313z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1581.15414,727.62332c0.88989,0 1.61322,-0.72186 1.61322,-1.61313c0,-0.89133 -0.72333,-1.6131 -1.61322,-1.6131c-0.89124,0 -1.61298,0.72177 -1.61298,1.6131c0,0.89127 0.72174,1.61313 1.61298,1.61313z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1444.06918,727.62332c0.8913,0 1.61298,-0.72186 1.61298,-1.61313c0,-0.89133 -0.72168,-1.6131 -1.61298,-1.6131c-0.8913,0 -1.61316,0.72177 -1.61316,1.6131c0,0.89127 0.72186,1.61313 1.61316,1.61313z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1444.06918,727.62332c0.8913,0 1.61298,-0.72186 1.61298,-1.61313c0,-0.89133 -0.72168,-1.6131 -1.61298,-1.6131c-0.8913,0 -1.61316,0.72177 -1.61316,1.6131c0,0.89127 0.72186,1.61313 1.61316,1.61313z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1308.59698,727.62332c0.89136,0 1.61316,-0.72186 1.61316,-1.61313c0,-0.89133 -0.7218,-1.6131 -1.61316,-1.6131c-0.88959,0 -1.61133,0.72177 -1.61133,1.6131c0,0.89127 0.72174,1.61313 1.61133,1.61313z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1308.59698,727.62332c0.89136,0 1.61316,-0.72186 1.61316,-1.61313c0,-0.89133 -0.7218,-1.6131 -1.61316,-1.6131c-0.88959,0 -1.61133,0.72177 -1.61133,1.6131c0,0.89127 0.72174,1.61313 1.61133,1.61313z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1173.12518,727.62332c0.8913,0 1.61298,-0.72186 1.61298,-1.61313c0,-0.89133 -0.72168,-1.6131 -1.61298,-1.6131c-0.8913,0 -1.61316,0.72177 -1.61316,1.6131c0,0.89127 0.72186,1.61313 1.61316,1.61313z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1173.12518,727.62332c0.8913,0 1.61298,-0.72186 1.61298,-1.61313c0,-0.89133 -0.72168,-1.6131 -1.61298,-1.6131c-0.8913,0 -1.61316,0.72177 -1.61316,1.6131c0,0.89127 0.72186,1.61313 1.61316,1.61313z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1036.03997,727.62332c0.8913,0 1.61298,-0.72186 1.61298,-1.61313c0,-0.89133 -0.72168,-1.6131 -1.61298,-1.6131c-0.88965,0 -1.61304,0.72177 -1.61304,1.6131c0,0.89127 0.72339,1.61313 1.61304,1.61313z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1036.03997,727.62332c0.8913,0 1.61298,-0.72186 1.61298,-1.61313c0,-0.89133 -0.72168,-1.6131 -1.61298,-1.6131c-0.88965,0 -1.61304,0.72177 -1.61304,1.6131c0,0.89127 0.72339,1.61313 1.61304,1.61313z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M900.56802,727.62332c0.89136,0 1.6131,-0.72186 1.6131,-1.61313c0,-0.89133 -0.72174,-1.6131 -1.6131,-1.6131c-0.88977,0 -1.6131,0.72177 -1.6131,1.6131c0,0.89127 0.72333,1.61313 1.6131,1.61313z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M900.56802,727.62332c0.89136,0 1.6131,-0.72186 1.6131,-1.61313c0,-0.89133 -0.72174,-1.6131 -1.6131,-1.6131c-0.88977,0 -1.6131,0.72177 -1.6131,1.6131c0,0.89127 0.72333,1.61313 1.6131,1.61313z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M765.09604,727.62332c0.89127,0 1.61304,-0.72186 1.61304,-1.61313c0,-0.89133 -0.72177,-1.6131 -1.61304,-1.6131c-0.88974,0 -1.61151,0.72177 -1.61151,1.6131c0,0.89127 0.72177,1.61313 1.61151,1.61313z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M765.09604,727.62332c0.89127,0 1.61304,-0.72186 1.61304,-1.61313c0,-0.89133 -0.72177,-1.6131 -1.61304,-1.6131c-0.88974,0 -1.61151,0.72177 -1.61151,1.6131c0,0.89127 0.72177,1.61313 1.61151,1.61313z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M628.01092,727.62332c0.89127,0 1.61304,-0.72186 1.61304,-1.61313c0,-0.89133 -0.72177,-1.6131 -1.61304,-1.6131c-0.88971,0 -1.61142,0.72177 -1.61142,1.6131c0,0.89127 0.72171,1.61313 1.61142,1.61313z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M628.01092,727.62332c0.89127,0 1.61304,-0.72186 1.61304,-1.61313c0,-0.89133 -0.72177,-1.6131 -1.61304,-1.6131c-0.88971,0 -1.61142,0.72177 -1.61142,1.6131c0,0.89127 0.72171,1.61313 1.61142,1.61313z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M492.53894,727.62332c0.8913,0 1.61307,-0.72186 1.61307,-1.61313c0,-0.89133 -0.72177,-1.6131 -1.61307,-1.6131c-0.88971,0 -1.61142,0.72177 -1.61142,1.6131c0,0.89127 0.72171,1.61313 1.61142,1.61313z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M492.53894,727.62332c0.8913,0 1.61307,-0.72186 1.61307,-1.61313c0,-0.89133 -0.72177,-1.6131 -1.61307,-1.6131c-0.88971,0 -1.61142,0.72177 -1.61142,1.6131c0,0.89127 0.72171,1.61313 1.61142,1.61313z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M355.4555,727.62332c0.88966,0 1.61145,-0.72186 1.61145,-1.61313c0,-0.89133 -0.72179,-1.6131 -1.61145,-1.6131c-0.89133,0 -1.6131,0.72177 -1.6131,1.6131c0,0.89127 0.72177,1.61313 1.6131,1.61313z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M355.4555,727.62332c0.88966,0 1.61145,-0.72186 1.61145,-1.61313c0,-0.89133 -0.72179,-1.6131 -1.61145,-1.6131c-0.89133,0 -1.6131,0.72177 -1.6131,1.6131c0,0.89127 0.72177,1.61313 1.6131,1.61313z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M219.98349,727.62332c0.88969,0 1.61147,-0.72186 1.61147,-1.61313c0,-0.89133 -0.72179,-1.6131 -1.61147,-1.6131c-0.89131,0 -1.61307,0.72177 -1.61307,1.6131c0,0.89127 0.72176,1.61313 1.61307,1.61313z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M219.98349,727.62332c0.88969,0 1.61147,-0.72186 1.61147,-1.61313c0,-0.89133 -0.72179,-1.6131 -1.61147,-1.6131c-0.89131,0 -1.61307,0.72177 -1.61307,1.6131c0,0.89127 0.72176,1.61313 1.61307,1.61313z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M21.61307,847.03067c0.89131,0 1.61307,-0.72339 1.61307,-1.61298c0,-0.89139 -0.72176,-1.61472 -1.61307,-1.61472c-0.88969,0 -1.61307,0.72333 -1.61307,1.61472c0,0.88959 0.72338,1.61298 1.61307,1.61298z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M21.61307,847.03067c0.89131,0 1.61307,-0.72339 1.61307,-1.61298c0,-0.89139 -0.72176,-1.61472 -1.61307,-1.61472c-0.88969,0 -1.61307,0.72333 -1.61307,1.61472c0,0.88959 0.72338,1.61298 1.61307,1.61298z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1926.28842,847.03067c0.88782,0 1.61462,-0.72339 1.61462,-1.61298c0,-0.89139 -0.72681,-1.61472 -1.61462,-1.61472c-0.88818,0 -1.61487,0.72333 -1.61487,1.61472c0,0.88959 0.72668,1.61298 1.61487,1.61298z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1926.28842,847.03067c0.88782,0 1.61462,-0.72339 1.61462,-1.61298c0,-0.89139 -0.72681,-1.61472 -1.61462,-1.61472c-0.88818,0 -1.61487,0.72333 -1.61487,1.61472c0,0.88959 0.72668,1.61298 1.61487,1.61298z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1789.20144,847.03067c0.88794,0 1.61462,-0.72339 1.61462,-1.61298c0,-0.89139 -0.72668,-1.61472 -1.61462,-1.61472c-0.88818,0 -1.61462,0.72333 -1.61462,1.61472c0,0.88959 0.72644,1.61298 1.61462,1.61298z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1789.20144,847.03067c0.88794,0 1.61462,-0.72339 1.61462,-1.61298c0,-0.89139 -0.72668,-1.61472 -1.61462,-1.61472c-0.88818,0 -1.61462,0.72333 -1.61462,1.61472c0,0.88959 0.72644,1.61298 1.61462,1.61298z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1653.7294,847.03067c0.88806,0 1.61475,-0.72339 1.61475,-1.61298c0,-0.89139 -0.72668,-1.61472 -1.61475,-1.61472c-0.88818,0 -1.61462,0.72333 -1.61462,1.61472c0,0.88959 0.72644,1.61298 1.61462,1.61298z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1653.7294,847.03067c0.88806,0 1.61475,-0.72339 1.61475,-1.61298c0,-0.89139 -0.72668,-1.61472 -1.61475,-1.61472c-0.88818,0 -1.61462,0.72333 -1.61462,1.61472c0,0.88959 0.72644,1.61298 1.61462,1.61298z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1518.25564,847.03067c0.89148,0 1.61316,-0.72339 1.61316,-1.61298c0,-0.89139 -0.72168,-1.61472 -1.61316,-1.61472c-0.88959,0 -1.61298,0.72333 -1.61298,1.61472c0,0.88959 0.72339,1.61298 1.61298,1.61298z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1518.25564,847.03067c0.89148,0 1.61316,-0.72339 1.61316,-1.61298c0,-0.89139 -0.72168,-1.61472 -1.61316,-1.61472c-0.88959,0 -1.61298,0.72333 -1.61298,1.61472c0,0.88959 0.72339,1.61298 1.61298,1.61298z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1381.17239,847.03067c0.88971,0 1.61298,-0.72339 1.61298,-1.61298c0,-0.89139 -0.72327,-1.61472 -1.61298,-1.61472c-0.89124,0 -1.61316,0.72333 -1.61316,1.61472c0,0.88959 0.72192,1.61298 1.61316,1.61298z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1381.17239,847.03067c0.88971,0 1.61298,-0.72339 1.61298,-1.61298c0,-0.89139 -0.72327,-1.61472 -1.61298,-1.61472c-0.89124,0 -1.61316,0.72333 -1.61316,1.61472c0,0.88959 0.72192,1.61298 1.61316,1.61298z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1245.69876,847.03067c0.8913,0 1.6131,-0.72339 1.6131,-1.61298c0,-0.89139 -0.7218,-1.61472 -1.6131,-1.61472c-0.88977,0 -1.61151,0.72333 -1.61151,1.61472c0,0.88959 0.72174,1.61298 1.61151,1.61298z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1245.69876,847.03067c0.8913,0 1.6131,-0.72339 1.6131,-1.61298c0,-0.89139 -0.7218,-1.61472 -1.6131,-1.61472c-0.88977,0 -1.61151,0.72333 -1.61151,1.61472c0,0.88959 0.72174,1.61298 1.61151,1.61298z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1110.22665,847.03067c0.89136,0 1.6131,-0.72339 1.6131,-1.61298c0,-0.89139 -0.72174,-1.61472 -1.6131,-1.61472c-0.88959,0 -1.61145,0.72333 -1.61145,1.61472c0,0.88959 0.72186,1.61298 1.61145,1.61298z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1110.22665,847.03067c0.89136,0 1.6131,-0.72339 1.6131,-1.61298c0,-0.89139 -0.72174,-1.61472 -1.6131,-1.61472c-0.88959,0 -1.61145,0.72333 -1.61145,1.61472c0,0.88959 0.72186,1.61298 1.61145,1.61298z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M973.14315,847.03067c0.88965,0 1.61151,-0.72339 1.61151,-1.61298c0,-0.89139 -0.72186,-1.61472 -1.61151,-1.61472c-0.89124,0 -1.61298,0.72333 -1.61298,1.61472c0,0.88959 0.72174,1.61298 1.61298,1.61298z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M973.14315,847.03067c0.88965,0 1.61151,-0.72339 1.61151,-1.61298c0,-0.89139 -0.72186,-1.61472 -1.61151,-1.61472c-0.89124,0 -1.61298,0.72333 -1.61298,1.61472c0,0.88959 0.72174,1.61298 1.61298,1.61298z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M837.67126,847.03067c0.88959,0 1.61139,-0.72339 1.61139,-1.61298c0,-0.89139 -0.7218,-1.61472 -1.61139,-1.61472c-0.89136,0 -1.6131,0.72333 -1.6131,1.61472c0,0.88959 0.72174,1.61298 1.6131,1.61298z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M837.67126,847.03067c0.88959,0 1.61139,-0.72339 1.61139,-1.61298c0,-0.89139 -0.7218,-1.61472 -1.61139,-1.61472c-0.89136,0 -1.6131,0.72333 -1.6131,1.61472c0,0.88959 0.72174,1.61298 1.6131,1.61298z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M700.58615,847.03067c0.8913,0 1.6131,-0.72339 1.6131,-1.61298c0,-0.89139 -0.7218,-1.61472 -1.6131,-1.61472c-0.88968,0 -1.61307,0.72333 -1.61307,1.61472c0,0.88959 0.72339,1.61298 1.61307,1.61298z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M700.58615,847.03067c0.8913,0 1.6131,-0.72339 1.6131,-1.61298c0,-0.89139 -0.7218,-1.61472 -1.6131,-1.61472c-0.88968,0 -1.61307,0.72333 -1.61307,1.61472c0,0.88959 0.72339,1.61298 1.61307,1.61298z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M565.11416,847.03067c0.88974,0 1.6131,-0.72339 1.6131,-1.61298c0,-0.89139 -0.72336,-1.61472 -1.6131,-1.61472c-0.8913,0 -1.61307,0.72333 -1.61307,1.61472c0,0.88959 0.72177,1.61298 1.61307,1.61298z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M565.11416,847.03067c0.88974,0 1.6131,-0.72339 1.6131,-1.61298c0,-0.89139 -0.72336,-1.61472 -1.6131,-1.61472c-0.8913,0 -1.61307,0.72333 -1.61307,1.61472c0,0.88959 0.72177,1.61298 1.61307,1.61298z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M429.64212,847.03067c0.89133,0 1.61311,-0.72339 1.61311,-1.61298c0,-0.89139 -0.72179,-1.61472 -1.61311,-1.61472c-0.8913,0 -1.61304,0.72333 -1.61304,1.61472c0,0.88959 0.72174,1.61298 1.61304,1.61298z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M429.64212,847.03067c0.89133,0 1.61311,-0.72339 1.61311,-1.61298c0,-0.89139 -0.72179,-1.61472 -1.61311,-1.61472c-0.8913,0 -1.61304,0.72333 -1.61304,1.61472c0,0.88959 0.72174,1.61298 1.61304,1.61298z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M292.55707,847.03067c0.8913,0 1.61307,-0.72339 1.61307,-1.61298c0,-0.89139 -0.72177,-1.61472 -1.61307,-1.61472c-0.8913,0 -1.61307,0.72333 -1.61307,1.61472c0,0.88959 0.72177,1.61298 1.61307,1.61298z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M292.55707,847.03067c0.8913,0 1.61307,-0.72339 1.61307,-1.61298c0,-0.89139 -0.72177,-1.61472 -1.61307,-1.61472c-0.8913,0 -1.61307,0.72333 -1.61307,1.61472c0,0.88959 0.72177,1.61298 1.61307,1.61298z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M157.08508,847.03067c0.8913,0 1.61307,-0.72339 1.61307,-1.61298c0,-0.89139 -0.72176,-1.61472 -1.61307,-1.61472c-0.89132,0 -1.61308,0.72333 -1.61308,1.61472c0,0.88959 0.72176,1.61298 1.61308,1.61298z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M157.08508,847.03067c0.8913,0 1.61307,-0.72339 1.61307,-1.61298c0,-0.89139 -0.72176,-1.61472 -1.61307,-1.61472c-0.89132,0 -1.61308,0.72333 -1.61308,1.61472c0,0.88959 0.72176,1.61298 1.61308,1.61298z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M84.51148,966.43668c0.8897,0 1.61307,-0.72174 1.61307,-1.61304c0,-0.89124 -0.72337,-1.61316 -1.61307,-1.61316c-0.8913,0 -1.61307,0.72192 -1.61307,1.61316c0,0.8913 0.72177,1.61304 1.61307,1.61304z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M84.51148,966.43668c0.8897,0 1.61307,-0.72174 1.61307,-1.61304c0,-0.89124 -0.72337,-1.61316 -1.61307,-1.61316c-0.8913,0 -1.61307,0.72192 -1.61307,1.61316c0,0.8913 0.72177,1.61304 1.61307,1.61304z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1989.18002,966.43668c0.88818,0 1.61462,-0.72174 1.61462,-1.61304c0,-0.89124 -0.72644,-1.61316 -1.61462,-1.61316c-0.88794,0 -1.61462,0.72192 -1.61462,1.61316c0,0.8913 0.72668,1.61304 1.61462,1.61304z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1989.18002,966.43668c0.88818,0 1.61462,-0.72174 1.61462,-1.61304c0,-0.89124 -0.72644,-1.61316 -1.61462,-1.61316c-0.88794,0 -1.61462,0.72192 -1.61462,1.61316c0,0.8913 0.72668,1.61304 1.61462,1.61304z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1852.09329,966.43668c0.88794,0 1.61475,-0.72174 1.61475,-1.61304c0,-0.89124 -0.72681,-1.61316 -1.61475,-1.61316c-0.88782,0 -1.61462,0.72192 -1.61462,1.61316c0,0.8913 0.72681,1.61304 1.61462,1.61304z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1852.09329,966.43668c0.88794,0 1.61475,-0.72174 1.61475,-1.61304c0,-0.89124 -0.72681,-1.61316 -1.61475,-1.61316c-0.88782,0 -1.61462,0.72192 -1.61462,1.61316c0,0.8913 0.72681,1.61304 1.61462,1.61304z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1716.62149,966.43668c0.88806,0 1.61475,-0.72174 1.61475,-1.61304c0,-0.89124 -0.72668,-1.61316 -1.61475,-1.61316c-0.88806,0 -1.61487,0.72192 -1.61487,1.61316c0,0.8913 0.72681,1.61304 1.61487,1.61304z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1716.62149,966.43668c0.88806,0 1.61475,-0.72174 1.61475,-1.61304c0,-0.89124 -0.72668,-1.61316 -1.61475,-1.61316c-0.88806,0 -1.61487,0.72192 -1.61487,1.61316c0,0.8913 0.72681,1.61304 1.61487,1.61304z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1581.15414,966.43668c0.88989,0 1.61322,-0.72174 1.61322,-1.61304c0,-0.89124 -0.72333,-1.61316 -1.61322,-1.61316c-0.89124,0 -1.61298,0.72192 -1.61298,1.61316c0,0.8913 0.72174,1.61304 1.61298,1.61304z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1581.15414,966.43668c0.88989,0 1.61322,-0.72174 1.61322,-1.61304c0,-0.89124 -0.72333,-1.61316 -1.61322,-1.61316c-0.89124,0 -1.61298,0.72192 -1.61298,1.61316c0,0.8913 0.72174,1.61304 1.61298,1.61304z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1444.06918,966.43668c0.8913,0 1.61298,-0.72174 1.61298,-1.61304c0,-0.89124 -0.72168,-1.61316 -1.61298,-1.61316c-0.8913,0 -1.61316,0.72192 -1.61316,1.61316c0,0.8913 0.72186,1.61304 1.61316,1.61304z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1444.06918,966.43668c0.8913,0 1.61298,-0.72174 1.61298,-1.61304c0,-0.89124 -0.72168,-1.61316 -1.61298,-1.61316c-0.8913,0 -1.61316,0.72192 -1.61316,1.61316c0,0.8913 0.72186,1.61304 1.61316,1.61304z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1308.59698,966.43668c0.89136,0 1.61316,-0.72174 1.61316,-1.61304c0,-0.89124 -0.7218,-1.61316 -1.61316,-1.61316c-0.88959,0 -1.61133,0.72192 -1.61133,1.61316c0,0.8913 0.72174,1.61304 1.61133,1.61304z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1308.59698,966.43668c0.89136,0 1.61316,-0.72174 1.61316,-1.61304c0,-0.89124 -0.7218,-1.61316 -1.61316,-1.61316c-0.88959,0 -1.61133,0.72192 -1.61133,1.61316c0,0.8913 0.72174,1.61304 1.61133,1.61304z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1173.12518,966.43668c0.8913,0 1.61298,-0.72174 1.61298,-1.61304c0,-0.89124 -0.72168,-1.61316 -1.61298,-1.61316c-0.8913,0 -1.61316,0.72192 -1.61316,1.61316c0,0.8913 0.72186,1.61304 1.61316,1.61304z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1173.12518,966.43668c0.8913,0 1.61298,-0.72174 1.61298,-1.61304c0,-0.89124 -0.72168,-1.61316 -1.61298,-1.61316c-0.8913,0 -1.61316,0.72192 -1.61316,1.61316c0,0.8913 0.72186,1.61304 1.61316,1.61304z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1036.03997,966.43668c0.8913,0 1.61298,-0.72174 1.61298,-1.61304c0,-0.89124 -0.72168,-1.61316 -1.61298,-1.61316c-0.88965,0 -1.61304,0.72192 -1.61304,1.61316c0,0.8913 0.72339,1.61304 1.61304,1.61304z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1036.03997,966.43668c0.8913,0 1.61298,-0.72174 1.61298,-1.61304c0,-0.89124 -0.72168,-1.61316 -1.61298,-1.61316c-0.88965,0 -1.61304,0.72192 -1.61304,1.61316c0,0.8913 0.72339,1.61304 1.61304,1.61304z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M900.56802,966.43668c0.89136,0 1.6131,-0.72174 1.6131,-1.61304c0,-0.89124 -0.72174,-1.61316 -1.6131,-1.61316c-0.88977,0 -1.6131,0.72192 -1.6131,1.61316c0,0.8913 0.72333,1.61304 1.6131,1.61304z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M900.56802,966.43668c0.89136,0 1.6131,-0.72174 1.6131,-1.61304c0,-0.89124 -0.72174,-1.61316 -1.6131,-1.61316c-0.88977,0 -1.6131,0.72192 -1.6131,1.61316c0,0.8913 0.72333,1.61304 1.6131,1.61304z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M765.09604,966.43668c0.89127,0 1.61304,-0.72174 1.61304,-1.61304c0,-0.89124 -0.72177,-1.61316 -1.61304,-1.61316c-0.88974,0 -1.61151,0.72192 -1.61151,1.61316c0,0.8913 0.72177,1.61304 1.61151,1.61304z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M765.09604,966.43668c0.89127,0 1.61304,-0.72174 1.61304,-1.61304c0,-0.89124 -0.72177,-1.61316 -1.61304,-1.61316c-0.88974,0 -1.61151,0.72192 -1.61151,1.61316c0,0.8913 0.72177,1.61304 1.61151,1.61304z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M628.01092,966.43668c0.89127,0 1.61304,-0.72174 1.61304,-1.61304c0,-0.89124 -0.72177,-1.61316 -1.61304,-1.61316c-0.88971,0 -1.61142,0.72192 -1.61142,1.61316c0,0.8913 0.72171,1.61304 1.61142,1.61304z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M628.01092,966.43668c0.89127,0 1.61304,-0.72174 1.61304,-1.61304c0,-0.89124 -0.72177,-1.61316 -1.61304,-1.61316c-0.88971,0 -1.61142,0.72192 -1.61142,1.61316c0,0.8913 0.72171,1.61304 1.61142,1.61304z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M492.53894,966.43668c0.8913,0 1.61307,-0.72174 1.61307,-1.61304c0,-0.89124 -0.72177,-1.61316 -1.61307,-1.61316c-0.88971,0 -1.61142,0.72192 -1.61142,1.61316c0,0.8913 0.72171,1.61304 1.61142,1.61304z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M492.53894,966.43668c0.8913,0 1.61307,-0.72174 1.61307,-1.61304c0,-0.89124 -0.72177,-1.61316 -1.61307,-1.61316c-0.88971,0 -1.61142,0.72192 -1.61142,1.61316c0,0.8913 0.72171,1.61304 1.61142,1.61304z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M355.4555,966.43668c0.88966,0 1.61145,-0.72174 1.61145,-1.61304c0,-0.89124 -0.72179,-1.61316 -1.61145,-1.61316c-0.89133,0 -1.6131,0.72192 -1.6131,1.61316c0,0.8913 0.72177,1.61304 1.6131,1.61304z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M355.4555,966.43668c0.88966,0 1.61145,-0.72174 1.61145,-1.61304c0,-0.89124 -0.72179,-1.61316 -1.61145,-1.61316c-0.89133,0 -1.6131,0.72192 -1.6131,1.61316c0,0.8913 0.72177,1.61304 1.6131,1.61304z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M219.98349,966.43668c0.88969,0 1.61147,-0.72174 1.61147,-1.61304c0,-0.89124 -0.72179,-1.61316 -1.61147,-1.61316c-0.89131,0 -1.61307,0.72192 -1.61307,1.61316c0,0.8913 0.72176,1.61304 1.61307,1.61304z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M219.98349,966.43668c0.88969,0 1.61147,-0.72174 1.61147,-1.61304c0,-0.89124 -0.72179,-1.61316 -1.61147,-1.61316c-0.89131,0 -1.61307,0.72192 -1.61307,1.61316c0,0.8913 0.72176,1.61304 1.61307,1.61304z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M21.61307,1079.39032c0.89131,0 1.61307,-0.72339 1.61307,-1.61462c0,-0.89142 -0.72176,-1.61322 -1.61307,-1.61322c-0.88969,0 -1.61307,0.7218 -1.61307,1.61322c0,0.89124 0.72338,1.61462 1.61307,1.61462z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M21.61307,1079.39032c0.89131,0 1.61307,-0.72339 1.61307,-1.61462c0,-0.89142 -0.72176,-1.61322 -1.61307,-1.61322c-0.88969,0 -1.61307,0.7218 -1.61307,1.61322c0,0.89124 0.72338,1.61462 1.61307,1.61462z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1926.28842,1079.39032c0.88782,0 1.61462,-0.72339 1.61462,-1.61462c0,-0.89142 -0.72681,-1.61322 -1.61462,-1.61322c-0.88818,0 -1.61487,0.7218 -1.61487,1.61322c0,0.89124 0.72668,1.61462 1.61487,1.61462z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1926.28842,1079.39032c0.88782,0 1.61462,-0.72339 1.61462,-1.61462c0,-0.89142 -0.72681,-1.61322 -1.61462,-1.61322c-0.88818,0 -1.61487,0.7218 -1.61487,1.61322c0,0.89124 0.72668,1.61462 1.61487,1.61462z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1789.20144,1079.39032c0.88794,0 1.61462,-0.72339 1.61462,-1.61462c0,-0.89142 -0.72668,-1.61322 -1.61462,-1.61322c-0.88818,0 -1.61462,0.7218 -1.61462,1.61322c0,0.89124 0.72644,1.61462 1.61462,1.61462z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1789.20144,1079.39032c0.88794,0 1.61462,-0.72339 1.61462,-1.61462c0,-0.89142 -0.72668,-1.61322 -1.61462,-1.61322c-0.88818,0 -1.61462,0.7218 -1.61462,1.61322c0,0.89124 0.72644,1.61462 1.61462,1.61462z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1653.7294,1079.39032c0.88806,0 1.61475,-0.72339 1.61475,-1.61462c0,-0.89142 -0.72668,-1.61322 -1.61475,-1.61322c-0.88818,0 -1.61462,0.7218 -1.61462,1.61322c0,0.89124 0.72644,1.61462 1.61462,1.61462z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1653.7294,1079.39032c0.88806,0 1.61475,-0.72339 1.61475,-1.61462c0,-0.89142 -0.72668,-1.61322 -1.61475,-1.61322c-0.88818,0 -1.61462,0.7218 -1.61462,1.61322c0,0.89124 0.72644,1.61462 1.61462,1.61462z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1518.25564,1079.39032c0.89148,0 1.61316,-0.72339 1.61316,-1.61462c0,-0.89142 -0.72168,-1.61322 -1.61316,-1.61322c-0.88959,0 -1.61298,0.7218 -1.61298,1.61322c0,0.89124 0.72339,1.61462 1.61298,1.61462z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1518.25564,1079.39032c0.89148,0 1.61316,-0.72339 1.61316,-1.61462c0,-0.89142 -0.72168,-1.61322 -1.61316,-1.61322c-0.88959,0 -1.61298,0.7218 -1.61298,1.61322c0,0.89124 0.72339,1.61462 1.61298,1.61462z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1381.17239,1079.39032c0.88971,0 1.61298,-0.72339 1.61298,-1.61462c0,-0.89142 -0.72327,-1.61322 -1.61298,-1.61322c-0.89124,0 -1.61316,0.7218 -1.61316,1.61322c0,0.89124 0.72192,1.61462 1.61316,1.61462z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1381.17239,1079.39032c0.88971,0 1.61298,-0.72339 1.61298,-1.61462c0,-0.89142 -0.72327,-1.61322 -1.61298,-1.61322c-0.89124,0 -1.61316,0.7218 -1.61316,1.61322c0,0.89124 0.72192,1.61462 1.61316,1.61462z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1245.69876,1079.39032c0.8913,0 1.6131,-0.72339 1.6131,-1.61462c0,-0.89142 -0.7218,-1.61322 -1.6131,-1.61322c-0.88977,0 -1.61151,0.7218 -1.61151,1.61322c0,0.89124 0.72174,1.61462 1.61151,1.61462z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1245.69876,1079.39032c0.8913,0 1.6131,-0.72339 1.6131,-1.61462c0,-0.89142 -0.7218,-1.61322 -1.6131,-1.61322c-0.88977,0 -1.61151,0.7218 -1.61151,1.61322c0,0.89124 0.72174,1.61462 1.61151,1.61462z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1110.22665,1079.39032c0.89136,0 1.6131,-0.72339 1.6131,-1.61462c0,-0.89142 -0.72174,-1.61322 -1.6131,-1.61322c-0.88959,0 -1.61145,0.7218 -1.61145,1.61322c0,0.89124 0.72186,1.61462 1.61145,1.61462z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1110.22665,1079.39032c0.89136,0 1.6131,-0.72339 1.6131,-1.61462c0,-0.89142 -0.72174,-1.61322 -1.6131,-1.61322c-0.88959,0 -1.61145,0.7218 -1.61145,1.61322c0,0.89124 0.72186,1.61462 1.61145,1.61462z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M973.14315,1079.39032c0.88965,0 1.61151,-0.72339 1.61151,-1.61462c0,-0.89142 -0.72186,-1.61322 -1.61151,-1.61322c-0.89124,0 -1.61298,0.7218 -1.61298,1.61322c0,0.89124 0.72174,1.61462 1.61298,1.61462z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M973.14315,1079.39032c0.88965,0 1.61151,-0.72339 1.61151,-1.61462c0,-0.89142 -0.72186,-1.61322 -1.61151,-1.61322c-0.89124,0 -1.61298,0.7218 -1.61298,1.61322c0,0.89124 0.72174,1.61462 1.61298,1.61462z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M837.67126,1079.39032c0.88959,0 1.61139,-0.72339 1.61139,-1.61462c0,-0.89142 -0.7218,-1.61322 -1.61139,-1.61322c-0.89136,0 -1.6131,0.7218 -1.6131,1.61322c0,0.89124 0.72174,1.61462 1.6131,1.61462z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M837.67126,1079.39032c0.88959,0 1.61139,-0.72339 1.61139,-1.61462c0,-0.89142 -0.7218,-1.61322 -1.61139,-1.61322c-0.89136,0 -1.6131,0.7218 -1.6131,1.61322c0,0.89124 0.72174,1.61462 1.6131,1.61462z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M700.58615,1079.39032c0.8913,0 1.6131,-0.72339 1.6131,-1.61462c0,-0.89142 -0.7218,-1.61322 -1.6131,-1.61322c-0.88968,0 -1.61307,0.7218 -1.61307,1.61322c0,0.89124 0.72339,1.61462 1.61307,1.61462z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M700.58615,1079.39032c0.8913,0 1.6131,-0.72339 1.6131,-1.61462c0,-0.89142 -0.7218,-1.61322 -1.6131,-1.61322c-0.88968,0 -1.61307,0.7218 -1.61307,1.61322c0,0.89124 0.72339,1.61462 1.61307,1.61462z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M565.11416,1079.39032c0.88974,0 1.6131,-0.72339 1.6131,-1.61462c0,-0.89142 -0.72336,-1.61322 -1.6131,-1.61322c-0.8913,0 -1.61307,0.7218 -1.61307,1.61322c0,0.89124 0.72177,1.61462 1.61307,1.61462z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M565.11416,1079.39032c0.88974,0 1.6131,-0.72339 1.6131,-1.61462c0,-0.89142 -0.72336,-1.61322 -1.6131,-1.61322c-0.8913,0 -1.61307,0.7218 -1.61307,1.61322c0,0.89124 0.72177,1.61462 1.61307,1.61462z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M429.64212,1079.39032c0.89133,0 1.61311,-0.72339 1.61311,-1.61462c0,-0.89142 -0.72179,-1.61322 -1.61311,-1.61322c-0.8913,0 -1.61304,0.7218 -1.61304,1.61322c0,0.89124 0.72174,1.61462 1.61304,1.61462z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M429.64212,1079.39032c0.89133,0 1.61311,-0.72339 1.61311,-1.61462c0,-0.89142 -0.72179,-1.61322 -1.61311,-1.61322c-0.8913,0 -1.61304,0.7218 -1.61304,1.61322c0,0.89124 0.72174,1.61462 1.61304,1.61462z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M292.55707,1079.39032c0.8913,0 1.61307,-0.72339 1.61307,-1.61462c0,-0.89142 -0.72177,-1.61322 -1.61307,-1.61322c-0.8913,0 -1.61307,0.7218 -1.61307,1.61322c0,0.89124 0.72177,1.61462 1.61307,1.61462z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M292.55707,1079.39032c0.8913,0 1.61307,-0.72339 1.61307,-1.61462c0,-0.89142 -0.72177,-1.61322 -1.61307,-1.61322c-0.8913,0 -1.61307,0.7218 -1.61307,1.61322c0,0.89124 0.72177,1.61462 1.61307,1.61462z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M157.08508,1079.39032c0.8913,0 1.61307,-0.72339 1.61307,-1.61462c0,-0.89142 -0.72176,-1.61322 -1.61307,-1.61322c-0.89132,0 -1.61308,0.7218 -1.61308,1.61322c0,0.89124 0.72176,1.61462 1.61308,1.61462z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M157.08508,1079.39032c0.8913,0 1.61307,-0.72339 1.61307,-1.61462c0,-0.89142 -0.72176,-1.61322 -1.61307,-1.61322c-0.89132,0 -1.61308,0.7218 -1.61308,1.61322c0,0.89124 0.72176,1.61462 1.61308,1.61462z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M84.51148,1200.4093c0.8897,0 1.61307,-0.72186 1.61307,-1.61322c0,-0.89124 -0.72337,-1.61298 -1.61307,-1.61298c-0.8913,0 -1.61307,0.72174 -1.61307,1.61298c0,0.89136 0.72177,1.61322 1.61307,1.61322z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M84.51148,1200.4093c0.8897,0 1.61307,-0.72186 1.61307,-1.61322c0,-0.89124 -0.72337,-1.61298 -1.61307,-1.61298c-0.8913,0 -1.61307,0.72174 -1.61307,1.61298c0,0.89136 0.72177,1.61322 1.61307,1.61322z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1989.18002,1200.4093c0.88818,0 1.61462,-0.72186 1.61462,-1.61322c0,-0.89124 -0.72644,-1.61298 -1.61462,-1.61298c-0.88794,0 -1.61462,0.72174 -1.61462,1.61298c0,0.89136 0.72668,1.61322 1.61462,1.61322z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1989.18002,1200.4093c0.88818,0 1.61462,-0.72186 1.61462,-1.61322c0,-0.89124 -0.72644,-1.61298 -1.61462,-1.61298c-0.88794,0 -1.61462,0.72174 -1.61462,1.61298c0,0.89136 0.72668,1.61322 1.61462,1.61322z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1852.09329,1200.4093c0.88794,0 1.61475,-0.72186 1.61475,-1.61322c0,-0.89124 -0.72681,-1.61298 -1.61475,-1.61298c-0.88782,0 -1.61462,0.72174 -1.61462,1.61298c0,0.89136 0.72681,1.61322 1.61462,1.61322z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1852.09329,1200.4093c0.88794,0 1.61475,-0.72186 1.61475,-1.61322c0,-0.89124 -0.72681,-1.61298 -1.61475,-1.61298c-0.88782,0 -1.61462,0.72174 -1.61462,1.61298c0,0.89136 0.72681,1.61322 1.61462,1.61322z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1716.62149,1200.4093c0.88806,0 1.61475,-0.72186 1.61475,-1.61322c0,-0.89124 -0.72668,-1.61298 -1.61475,-1.61298c-0.88806,0 -1.61487,0.72174 -1.61487,1.61298c0,0.89136 0.72681,1.61322 1.61487,1.61322z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1716.62149,1200.4093c0.88806,0 1.61475,-0.72186 1.61475,-1.61322c0,-0.89124 -0.72668,-1.61298 -1.61475,-1.61298c-0.88806,0 -1.61487,0.72174 -1.61487,1.61298c0,0.89136 0.72681,1.61322 1.61487,1.61322z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1581.15414,1200.4093c0.88989,0 1.61322,-0.72186 1.61322,-1.61322c0,-0.89124 -0.72333,-1.61298 -1.61322,-1.61298c-0.89124,0 -1.61298,0.72174 -1.61298,1.61298c0,0.89136 0.72174,1.61322 1.61298,1.61322z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1581.15414,1200.4093c0.88989,0 1.61322,-0.72186 1.61322,-1.61322c0,-0.89124 -0.72333,-1.61298 -1.61322,-1.61298c-0.89124,0 -1.61298,0.72174 -1.61298,1.61298c0,0.89136 0.72174,1.61322 1.61298,1.61322z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1444.06918,1200.4093c0.8913,0 1.61298,-0.72186 1.61298,-1.61322c0,-0.89124 -0.72168,-1.61298 -1.61298,-1.61298c-0.8913,0 -1.61316,0.72174 -1.61316,1.61298c0,0.89136 0.72186,1.61322 1.61316,1.61322z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1444.06918,1200.4093c0.8913,0 1.61298,-0.72186 1.61298,-1.61322c0,-0.89124 -0.72168,-1.61298 -1.61298,-1.61298c-0.8913,0 -1.61316,0.72174 -1.61316,1.61298c0,0.89136 0.72186,1.61322 1.61316,1.61322z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1308.59698,1200.4093c0.89136,0 1.61316,-0.72186 1.61316,-1.61322c0,-0.89124 -0.7218,-1.61298 -1.61316,-1.61298c-0.88959,0 -1.61133,0.72174 -1.61133,1.61298c0,0.89136 0.72174,1.61322 1.61133,1.61322z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1308.59698,1200.4093c0.89136,0 1.61316,-0.72186 1.61316,-1.61322c0,-0.89124 -0.7218,-1.61298 -1.61316,-1.61298c-0.88959,0 -1.61133,0.72174 -1.61133,1.61298c0,0.89136 0.72174,1.61322 1.61133,1.61322z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1173.12518,1200.4093c0.8913,0 1.61298,-0.72186 1.61298,-1.61322c0,-0.89124 -0.72168,-1.61298 -1.61298,-1.61298c-0.8913,0 -1.61316,0.72174 -1.61316,1.61298c0,0.89136 0.72186,1.61322 1.61316,1.61322z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1173.12518,1200.4093c0.8913,0 1.61298,-0.72186 1.61298,-1.61322c0,-0.89124 -0.72168,-1.61298 -1.61298,-1.61298c-0.8913,0 -1.61316,0.72174 -1.61316,1.61298c0,0.89136 0.72186,1.61322 1.61316,1.61322z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1036.03997,1200.4093c0.8913,0 1.61298,-0.72186 1.61298,-1.61322c0,-0.89124 -0.72168,-1.61298 -1.61298,-1.61298c-0.88965,0 -1.61304,0.72174 -1.61304,1.61298c0,0.89136 0.72339,1.61322 1.61304,1.61322z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1036.03997,1200.4093c0.8913,0 1.61298,-0.72186 1.61298,-1.61322c0,-0.89124 -0.72168,-1.61298 -1.61298,-1.61298c-0.88965,0 -1.61304,0.72174 -1.61304,1.61298c0,0.89136 0.72339,1.61322 1.61304,1.61322z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M900.56802,1200.4093c0.89136,0 1.6131,-0.72186 1.6131,-1.61322c0,-0.89124 -0.72174,-1.61298 -1.6131,-1.61298c-0.88977,0 -1.6131,0.72174 -1.6131,1.61298c0,0.89136 0.72333,1.61322 1.6131,1.61322z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M900.56802,1200.4093c0.89136,0 1.6131,-0.72186 1.6131,-1.61322c0,-0.89124 -0.72174,-1.61298 -1.6131,-1.61298c-0.88977,0 -1.6131,0.72174 -1.6131,1.61298c0,0.89136 0.72333,1.61322 1.6131,1.61322z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M765.09604,1200.4093c0.89127,0 1.61304,-0.72186 1.61304,-1.61322c0,-0.89124 -0.72177,-1.61298 -1.61304,-1.61298c-0.88974,0 -1.61151,0.72174 -1.61151,1.61298c0,0.89136 0.72177,1.61322 1.61151,1.61322z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M765.09604,1200.4093c0.89127,0 1.61304,-0.72186 1.61304,-1.61322c0,-0.89124 -0.72177,-1.61298 -1.61304,-1.61298c-0.88974,0 -1.61151,0.72174 -1.61151,1.61298c0,0.89136 0.72177,1.61322 1.61151,1.61322z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M628.01092,1200.4093c0.89127,0 1.61304,-0.72186 1.61304,-1.61322c0,-0.89124 -0.72177,-1.61298 -1.61304,-1.61298c-0.88971,0 -1.61142,0.72174 -1.61142,1.61298c0,0.89136 0.72171,1.61322 1.61142,1.61322z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M628.01092,1200.4093c0.89127,0 1.61304,-0.72186 1.61304,-1.61322c0,-0.89124 -0.72177,-1.61298 -1.61304,-1.61298c-0.88971,0 -1.61142,0.72174 -1.61142,1.61298c0,0.89136 0.72171,1.61322 1.61142,1.61322z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M492.53894,1200.4093c0.8913,0 1.61307,-0.72186 1.61307,-1.61322c0,-0.89124 -0.72177,-1.61298 -1.61307,-1.61298c-0.88971,0 -1.61142,0.72174 -1.61142,1.61298c0,0.89136 0.72171,1.61322 1.61142,1.61322z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M492.53894,1200.4093c0.8913,0 1.61307,-0.72186 1.61307,-1.61322c0,-0.89124 -0.72177,-1.61298 -1.61307,-1.61298c-0.88971,0 -1.61142,0.72174 -1.61142,1.61298c0,0.89136 0.72171,1.61322 1.61142,1.61322z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M355.4555,1200.4093c0.88966,0 1.61145,-0.72186 1.61145,-1.61322c0,-0.89124 -0.72179,-1.61298 -1.61145,-1.61298c-0.89133,0 -1.6131,0.72174 -1.6131,1.61298c0,0.89136 0.72177,1.61322 1.6131,1.61322z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M355.4555,1200.4093c0.88966,0 1.61145,-0.72186 1.61145,-1.61322c0,-0.89124 -0.72179,-1.61298 -1.61145,-1.61298c-0.89133,0 -1.6131,0.72174 -1.6131,1.61298c0,0.89136 0.72177,1.61322 1.6131,1.61322z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M219.98349,1200.4093c0.88969,0 1.61147,-0.72186 1.61147,-1.61322c0,-0.89124 -0.72179,-1.61298 -1.61147,-1.61298c-0.89131,0 -1.61307,0.72174 -1.61307,1.61298c0,0.89136 0.72176,1.61322 1.61307,1.61322z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M219.98349,1200.4093c0.88969,0 1.61147,-0.72186 1.61147,-1.61322c0,-0.89124 -0.72179,-1.61298 -1.61147,-1.61298c-0.89131,0 -1.61307,0.72174 -1.61307,1.61298c0,0.89136 0.72176,1.61322 1.61307,1.61322z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M21.61307,1313.36276c0.89131,0 1.61307,-0.72339 1.61307,-1.61462c0,-0.8913 -0.72176,-1.61304 -1.61307,-1.61304c-0.88969,0 -1.61307,0.72174 -1.61307,1.61304c0,0.89124 0.72338,1.61462 1.61307,1.61462z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M21.61307,1313.36276c0.89131,0 1.61307,-0.72339 1.61307,-1.61462c0,-0.8913 -0.72176,-1.61304 -1.61307,-1.61304c-0.88969,0 -1.61307,0.72174 -1.61307,1.61304c0,0.89124 0.72338,1.61462 1.61307,1.61462z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1926.28842,1313.36276c0.88782,0 1.61462,-0.72339 1.61462,-1.61462c0,-0.8913 -0.72681,-1.61304 -1.61462,-1.61304c-0.88818,0 -1.61487,0.72174 -1.61487,1.61304c0,0.89124 0.72668,1.61462 1.61487,1.61462z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1926.28842,1313.36276c0.88782,0 1.61462,-0.72339 1.61462,-1.61462c0,-0.8913 -0.72681,-1.61304 -1.61462,-1.61304c-0.88818,0 -1.61487,0.72174 -1.61487,1.61304c0,0.89124 0.72668,1.61462 1.61487,1.61462z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1789.20144,1313.36276c0.88794,0 1.61462,-0.72339 1.61462,-1.61462c0,-0.8913 -0.72668,-1.61304 -1.61462,-1.61304c-0.88818,0 -1.61462,0.72174 -1.61462,1.61304c0,0.89124 0.72644,1.61462 1.61462,1.61462z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1789.20144,1313.36276c0.88794,0 1.61462,-0.72339 1.61462,-1.61462c0,-0.8913 -0.72668,-1.61304 -1.61462,-1.61304c-0.88818,0 -1.61462,0.72174 -1.61462,1.61304c0,0.89124 0.72644,1.61462 1.61462,1.61462z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1653.7294,1313.36276c0.88806,0 1.61475,-0.72339 1.61475,-1.61462c0,-0.8913 -0.72668,-1.61304 -1.61475,-1.61304c-0.88818,0 -1.61462,0.72174 -1.61462,1.61304c0,0.89124 0.72644,1.61462 1.61462,1.61462z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1653.7294,1313.36276c0.88806,0 1.61475,-0.72339 1.61475,-1.61462c0,-0.8913 -0.72668,-1.61304 -1.61475,-1.61304c-0.88818,0 -1.61462,0.72174 -1.61462,1.61304c0,0.89124 0.72644,1.61462 1.61462,1.61462z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1518.25564,1313.36276c0.89148,0 1.61316,-0.72339 1.61316,-1.61462c0,-0.8913 -0.72168,-1.61304 -1.61316,-1.61304c-0.88959,0 -1.61298,0.72174 -1.61298,1.61304c0,0.89124 0.72339,1.61462 1.61298,1.61462z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1518.25564,1313.36276c0.89148,0 1.61316,-0.72339 1.61316,-1.61462c0,-0.8913 -0.72168,-1.61304 -1.61316,-1.61304c-0.88959,0 -1.61298,0.72174 -1.61298,1.61304c0,0.89124 0.72339,1.61462 1.61298,1.61462z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1381.17239,1313.36276c0.88971,0 1.61298,-0.72339 1.61298,-1.61462c0,-0.8913 -0.72327,-1.61304 -1.61298,-1.61304c-0.89124,0 -1.61316,0.72174 -1.61316,1.61304c0,0.89124 0.72192,1.61462 1.61316,1.61462z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1381.17239,1313.36276c0.88971,0 1.61298,-0.72339 1.61298,-1.61462c0,-0.8913 -0.72327,-1.61304 -1.61298,-1.61304c-0.89124,0 -1.61316,0.72174 -1.61316,1.61304c0,0.89124 0.72192,1.61462 1.61316,1.61462z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1245.69876,1313.36276c0.8913,0 1.6131,-0.72339 1.6131,-1.61462c0,-0.8913 -0.7218,-1.61304 -1.6131,-1.61304c-0.88977,0 -1.61151,0.72174 -1.61151,1.61304c0,0.89124 0.72174,1.61462 1.61151,1.61462z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1245.69876,1313.36276c0.8913,0 1.6131,-0.72339 1.6131,-1.61462c0,-0.8913 -0.7218,-1.61304 -1.6131,-1.61304c-0.88977,0 -1.61151,0.72174 -1.61151,1.61304c0,0.89124 0.72174,1.61462 1.61151,1.61462z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1110.22665,1313.36276c0.89136,0 1.6131,-0.72339 1.6131,-1.61462c0,-0.8913 -0.72174,-1.61304 -1.6131,-1.61304c-0.88959,0 -1.61145,0.72174 -1.61145,1.61304c0,0.89124 0.72186,1.61462 1.61145,1.61462z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1110.22665,1313.36276c0.89136,0 1.6131,-0.72339 1.6131,-1.61462c0,-0.8913 -0.72174,-1.61304 -1.6131,-1.61304c-0.88959,0 -1.61145,0.72174 -1.61145,1.61304c0,0.89124 0.72186,1.61462 1.61145,1.61462z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M973.14315,1313.36276c0.88965,0 1.61151,-0.72339 1.61151,-1.61462c0,-0.8913 -0.72186,-1.61304 -1.61151,-1.61304c-0.89124,0 -1.61298,0.72174 -1.61298,1.61304c0,0.89124 0.72174,1.61462 1.61298,1.61462z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M973.14315,1313.36276c0.88965,0 1.61151,-0.72339 1.61151,-1.61462c0,-0.8913 -0.72186,-1.61304 -1.61151,-1.61304c-0.89124,0 -1.61298,0.72174 -1.61298,1.61304c0,0.89124 0.72174,1.61462 1.61298,1.61462z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M837.67126,1313.36276c0.88959,0 1.61139,-0.72339 1.61139,-1.61462c0,-0.8913 -0.7218,-1.61304 -1.61139,-1.61304c-0.89136,0 -1.6131,0.72174 -1.6131,1.61304c0,0.89124 0.72174,1.61462 1.6131,1.61462z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M837.67126,1313.36276c0.88959,0 1.61139,-0.72339 1.61139,-1.61462c0,-0.8913 -0.7218,-1.61304 -1.61139,-1.61304c-0.89136,0 -1.6131,0.72174 -1.6131,1.61304c0,0.89124 0.72174,1.61462 1.6131,1.61462z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M700.58615,1313.36276c0.8913,0 1.6131,-0.72339 1.6131,-1.61462c0,-0.8913 -0.7218,-1.61304 -1.6131,-1.61304c-0.88968,0 -1.61307,0.72174 -1.61307,1.61304c0,0.89124 0.72339,1.61462 1.61307,1.61462z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M700.58615,1313.36276c0.8913,0 1.6131,-0.72339 1.6131,-1.61462c0,-0.8913 -0.7218,-1.61304 -1.6131,-1.61304c-0.88968,0 -1.61307,0.72174 -1.61307,1.61304c0,0.89124 0.72339,1.61462 1.61307,1.61462z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M565.11416,1313.36276c0.88974,0 1.6131,-0.72339 1.6131,-1.61462c0,-0.8913 -0.72336,-1.61304 -1.6131,-1.61304c-0.8913,0 -1.61307,0.72174 -1.61307,1.61304c0,0.89124 0.72177,1.61462 1.61307,1.61462z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M565.11416,1313.36276c0.88974,0 1.6131,-0.72339 1.6131,-1.61462c0,-0.8913 -0.72336,-1.61304 -1.6131,-1.61304c-0.8913,0 -1.61307,0.72174 -1.61307,1.61304c0,0.89124 0.72177,1.61462 1.61307,1.61462z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M429.64212,1313.36276c0.89133,0 1.61311,-0.72339 1.61311,-1.61462c0,-0.8913 -0.72179,-1.61304 -1.61311,-1.61304c-0.8913,0 -1.61304,0.72174 -1.61304,1.61304c0,0.89124 0.72174,1.61462 1.61304,1.61462z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M429.64212,1313.36276c0.89133,0 1.61311,-0.72339 1.61311,-1.61462c0,-0.8913 -0.72179,-1.61304 -1.61311,-1.61304c-0.8913,0 -1.61304,0.72174 -1.61304,1.61304c0,0.89124 0.72174,1.61462 1.61304,1.61462z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M292.55707,1313.36276c0.8913,0 1.61307,-0.72339 1.61307,-1.61462c0,-0.8913 -0.72177,-1.61304 -1.61307,-1.61304c-0.8913,0 -1.61307,0.72174 -1.61307,1.61304c0,0.89124 0.72177,1.61462 1.61307,1.61462z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M292.55707,1313.36276c0.8913,0 1.61307,-0.72339 1.61307,-1.61462c0,-0.8913 -0.72177,-1.61304 -1.61307,-1.61304c-0.8913,0 -1.61307,0.72174 -1.61307,1.61304c0,0.89124 0.72177,1.61462 1.61307,1.61462z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M157.08508,1313.36276c0.8913,0 1.61307,-0.72339 1.61307,-1.61462c0,-0.8913 -0.72176,-1.61304 -1.61307,-1.61304c-0.89132,0 -1.61308,0.72174 -1.61308,1.61304c0,0.89124 0.72176,1.61462 1.61308,1.61462z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M157.08508,1313.36276c0.8913,0 1.61307,-0.72339 1.61307,-1.61462c0,-0.8913 -0.72176,-1.61304 -1.61307,-1.61304c-0.89132,0 -1.61308,0.72174 -1.61308,1.61304c0,0.89124 0.72176,1.61462 1.61308,1.61462z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M84.51148,1432.76877c0.8897,0 1.61307,-0.72168 1.61307,-1.61298c0,-0.89124 -0.72337,-1.61316 -1.61307,-1.61316c-0.8913,0 -1.61307,0.72192 -1.61307,1.61316c0,0.8913 0.72177,1.61298 1.61307,1.61298z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M84.51148,1432.76877c0.8897,0 1.61307,-0.72168 1.61307,-1.61298c0,-0.89124 -0.72337,-1.61316 -1.61307,-1.61316c-0.8913,0 -1.61307,0.72192 -1.61307,1.61316c0,0.8913 0.72177,1.61298 1.61307,1.61298z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1989.18002,1432.76877c0.88818,0 1.61462,-0.72168 1.61462,-1.61298c0,-0.89124 -0.72644,-1.61316 -1.61462,-1.61316c-0.88794,0 -1.61462,0.72192 -1.61462,1.61316c0,0.8913 0.72668,1.61298 1.61462,1.61298z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1989.18002,1432.76877c0.88818,0 1.61462,-0.72168 1.61462,-1.61298c0,-0.89124 -0.72644,-1.61316 -1.61462,-1.61316c-0.88794,0 -1.61462,0.72192 -1.61462,1.61316c0,0.8913 0.72668,1.61298 1.61462,1.61298z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1852.09329,1432.76877c0.88794,0 1.61475,-0.72168 1.61475,-1.61298c0,-0.89124 -0.72681,-1.61316 -1.61475,-1.61316c-0.88782,0 -1.61462,0.72192 -1.61462,1.61316c0,0.8913 0.72681,1.61298 1.61462,1.61298z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1852.09329,1432.76877c0.88794,0 1.61475,-0.72168 1.61475,-1.61298c0,-0.89124 -0.72681,-1.61316 -1.61475,-1.61316c-0.88782,0 -1.61462,0.72192 -1.61462,1.61316c0,0.8913 0.72681,1.61298 1.61462,1.61298z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1716.62149,1432.76877c0.88806,0 1.61475,-0.72168 1.61475,-1.61298c0,-0.89124 -0.72668,-1.61316 -1.61475,-1.61316c-0.88806,0 -1.61487,0.72192 -1.61487,1.61316c0,0.8913 0.72681,1.61298 1.61487,1.61298z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1716.62149,1432.76877c0.88806,0 1.61475,-0.72168 1.61475,-1.61298c0,-0.89124 -0.72668,-1.61316 -1.61475,-1.61316c-0.88806,0 -1.61487,0.72192 -1.61487,1.61316c0,0.8913 0.72681,1.61298 1.61487,1.61298z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1581.15414,1432.76877c0.88989,0 1.61322,-0.72168 1.61322,-1.61298c0,-0.89124 -0.72333,-1.61316 -1.61322,-1.61316c-0.89124,0 -1.61298,0.72192 -1.61298,1.61316c0,0.8913 0.72174,1.61298 1.61298,1.61298z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1581.15414,1432.76877c0.88989,0 1.61322,-0.72168 1.61322,-1.61298c0,-0.89124 -0.72333,-1.61316 -1.61322,-1.61316c-0.89124,0 -1.61298,0.72192 -1.61298,1.61316c0,0.8913 0.72174,1.61298 1.61298,1.61298z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1444.06918,1432.76877c0.8913,0 1.61298,-0.72168 1.61298,-1.61298c0,-0.89124 -0.72168,-1.61316 -1.61298,-1.61316c-0.8913,0 -1.61316,0.72192 -1.61316,1.61316c0,0.8913 0.72186,1.61298 1.61316,1.61298z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1444.06918,1432.76877c0.8913,0 1.61298,-0.72168 1.61298,-1.61298c0,-0.89124 -0.72168,-1.61316 -1.61298,-1.61316c-0.8913,0 -1.61316,0.72192 -1.61316,1.61316c0,0.8913 0.72186,1.61298 1.61316,1.61298z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1308.59698,1432.76877c0.89136,0 1.61316,-0.72168 1.61316,-1.61298c0,-0.89124 -0.7218,-1.61316 -1.61316,-1.61316c-0.88959,0 -1.61133,0.72192 -1.61133,1.61316c0,0.8913 0.72174,1.61298 1.61133,1.61298z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1308.59698,1432.76877c0.89136,0 1.61316,-0.72168 1.61316,-1.61298c0,-0.89124 -0.7218,-1.61316 -1.61316,-1.61316c-0.88959,0 -1.61133,0.72192 -1.61133,1.61316c0,0.8913 0.72174,1.61298 1.61133,1.61298z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1173.12518,1432.76877c0.8913,0 1.61298,-0.72168 1.61298,-1.61298c0,-0.89124 -0.72168,-1.61316 -1.61298,-1.61316c-0.8913,0 -1.61316,0.72192 -1.61316,1.61316c0,0.8913 0.72186,1.61298 1.61316,1.61298z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1173.12518,1432.76877c0.8913,0 1.61298,-0.72168 1.61298,-1.61298c0,-0.89124 -0.72168,-1.61316 -1.61298,-1.61316c-0.8913,0 -1.61316,0.72192 -1.61316,1.61316c0,0.8913 0.72186,1.61298 1.61316,1.61298z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1036.03997,1432.76877c0.8913,0 1.61298,-0.72168 1.61298,-1.61298c0,-0.89124 -0.72168,-1.61316 -1.61298,-1.61316c-0.88965,0 -1.61304,0.72192 -1.61304,1.61316c0,0.8913 0.72339,1.61298 1.61304,1.61298z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1036.03997,1432.76877c0.8913,0 1.61298,-0.72168 1.61298,-1.61298c0,-0.89124 -0.72168,-1.61316 -1.61298,-1.61316c-0.88965,0 -1.61304,0.72192 -1.61304,1.61316c0,0.8913 0.72339,1.61298 1.61304,1.61298z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M900.56802,1432.76877c0.89136,0 1.6131,-0.72168 1.6131,-1.61298c0,-0.89124 -0.72174,-1.61316 -1.6131,-1.61316c-0.88977,0 -1.6131,0.72192 -1.6131,1.61316c0,0.8913 0.72333,1.61298 1.6131,1.61298z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M900.56802,1432.76877c0.89136,0 1.6131,-0.72168 1.6131,-1.61298c0,-0.89124 -0.72174,-1.61316 -1.6131,-1.61316c-0.88977,0 -1.6131,0.72192 -1.6131,1.61316c0,0.8913 0.72333,1.61298 1.6131,1.61298z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M765.09604,1432.76877c0.89127,0 1.61304,-0.72168 1.61304,-1.61298c0,-0.89124 -0.72177,-1.61316 -1.61304,-1.61316c-0.88974,0 -1.61151,0.72192 -1.61151,1.61316c0,0.8913 0.72177,1.61298 1.61151,1.61298z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M765.09604,1432.76877c0.89127,0 1.61304,-0.72168 1.61304,-1.61298c0,-0.89124 -0.72177,-1.61316 -1.61304,-1.61316c-0.88974,0 -1.61151,0.72192 -1.61151,1.61316c0,0.8913 0.72177,1.61298 1.61151,1.61298z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M628.01092,1432.76877c0.89127,0 1.61304,-0.72168 1.61304,-1.61298c0,-0.89124 -0.72177,-1.61316 -1.61304,-1.61316c-0.88971,0 -1.61142,0.72192 -1.61142,1.61316c0,0.8913 0.72171,1.61298 1.61142,1.61298z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M628.01092,1432.76877c0.89127,0 1.61304,-0.72168 1.61304,-1.61298c0,-0.89124 -0.72177,-1.61316 -1.61304,-1.61316c-0.88971,0 -1.61142,0.72192 -1.61142,1.61316c0,0.8913 0.72171,1.61298 1.61142,1.61298z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M492.53894,1432.76877c0.8913,0 1.61307,-0.72168 1.61307,-1.61298c0,-0.89124 -0.72177,-1.61316 -1.61307,-1.61316c-0.88971,0 -1.61142,0.72192 -1.61142,1.61316c0,0.8913 0.72171,1.61298 1.61142,1.61298z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M492.53894,1432.76877c0.8913,0 1.61307,-0.72168 1.61307,-1.61298c0,-0.89124 -0.72177,-1.61316 -1.61307,-1.61316c-0.88971,0 -1.61142,0.72192 -1.61142,1.61316c0,0.8913 0.72171,1.61298 1.61142,1.61298z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M355.4555,1432.76877c0.88966,0 1.61145,-0.72168 1.61145,-1.61298c0,-0.89124 -0.72179,-1.61316 -1.61145,-1.61316c-0.89133,0 -1.6131,0.72192 -1.6131,1.61316c0,0.8913 0.72177,1.61298 1.6131,1.61298z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M355.4555,1432.76877c0.88966,0 1.61145,-0.72168 1.61145,-1.61298c0,-0.89124 -0.72179,-1.61316 -1.61145,-1.61316c-0.89133,0 -1.6131,0.72192 -1.6131,1.61316c0,0.8913 0.72177,1.61298 1.6131,1.61298z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M219.98349,1432.76877c0.88969,0 1.61147,-0.72168 1.61147,-1.61298c0,-0.89124 -0.72179,-1.61316 -1.61147,-1.61316c-0.89131,0 -1.61307,0.72192 -1.61307,1.61316c0,0.8913 0.72176,1.61298 1.61307,1.61298z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M219.98349,1432.76877c0.88969,0 1.61147,-0.72168 1.61147,-1.61298c0,-0.89124 -0.72179,-1.61316 -1.61147,-1.61316c-0.89131,0 -1.61307,0.72192 -1.61307,1.61316c0,0.8913 0.72176,1.61298 1.61307,1.61298z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M84.51148,24.0924c0.8897,0 1.61307,-0.72338 1.61307,-1.61468c0,-0.88969 -0.72337,-1.61307 -1.61307,-1.61307c-0.8913,0 -1.61307,0.72338 -1.61307,1.61307c0,0.89131 0.72177,1.61468 1.61307,1.61468z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M84.51148,24.0924c0.8897,0 1.61307,-0.72338 1.61307,-1.61468c0,-0.88969 -0.72337,-1.61307 -1.61307,-1.61307c-0.8913,0 -1.61307,0.72338 -1.61307,1.61307c0,0.89131 0.72177,1.61468 1.61307,1.61468z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1989.18002,24.0924c0.88818,0 1.61462,-0.72338 1.61462,-1.61468c0,-0.88969 -0.72644,-1.61307 -1.61462,-1.61307c-0.88794,0 -1.61462,0.72338 -1.61462,1.61307c0,0.89131 0.72668,1.61468 1.61462,1.61468z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1989.18002,24.0924c0.88818,0 1.61462,-0.72338 1.61462,-1.61468c0,-0.88969 -0.72644,-1.61307 -1.61462,-1.61307c-0.88794,0 -1.61462,0.72338 -1.61462,1.61307c0,0.89131 0.72668,1.61468 1.61462,1.61468z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1852.09329,24.0924c0.88794,0 1.61475,-0.72338 1.61475,-1.61468c0,-0.88969 -0.72681,-1.61307 -1.61475,-1.61307c-0.88782,0 -1.61462,0.72338 -1.61462,1.61307c0,0.89131 0.72681,1.61468 1.61462,1.61468z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1852.09329,24.0924c0.88794,0 1.61475,-0.72338 1.61475,-1.61468c0,-0.88969 -0.72681,-1.61307 -1.61475,-1.61307c-0.88782,0 -1.61462,0.72338 -1.61462,1.61307c0,0.89131 0.72681,1.61468 1.61462,1.61468z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1716.62149,24.0924c0.88806,0 1.61475,-0.72338 1.61475,-1.61468c0,-0.88969 -0.72668,-1.61307 -1.61475,-1.61307c-0.88806,0 -1.61487,0.72338 -1.61487,1.61307c0,0.89131 0.72681,1.61468 1.61487,1.61468z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1716.62149,24.0924c0.88806,0 1.61475,-0.72338 1.61475,-1.61468c0,-0.88969 -0.72668,-1.61307 -1.61475,-1.61307c-0.88806,0 -1.61487,0.72338 -1.61487,1.61307c0,0.89131 0.72681,1.61468 1.61487,1.61468z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1581.15414,24.0924c0.88989,0 1.61322,-0.72338 1.61322,-1.61468c0,-0.88969 -0.72333,-1.61307 -1.61322,-1.61307c-0.89124,0 -1.61298,0.72338 -1.61298,1.61307c0,0.89131 0.72174,1.61468 1.61298,1.61468z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1581.15414,24.0924c0.88989,0 1.61322,-0.72338 1.61322,-1.61468c0,-0.88969 -0.72333,-1.61307 -1.61322,-1.61307c-0.89124,0 -1.61298,0.72338 -1.61298,1.61307c0,0.89131 0.72174,1.61468 1.61298,1.61468z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1444.06918,24.0924c0.8913,0 1.61298,-0.72338 1.61298,-1.61468c0,-0.88969 -0.72168,-1.61307 -1.61298,-1.61307c-0.8913,0 -1.61316,0.72338 -1.61316,1.61307c0,0.89131 0.72186,1.61468 1.61316,1.61468z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1444.06918,24.0924c0.8913,0 1.61298,-0.72338 1.61298,-1.61468c0,-0.88969 -0.72168,-1.61307 -1.61298,-1.61307c-0.8913,0 -1.61316,0.72338 -1.61316,1.61307c0,0.89131 0.72186,1.61468 1.61316,1.61468z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1308.59698,24.0924c0.89136,0 1.61316,-0.72338 1.61316,-1.61468c0,-0.88969 -0.7218,-1.61307 -1.61316,-1.61307c-0.88959,0 -1.61133,0.72338 -1.61133,1.61307c0,0.89131 0.72174,1.61468 1.61133,1.61468z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1308.59698,24.0924c0.89136,0 1.61316,-0.72338 1.61316,-1.61468c0,-0.88969 -0.7218,-1.61307 -1.61316,-1.61307c-0.88959,0 -1.61133,0.72338 -1.61133,1.61307c0,0.89131 0.72174,1.61468 1.61133,1.61468z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1173.12518,24.0924c0.8913,0 1.61298,-0.72338 1.61298,-1.61468c0,-0.88969 -0.72168,-1.61307 -1.61298,-1.61307c-0.8913,0 -1.61316,0.72338 -1.61316,1.61307c0,0.89131 0.72186,1.61468 1.61316,1.61468z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1173.12518,24.0924c0.8913,0 1.61298,-0.72338 1.61298,-1.61468c0,-0.88969 -0.72168,-1.61307 -1.61298,-1.61307c-0.8913,0 -1.61316,0.72338 -1.61316,1.61307c0,0.89131 0.72186,1.61468 1.61316,1.61468z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1036.03997,24.0924c0.8913,0 1.61298,-0.72338 1.61298,-1.61468c0,-0.88969 -0.72168,-1.61307 -1.61298,-1.61307c-0.88965,0 -1.61304,0.72338 -1.61304,1.61307c0,0.89131 0.72339,1.61468 1.61304,1.61468z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1036.03997,24.0924c0.8913,0 1.61298,-0.72338 1.61298,-1.61468c0,-0.88969 -0.72168,-1.61307 -1.61298,-1.61307c-0.88965,0 -1.61304,0.72338 -1.61304,1.61307c0,0.89131 0.72339,1.61468 1.61304,1.61468z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M900.56802,24.0924c0.89136,0 1.6131,-0.72338 1.6131,-1.61468c0,-0.88969 -0.72174,-1.61307 -1.6131,-1.61307c-0.88977,0 -1.6131,0.72338 -1.6131,1.61307c0,0.89131 0.72333,1.61468 1.6131,1.61468z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M900.56802,24.0924c0.89136,0 1.6131,-0.72338 1.6131,-1.61468c0,-0.88969 -0.72174,-1.61307 -1.6131,-1.61307c-0.88977,0 -1.6131,0.72338 -1.6131,1.61307c0,0.89131 0.72333,1.61468 1.6131,1.61468z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M765.09604,24.0924c0.89127,0 1.61304,-0.72338 1.61304,-1.61468c0,-0.88969 -0.72177,-1.61307 -1.61304,-1.61307c-0.88974,0 -1.61151,0.72338 -1.61151,1.61307c0,0.89131 0.72177,1.61468 1.61151,1.61468z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M765.09604,24.0924c0.89127,0 1.61304,-0.72338 1.61304,-1.61468c0,-0.88969 -0.72177,-1.61307 -1.61304,-1.61307c-0.88974,0 -1.61151,0.72338 -1.61151,1.61307c0,0.89131 0.72177,1.61468 1.61151,1.61468z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M628.01092,24.0924c0.89127,0 1.61304,-0.72338 1.61304,-1.61468c0,-0.88969 -0.72177,-1.61307 -1.61304,-1.61307c-0.88971,0 -1.61142,0.72338 -1.61142,1.61307c0,0.89131 0.72171,1.61468 1.61142,1.61468z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M628.01092,24.0924c0.89127,0 1.61304,-0.72338 1.61304,-1.61468c0,-0.88969 -0.72177,-1.61307 -1.61304,-1.61307c-0.88971,0 -1.61142,0.72338 -1.61142,1.61307c0,0.89131 0.72171,1.61468 1.61142,1.61468z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M492.53894,24.0924c0.8913,0 1.61307,-0.72338 1.61307,-1.61468c0,-0.88969 -0.72177,-1.61307 -1.61307,-1.61307c-0.88971,0 -1.61142,0.72338 -1.61142,1.61307c0,0.89131 0.72171,1.61468 1.61142,1.61468z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M492.53894,24.0924c0.8913,0 1.61307,-0.72338 1.61307,-1.61468c0,-0.88969 -0.72177,-1.61307 -1.61307,-1.61307c-0.88971,0 -1.61142,0.72338 -1.61142,1.61307c0,0.89131 0.72171,1.61468 1.61142,1.61468z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M355.4555,24.0924c0.88966,0 1.61145,-0.72338 1.61145,-1.61468c0,-0.88969 -0.72179,-1.61307 -1.61145,-1.61307c-0.89133,0 -1.6131,0.72338 -1.6131,1.61307c0,0.89131 0.72177,1.61468 1.6131,1.61468z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M355.4555,24.0924c0.88966,0 1.61145,-0.72338 1.61145,-1.61468c0,-0.88969 -0.72179,-1.61307 -1.61145,-1.61307c-0.89133,0 -1.6131,0.72338 -1.6131,1.61307c0,0.89131 0.72177,1.61468 1.6131,1.61468z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M220.6778,24.2361c0.8913,0 1.61308,-0.72338 1.61308,-1.61468c0,-0.89131 -0.72177,-1.61307 -1.61308,-1.61307c-0.88969,0 -1.61146,0.72176 -1.61146,1.61307c0,0.89131 0.72177,1.61468 1.61146,1.61468z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M220.6778,24.2361c0.8913,0 1.61308,-0.72338 1.61308,-1.61468c0,-0.89131 -0.72177,-1.61307 -1.61308,-1.61307c-0.88969,0 -1.61146,0.72176 -1.61146,1.61307c0,0.89131 0.72177,1.61468 1.61146,1.61468z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M21.61307,143.49829c0.89131,0 1.61307,-0.72176 1.61307,-1.61307c0,-0.89131 -0.72176,-1.61307 -1.61307,-1.61307c-0.88969,0 -1.61307,0.72176 -1.61307,1.61307c0,0.89131 0.72338,1.61307 1.61307,1.61307z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M21.61307,143.49829c0.89131,0 1.61307,-0.72176 1.61307,-1.61307c0,-0.89131 -0.72176,-1.61307 -1.61307,-1.61307c-0.88969,0 -1.61307,0.72176 -1.61307,1.61307c0,0.89131 0.72338,1.61307 1.61307,1.61307z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1926.28842,143.49829c0.88782,0 1.61462,-0.72176 1.61462,-1.61307c0,-0.89131 -0.72681,-1.61307 -1.61462,-1.61307c-0.88818,0 -1.61487,0.72176 -1.61487,1.61307c0,0.89131 0.72668,1.61307 1.61487,1.61307z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1926.28842,143.49829c0.88782,0 1.61462,-0.72176 1.61462,-1.61307c0,-0.89131 -0.72681,-1.61307 -1.61462,-1.61307c-0.88818,0 -1.61487,0.72176 -1.61487,1.61307c0,0.89131 0.72668,1.61307 1.61487,1.61307z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1789.20144,143.49829c0.88794,0 1.61462,-0.72176 1.61462,-1.61307c0,-0.89131 -0.72668,-1.61307 -1.61462,-1.61307c-0.88818,0 -1.61462,0.72176 -1.61462,1.61307c0,0.89131 0.72644,1.61307 1.61462,1.61307z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1789.20144,143.49829c0.88794,0 1.61462,-0.72176 1.61462,-1.61307c0,-0.89131 -0.72668,-1.61307 -1.61462,-1.61307c-0.88818,0 -1.61462,0.72176 -1.61462,1.61307c0,0.89131 0.72644,1.61307 1.61462,1.61307z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1653.7294,143.49829c0.88806,0 1.61475,-0.72176 1.61475,-1.61307c0,-0.89131 -0.72668,-1.61307 -1.61475,-1.61307c-0.88818,0 -1.61462,0.72176 -1.61462,1.61307c0,0.89131 0.72644,1.61307 1.61462,1.61307z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1653.7294,143.49829c0.88806,0 1.61475,-0.72176 1.61475,-1.61307c0,-0.89131 -0.72668,-1.61307 -1.61475,-1.61307c-0.88818,0 -1.61462,0.72176 -1.61462,1.61307c0,0.89131 0.72644,1.61307 1.61462,1.61307z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1518.25564,143.49829c0.89148,0 1.61316,-0.72176 1.61316,-1.61307c0,-0.89131 -0.72168,-1.61307 -1.61316,-1.61307c-0.88959,0 -1.61298,0.72176 -1.61298,1.61307c0,0.89131 0.72339,1.61307 1.61298,1.61307z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1518.25564,143.49829c0.89148,0 1.61316,-0.72176 1.61316,-1.61307c0,-0.89131 -0.72168,-1.61307 -1.61316,-1.61307c-0.88959,0 -1.61298,0.72176 -1.61298,1.61307c0,0.89131 0.72339,1.61307 1.61298,1.61307z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1381.17239,143.49829c0.88971,0 1.61298,-0.72176 1.61298,-1.61307c0,-0.89131 -0.72327,-1.61307 -1.61298,-1.61307c-0.89124,0 -1.61316,0.72176 -1.61316,1.61307c0,0.89131 0.72192,1.61307 1.61316,1.61307z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1381.17239,143.49829c0.88971,0 1.61298,-0.72176 1.61298,-1.61307c0,-0.89131 -0.72327,-1.61307 -1.61298,-1.61307c-0.89124,0 -1.61316,0.72176 -1.61316,1.61307c0,0.89131 0.72192,1.61307 1.61316,1.61307z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1245.69876,143.49829c0.8913,0 1.6131,-0.72176 1.6131,-1.61307c0,-0.89131 -0.7218,-1.61307 -1.6131,-1.61307c-0.88977,0 -1.61151,0.72176 -1.61151,1.61307c0,0.89131 0.72174,1.61307 1.61151,1.61307z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1245.69876,143.49829c0.8913,0 1.6131,-0.72176 1.6131,-1.61307c0,-0.89131 -0.7218,-1.61307 -1.6131,-1.61307c-0.88977,0 -1.61151,0.72176 -1.61151,1.61307c0,0.89131 0.72174,1.61307 1.61151,1.61307z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1110.22665,143.49829c0.89136,0 1.6131,-0.72176 1.6131,-1.61307c0,-0.89131 -0.72174,-1.61307 -1.6131,-1.61307c-0.88959,0 -1.61145,0.72176 -1.61145,1.61307c0,0.89131 0.72186,1.61307 1.61145,1.61307z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1110.22665,143.49829c0.89136,0 1.6131,-0.72176 1.6131,-1.61307c0,-0.89131 -0.72174,-1.61307 -1.6131,-1.61307c-0.88959,0 -1.61145,0.72176 -1.61145,1.61307c0,0.89131 0.72186,1.61307 1.61145,1.61307z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M973.14315,143.49829c0.88965,0 1.61151,-0.72176 1.61151,-1.61307c0,-0.89131 -0.72186,-1.61307 -1.61151,-1.61307c-0.89124,0 -1.61298,0.72176 -1.61298,1.61307c0,0.89131 0.72174,1.61307 1.61298,1.61307z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M973.14315,143.49829c0.88965,0 1.61151,-0.72176 1.61151,-1.61307c0,-0.89131 -0.72186,-1.61307 -1.61151,-1.61307c-0.89124,0 -1.61298,0.72176 -1.61298,1.61307c0,0.89131 0.72174,1.61307 1.61298,1.61307z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M837.67126,143.49829c0.88959,0 1.61139,-0.72176 1.61139,-1.61307c0,-0.89131 -0.7218,-1.61307 -1.61139,-1.61307c-0.89136,0 -1.6131,0.72176 -1.6131,1.61307c0,0.89131 0.72174,1.61307 1.6131,1.61307z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M837.67126,143.49829c0.88959,0 1.61139,-0.72176 1.61139,-1.61307c0,-0.89131 -0.7218,-1.61307 -1.61139,-1.61307c-0.89136,0 -1.6131,0.72176 -1.6131,1.61307c0,0.89131 0.72174,1.61307 1.6131,1.61307z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M700.58615,143.49829c0.8913,0 1.6131,-0.72176 1.6131,-1.61307c0,-0.89131 -0.7218,-1.61307 -1.6131,-1.61307c-0.88968,0 -1.61307,0.72176 -1.61307,1.61307c0,0.89131 0.72339,1.61307 1.61307,1.61307z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M700.58615,143.49829c0.8913,0 1.6131,-0.72176 1.6131,-1.61307c0,-0.89131 -0.7218,-1.61307 -1.6131,-1.61307c-0.88968,0 -1.61307,0.72176 -1.61307,1.61307c0,0.89131 0.72339,1.61307 1.61307,1.61307z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M565.11416,143.49829c0.88974,0 1.6131,-0.72176 1.6131,-1.61307c0,-0.89131 -0.72336,-1.61307 -1.6131,-1.61307c-0.8913,0 -1.61307,0.72176 -1.61307,1.61307c0,0.89131 0.72177,1.61307 1.61307,1.61307z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M565.11416,143.49829c0.88974,0 1.6131,-0.72176 1.6131,-1.61307c0,-0.89131 -0.72336,-1.61307 -1.6131,-1.61307c-0.8913,0 -1.61307,0.72176 -1.61307,1.61307c0,0.89131 0.72177,1.61307 1.61307,1.61307z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M429.64212,143.49829c0.89133,0 1.61311,-0.72176 1.61311,-1.61307c0,-0.89131 -0.72179,-1.61307 -1.61311,-1.61307c-0.8913,0 -1.61304,0.72176 -1.61304,1.61307c0,0.89131 0.72174,1.61307 1.61304,1.61307z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M429.64212,143.49829c0.89133,0 1.61311,-0.72176 1.61311,-1.61307c0,-0.89131 -0.72179,-1.61307 -1.61311,-1.61307c-0.8913,0 -1.61304,0.72176 -1.61304,1.61307c0,0.89131 0.72174,1.61307 1.61304,1.61307z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M292.55707,143.49829c0.8913,0 1.61307,-0.72176 1.61307,-1.61307c0,-0.89131 -0.72177,-1.61307 -1.61307,-1.61307c-0.8913,0 -1.61307,0.72176 -1.61307,1.61307c0,0.89131 0.72177,1.61307 1.61307,1.61307z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M292.55707,143.49829c0.8913,0 1.61307,-0.72176 1.61307,-1.61307c0,-0.89131 -0.72177,-1.61307 -1.61307,-1.61307c-0.8913,0 -1.61307,0.72176 -1.61307,1.61307c0,0.89131 0.72177,1.61307 1.61307,1.61307z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M157.08508,143.49829c0.8913,0 1.61307,-0.72176 1.61307,-1.61307c0,-0.89131 -0.72176,-1.61307 -1.61307,-1.61307c-0.89132,0 -1.61308,0.72176 -1.61308,1.61307c0,0.89131 0.72176,1.61307 1.61308,1.61307z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M157.08508,143.49829c0.8913,0 1.61307,-0.72176 1.61307,-1.61307c0,-0.89131 -0.72176,-1.61307 -1.61307,-1.61307c-0.89132,0 -1.61308,0.72176 -1.61308,1.61307c0,0.89131 0.72176,1.61307 1.61308,1.61307z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M84.51148,262.90582c0.8897,0 1.61307,-0.72337 1.61307,-1.61308c0,-0.89131 -0.72337,-1.61469 -1.61307,-1.61469c-0.8913,0 -1.61307,0.72337 -1.61307,1.61469c0,0.88971 0.72177,1.61308 1.61307,1.61308z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M84.51148,262.90582c0.8897,0 1.61307,-0.72337 1.61307,-1.61308c0,-0.89131 -0.72337,-1.61469 -1.61307,-1.61469c-0.8913,0 -1.61307,0.72337 -1.61307,1.61469c0,0.88971 0.72177,1.61308 1.61307,1.61308z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1989.18002,262.90582c0.88818,0 1.61462,-0.72337 1.61462,-1.61308c0,-0.89131 -0.72644,-1.61469 -1.61462,-1.61469c-0.88794,0 -1.61462,0.72337 -1.61462,1.61469c0,0.88971 0.72668,1.61308 1.61462,1.61308z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1989.18002,262.90582c0.88818,0 1.61462,-0.72337 1.61462,-1.61308c0,-0.89131 -0.72644,-1.61469 -1.61462,-1.61469c-0.88794,0 -1.61462,0.72337 -1.61462,1.61469c0,0.88971 0.72668,1.61308 1.61462,1.61308z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1852.09329,262.90582c0.88794,0 1.61475,-0.72337 1.61475,-1.61308c0,-0.89131 -0.72681,-1.61469 -1.61475,-1.61469c-0.88782,0 -1.61462,0.72337 -1.61462,1.61469c0,0.88971 0.72681,1.61308 1.61462,1.61308z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1852.09329,262.90582c0.88794,0 1.61475,-0.72337 1.61475,-1.61308c0,-0.89131 -0.72681,-1.61469 -1.61475,-1.61469c-0.88782,0 -1.61462,0.72337 -1.61462,1.61469c0,0.88971 0.72681,1.61308 1.61462,1.61308z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1716.62149,262.90582c0.88806,0 1.61475,-0.72337 1.61475,-1.61308c0,-0.89131 -0.72668,-1.61469 -1.61475,-1.61469c-0.88806,0 -1.61487,0.72337 -1.61487,1.61469c0,0.88971 0.72681,1.61308 1.61487,1.61308z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1716.62149,262.90582c0.88806,0 1.61475,-0.72337 1.61475,-1.61308c0,-0.89131 -0.72668,-1.61469 -1.61475,-1.61469c-0.88806,0 -1.61487,0.72337 -1.61487,1.61469c0,0.88971 0.72681,1.61308 1.61487,1.61308z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1581.15414,262.90582c0.88989,0 1.61322,-0.72337 1.61322,-1.61308c0,-0.89131 -0.72333,-1.61469 -1.61322,-1.61469c-0.89124,0 -1.61298,0.72337 -1.61298,1.61469c0,0.88971 0.72174,1.61308 1.61298,1.61308z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1581.15414,262.90582c0.88989,0 1.61322,-0.72337 1.61322,-1.61308c0,-0.89131 -0.72333,-1.61469 -1.61322,-1.61469c-0.89124,0 -1.61298,0.72337 -1.61298,1.61469c0,0.88971 0.72174,1.61308 1.61298,1.61308z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1444.06918,262.90582c0.8913,0 1.61298,-0.72337 1.61298,-1.61308c0,-0.89131 -0.72168,-1.61469 -1.61298,-1.61469c-0.8913,0 -1.61316,0.72337 -1.61316,1.61469c0,0.88971 0.72186,1.61308 1.61316,1.61308z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1444.06918,262.90582c0.8913,0 1.61298,-0.72337 1.61298,-1.61308c0,-0.89131 -0.72168,-1.61469 -1.61298,-1.61469c-0.8913,0 -1.61316,0.72337 -1.61316,1.61469c0,0.88971 0.72186,1.61308 1.61316,1.61308z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1308.59698,262.90582c0.89136,0 1.61316,-0.72337 1.61316,-1.61308c0,-0.89131 -0.7218,-1.61469 -1.61316,-1.61469c-0.88959,0 -1.61133,0.72337 -1.61133,1.61469c0,0.88971 0.72174,1.61308 1.61133,1.61308z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1308.59698,262.90582c0.89136,0 1.61316,-0.72337 1.61316,-1.61308c0,-0.89131 -0.7218,-1.61469 -1.61316,-1.61469c-0.88959,0 -1.61133,0.72337 -1.61133,1.61469c0,0.88971 0.72174,1.61308 1.61133,1.61308z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1173.12518,262.90582c0.8913,0 1.61298,-0.72337 1.61298,-1.61308c0,-0.89131 -0.72168,-1.61469 -1.61298,-1.61469c-0.8913,0 -1.61316,0.72337 -1.61316,1.61469c0,0.88971 0.72186,1.61308 1.61316,1.61308z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1173.12518,262.90582c0.8913,0 1.61298,-0.72337 1.61298,-1.61308c0,-0.89131 -0.72168,-1.61469 -1.61298,-1.61469c-0.8913,0 -1.61316,0.72337 -1.61316,1.61469c0,0.88971 0.72186,1.61308 1.61316,1.61308z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1036.03997,262.90582c0.8913,0 1.61298,-0.72337 1.61298,-1.61308c0,-0.89131 -0.72168,-1.61469 -1.61298,-1.61469c-0.88965,0 -1.61304,0.72337 -1.61304,1.61469c0,0.88971 0.72339,1.61308 1.61304,1.61308z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1036.03997,262.90582c0.8913,0 1.61298,-0.72337 1.61298,-1.61308c0,-0.89131 -0.72168,-1.61469 -1.61298,-1.61469c-0.88965,0 -1.61304,0.72337 -1.61304,1.61469c0,0.88971 0.72339,1.61308 1.61304,1.61308z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M900.56802,262.90582c0.89136,0 1.6131,-0.72337 1.6131,-1.61308c0,-0.89131 -0.72174,-1.61469 -1.6131,-1.61469c-0.88977,0 -1.6131,0.72337 -1.6131,1.61469c0,0.88971 0.72333,1.61308 1.6131,1.61308z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M900.56802,262.90582c0.89136,0 1.6131,-0.72337 1.6131,-1.61308c0,-0.89131 -0.72174,-1.61469 -1.6131,-1.61469c-0.88977,0 -1.6131,0.72337 -1.6131,1.61469c0,0.88971 0.72333,1.61308 1.6131,1.61308z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M765.09604,262.90582c0.89127,0 1.61304,-0.72337 1.61304,-1.61308c0,-0.89131 -0.72177,-1.61469 -1.61304,-1.61469c-0.88974,0 -1.61151,0.72337 -1.61151,1.61469c0,0.88971 0.72177,1.61308 1.61151,1.61308z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M765.09604,262.90582c0.89127,0 1.61304,-0.72337 1.61304,-1.61308c0,-0.89131 -0.72177,-1.61469 -1.61304,-1.61469c-0.88974,0 -1.61151,0.72337 -1.61151,1.61469c0,0.88971 0.72177,1.61308 1.61151,1.61308z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M628.01092,262.90582c0.89127,0 1.61304,-0.72337 1.61304,-1.61308c0,-0.89131 -0.72177,-1.61469 -1.61304,-1.61469c-0.88971,0 -1.61142,0.72337 -1.61142,1.61469c0,0.88971 0.72171,1.61308 1.61142,1.61308z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M628.01092,262.90582c0.89127,0 1.61304,-0.72337 1.61304,-1.61308c0,-0.89131 -0.72177,-1.61469 -1.61304,-1.61469c-0.88971,0 -1.61142,0.72337 -1.61142,1.61469c0,0.88971 0.72171,1.61308 1.61142,1.61308z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M492.53894,262.90582c0.8913,0 1.61307,-0.72337 1.61307,-1.61308c0,-0.89131 -0.72177,-1.61469 -1.61307,-1.61469c-0.88971,0 -1.61142,0.72337 -1.61142,1.61469c0,0.88971 0.72171,1.61308 1.61142,1.61308z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M492.53894,262.90582c0.8913,0 1.61307,-0.72337 1.61307,-1.61308c0,-0.89131 -0.72177,-1.61469 -1.61307,-1.61469c-0.88971,0 -1.61142,0.72337 -1.61142,1.61469c0,0.88971 0.72171,1.61308 1.61142,1.61308z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M355.4555,262.90582c0.88966,0 1.61145,-0.72337 1.61145,-1.61308c0,-0.89131 -0.72179,-1.61469 -1.61145,-1.61469c-0.89133,0 -1.6131,0.72337 -1.6131,1.61469c0,0.88971 0.72177,1.61308 1.6131,1.61308z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M355.4555,262.90582c0.88966,0 1.61145,-0.72337 1.61145,-1.61308c0,-0.89131 -0.72179,-1.61469 -1.61145,-1.61469c-0.89133,0 -1.6131,0.72337 -1.6131,1.61469c0,0.88971 0.72177,1.61308 1.6131,1.61308z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M219.98349,262.90582c0.88969,0 1.61147,-0.72337 1.61147,-1.61308c0,-0.89131 -0.72179,-1.61469 -1.61147,-1.61469c-0.89131,0 -1.61307,0.72337 -1.61307,1.61469c0,0.88971 0.72176,1.61308 1.61307,1.61308z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M219.98349,262.90582c0.88969,0 1.61147,-0.72337 1.61147,-1.61308c0,-0.89131 -0.72179,-1.61469 -1.61147,-1.61469c-0.89131,0 -1.61307,0.72337 -1.61307,1.61469c0,0.88971 0.72176,1.61308 1.61307,1.61308z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M21.61307,375.85785c0.89131,0 1.61307,-0.72182 1.61307,-1.61311c0,-0.8913 -0.72176,-1.61467 -1.61307,-1.61467c-0.88969,0 -1.61307,0.72337 -1.61307,1.61467c0,0.8913 0.72338,1.61311 1.61307,1.61311z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M21.61307,375.85785c0.89131,0 1.61307,-0.72182 1.61307,-1.61311c0,-0.8913 -0.72176,-1.61467 -1.61307,-1.61467c-0.88969,0 -1.61307,0.72337 -1.61307,1.61467c0,0.8913 0.72338,1.61311 1.61307,1.61311z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1926.28842,375.85785c0.88782,0 1.61462,-0.72182 1.61462,-1.61311c0,-0.8913 -0.72681,-1.61467 -1.61462,-1.61467c-0.88818,0 -1.61487,0.72337 -1.61487,1.61467c0,0.8913 0.72668,1.61311 1.61487,1.61311z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1926.28842,375.85785c0.88782,0 1.61462,-0.72182 1.61462,-1.61311c0,-0.8913 -0.72681,-1.61467 -1.61462,-1.61467c-0.88818,0 -1.61487,0.72337 -1.61487,1.61467c0,0.8913 0.72668,1.61311 1.61487,1.61311z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1789.20144,375.85785c0.88794,0 1.61462,-0.72182 1.61462,-1.61311c0,-0.8913 -0.72668,-1.61467 -1.61462,-1.61467c-0.88818,0 -1.61462,0.72337 -1.61462,1.61467c0,0.8913 0.72644,1.61311 1.61462,1.61311z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1789.20144,375.85785c0.88794,0 1.61462,-0.72182 1.61462,-1.61311c0,-0.8913 -0.72668,-1.61467 -1.61462,-1.61467c-0.88818,0 -1.61462,0.72337 -1.61462,1.61467c0,0.8913 0.72644,1.61311 1.61462,1.61311z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1653.7294,375.85785c0.88806,0 1.61475,-0.72182 1.61475,-1.61311c0,-0.8913 -0.72668,-1.61467 -1.61475,-1.61467c-0.88818,0 -1.61462,0.72337 -1.61462,1.61467c0,0.8913 0.72644,1.61311 1.61462,1.61311z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1653.7294,375.85785c0.88806,0 1.61475,-0.72182 1.61475,-1.61311c0,-0.8913 -0.72668,-1.61467 -1.61475,-1.61467c-0.88818,0 -1.61462,0.72337 -1.61462,1.61467c0,0.8913 0.72644,1.61311 1.61462,1.61311z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1518.25564,375.85785c0.89148,0 1.61316,-0.72182 1.61316,-1.61311c0,-0.8913 -0.72168,-1.61467 -1.61316,-1.61467c-0.88959,0 -1.61298,0.72337 -1.61298,1.61467c0,0.8913 0.72339,1.61311 1.61298,1.61311z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1518.25564,375.85785c0.89148,0 1.61316,-0.72182 1.61316,-1.61311c0,-0.8913 -0.72168,-1.61467 -1.61316,-1.61467c-0.88959,0 -1.61298,0.72337 -1.61298,1.61467c0,0.8913 0.72339,1.61311 1.61298,1.61311z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1381.17239,375.85785c0.88971,0 1.61298,-0.72182 1.61298,-1.61311c0,-0.8913 -0.72327,-1.61467 -1.61298,-1.61467c-0.89124,0 -1.61316,0.72337 -1.61316,1.61467c0,0.8913 0.72192,1.61311 1.61316,1.61311z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1381.17239,375.85785c0.88971,0 1.61298,-0.72182 1.61298,-1.61311c0,-0.8913 -0.72327,-1.61467 -1.61298,-1.61467c-0.89124,0 -1.61316,0.72337 -1.61316,1.61467c0,0.8913 0.72192,1.61311 1.61316,1.61311z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1245.69876,375.85785c0.8913,0 1.6131,-0.72182 1.6131,-1.61311c0,-0.8913 -0.7218,-1.61467 -1.6131,-1.61467c-0.88977,0 -1.61151,0.72337 -1.61151,1.61467c0,0.8913 0.72174,1.61311 1.61151,1.61311z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1245.69876,375.85785c0.8913,0 1.6131,-0.72182 1.6131,-1.61311c0,-0.8913 -0.7218,-1.61467 -1.6131,-1.61467c-0.88977,0 -1.61151,0.72337 -1.61151,1.61467c0,0.8913 0.72174,1.61311 1.61151,1.61311z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1110.22665,375.85785c0.89136,0 1.6131,-0.72182 1.6131,-1.61311c0,-0.8913 -0.72174,-1.61467 -1.6131,-1.61467c-0.88959,0 -1.61145,0.72337 -1.61145,1.61467c0,0.8913 0.72186,1.61311 1.61145,1.61311z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1110.22665,375.85785c0.89136,0 1.6131,-0.72182 1.6131,-1.61311c0,-0.8913 -0.72174,-1.61467 -1.6131,-1.61467c-0.88959,0 -1.61145,0.72337 -1.61145,1.61467c0,0.8913 0.72186,1.61311 1.61145,1.61311z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M973.14315,375.85785c0.88965,0 1.61151,-0.72182 1.61151,-1.61311c0,-0.8913 -0.72186,-1.61467 -1.61151,-1.61467c-0.89124,0 -1.61298,0.72337 -1.61298,1.61467c0,0.8913 0.72174,1.61311 1.61298,1.61311z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M973.14315,375.85785c0.88965,0 1.61151,-0.72182 1.61151,-1.61311c0,-0.8913 -0.72186,-1.61467 -1.61151,-1.61467c-0.89124,0 -1.61298,0.72337 -1.61298,1.61467c0,0.8913 0.72174,1.61311 1.61298,1.61311z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M837.67126,375.85785c0.88959,0 1.61139,-0.72182 1.61139,-1.61311c0,-0.8913 -0.7218,-1.61467 -1.61139,-1.61467c-0.89136,0 -1.6131,0.72337 -1.6131,1.61467c0,0.8913 0.72174,1.61311 1.6131,1.61311z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M837.67126,375.85785c0.88959,0 1.61139,-0.72182 1.61139,-1.61311c0,-0.8913 -0.7218,-1.61467 -1.61139,-1.61467c-0.89136,0 -1.6131,0.72337 -1.6131,1.61467c0,0.8913 0.72174,1.61311 1.6131,1.61311z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M700.58615,375.85785c0.8913,0 1.6131,-0.72182 1.6131,-1.61311c0,-0.8913 -0.7218,-1.61467 -1.6131,-1.61467c-0.88968,0 -1.61307,0.72337 -1.61307,1.61467c0,0.8913 0.72339,1.61311 1.61307,1.61311z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M700.58615,375.85785c0.8913,0 1.6131,-0.72182 1.6131,-1.61311c0,-0.8913 -0.7218,-1.61467 -1.6131,-1.61467c-0.88968,0 -1.61307,0.72337 -1.61307,1.61467c0,0.8913 0.72339,1.61311 1.61307,1.61311z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M565.11416,375.85785c0.88974,0 1.6131,-0.72182 1.6131,-1.61311c0,-0.8913 -0.72336,-1.61467 -1.6131,-1.61467c-0.8913,0 -1.61307,0.72337 -1.61307,1.61467c0,0.8913 0.72177,1.61311 1.61307,1.61311z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M565.11416,375.85785c0.88974,0 1.6131,-0.72182 1.6131,-1.61311c0,-0.8913 -0.72336,-1.61467 -1.6131,-1.61467c-0.8913,0 -1.61307,0.72337 -1.61307,1.61467c0,0.8913 0.72177,1.61311 1.61307,1.61311z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M429.64212,375.85785c0.89133,0 1.61311,-0.72182 1.61311,-1.61311c0,-0.8913 -0.72179,-1.61467 -1.61311,-1.61467c-0.8913,0 -1.61304,0.72337 -1.61304,1.61467c0,0.8913 0.72174,1.61311 1.61304,1.61311z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M429.64212,375.85785c0.89133,0 1.61311,-0.72182 1.61311,-1.61311c0,-0.8913 -0.72179,-1.61467 -1.61311,-1.61467c-0.8913,0 -1.61304,0.72337 -1.61304,1.61467c0,0.8913 0.72174,1.61311 1.61304,1.61311z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M292.55707,375.85785c0.8913,0 1.61307,-0.72182 1.61307,-1.61311c0,-0.8913 -0.72177,-1.61467 -1.61307,-1.61467c-0.8913,0 -1.61307,0.72337 -1.61307,1.61467c0,0.8913 0.72177,1.61311 1.61307,1.61311z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M292.55707,375.85785c0.8913,0 1.61307,-0.72182 1.61307,-1.61311c0,-0.8913 -0.72177,-1.61467 -1.61307,-1.61467c-0.8913,0 -1.61307,0.72337 -1.61307,1.61467c0,0.8913 0.72177,1.61311 1.61307,1.61311z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M157.08508,375.85785c0.8913,0 1.61307,-0.72182 1.61307,-1.61311c0,-0.8913 -0.72176,-1.61467 -1.61307,-1.61467c-0.89132,0 -1.61308,0.72337 -1.61308,1.61467c0,0.8913 0.72176,1.61311 1.61308,1.61311z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M157.08508,375.85785c0.8913,0 1.61307,-0.72182 1.61307,-1.61311c0,-0.8913 -0.72176,-1.61467 -1.61307,-1.61467c-0.89132,0 -1.61308,0.72337 -1.61308,1.61467c0,0.8913 0.72176,1.61311 1.61308,1.61311z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M84.51148,496.87839c0.8897,0 1.61307,-0.72177 1.61307,-1.61304c0,-0.89133 -0.72337,-1.61472 -1.61307,-1.61472c-0.8913,0 -1.61307,0.72339 -1.61307,1.61472c0,0.89127 0.72177,1.61304 1.61307,1.61304z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M84.51148,496.87839c0.8897,0 1.61307,-0.72177 1.61307,-1.61304c0,-0.89133 -0.72337,-1.61472 -1.61307,-1.61472c-0.8913,0 -1.61307,0.72339 -1.61307,1.61472c0,0.89127 0.72177,1.61304 1.61307,1.61304z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1989.18002,496.87839c0.88818,0 1.61462,-0.72177 1.61462,-1.61304c0,-0.89133 -0.72644,-1.61472 -1.61462,-1.61472c-0.88794,0 -1.61462,0.72339 -1.61462,1.61472c0,0.89127 0.72668,1.61304 1.61462,1.61304z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1989.18002,496.87839c0.88818,0 1.61462,-0.72177 1.61462,-1.61304c0,-0.89133 -0.72644,-1.61472 -1.61462,-1.61472c-0.88794,0 -1.61462,0.72339 -1.61462,1.61472c0,0.89127 0.72668,1.61304 1.61462,1.61304z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1852.09329,496.87839c0.88794,0 1.61475,-0.72177 1.61475,-1.61304c0,-0.89133 -0.72681,-1.61472 -1.61475,-1.61472c-0.88782,0 -1.61462,0.72339 -1.61462,1.61472c0,0.89127 0.72681,1.61304 1.61462,1.61304z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1852.09329,496.87839c0.88794,0 1.61475,-0.72177 1.61475,-1.61304c0,-0.89133 -0.72681,-1.61472 -1.61475,-1.61472c-0.88782,0 -1.61462,0.72339 -1.61462,1.61472c0,0.89127 0.72681,1.61304 1.61462,1.61304z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1716.62149,496.87839c0.88806,0 1.61475,-0.72177 1.61475,-1.61304c0,-0.89133 -0.72668,-1.61472 -1.61475,-1.61472c-0.88806,0 -1.61487,0.72339 -1.61487,1.61472c0,0.89127 0.72681,1.61304 1.61487,1.61304z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1716.62149,496.87839c0.88806,0 1.61475,-0.72177 1.61475,-1.61304c0,-0.89133 -0.72668,-1.61472 -1.61475,-1.61472c-0.88806,0 -1.61487,0.72339 -1.61487,1.61472c0,0.89127 0.72681,1.61304 1.61487,1.61304z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1581.15414,496.87839c0.88989,0 1.61322,-0.72177 1.61322,-1.61304c0,-0.89133 -0.72333,-1.61472 -1.61322,-1.61472c-0.89124,0 -1.61298,0.72339 -1.61298,1.61472c0,0.89127 0.72174,1.61304 1.61298,1.61304z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1581.15414,496.87839c0.88989,0 1.61322,-0.72177 1.61322,-1.61304c0,-0.89133 -0.72333,-1.61472 -1.61322,-1.61472c-0.89124,0 -1.61298,0.72339 -1.61298,1.61472c0,0.89127 0.72174,1.61304 1.61298,1.61304z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1444.06918,496.87839c0.8913,0 1.61298,-0.72177 1.61298,-1.61304c0,-0.89133 -0.72168,-1.61472 -1.61298,-1.61472c-0.8913,0 -1.61316,0.72339 -1.61316,1.61472c0,0.89127 0.72186,1.61304 1.61316,1.61304z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1444.06918,496.87839c0.8913,0 1.61298,-0.72177 1.61298,-1.61304c0,-0.89133 -0.72168,-1.61472 -1.61298,-1.61472c-0.8913,0 -1.61316,0.72339 -1.61316,1.61472c0,0.89127 0.72186,1.61304 1.61316,1.61304z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1308.59698,496.87839c0.89136,0 1.61316,-0.72177 1.61316,-1.61304c0,-0.89133 -0.7218,-1.61472 -1.61316,-1.61472c-0.88959,0 -1.61133,0.72339 -1.61133,1.61472c0,0.89127 0.72174,1.61304 1.61133,1.61304z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1308.59698,496.87839c0.89136,0 1.61316,-0.72177 1.61316,-1.61304c0,-0.89133 -0.7218,-1.61472 -1.61316,-1.61472c-0.88959,0 -1.61133,0.72339 -1.61133,1.61472c0,0.89127 0.72174,1.61304 1.61133,1.61304z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1173.12518,496.87839c0.8913,0 1.61298,-0.72177 1.61298,-1.61304c0,-0.89133 -0.72168,-1.61472 -1.61298,-1.61472c-0.8913,0 -1.61316,0.72339 -1.61316,1.61472c0,0.89127 0.72186,1.61304 1.61316,1.61304z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1173.12518,496.87839c0.8913,0 1.61298,-0.72177 1.61298,-1.61304c0,-0.89133 -0.72168,-1.61472 -1.61298,-1.61472c-0.8913,0 -1.61316,0.72339 -1.61316,1.61472c0,0.89127 0.72186,1.61304 1.61316,1.61304z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1036.03997,496.87839c0.8913,0 1.61298,-0.72177 1.61298,-1.61304c0,-0.89133 -0.72168,-1.61472 -1.61298,-1.61472c-0.88965,0 -1.61304,0.72339 -1.61304,1.61472c0,0.89127 0.72339,1.61304 1.61304,1.61304z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1036.03997,496.87839c0.8913,0 1.61298,-0.72177 1.61298,-1.61304c0,-0.89133 -0.72168,-1.61472 -1.61298,-1.61472c-0.88965,0 -1.61304,0.72339 -1.61304,1.61472c0,0.89127 0.72339,1.61304 1.61304,1.61304z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M900.56802,496.87839c0.89136,0 1.6131,-0.72177 1.6131,-1.61304c0,-0.89133 -0.72174,-1.61472 -1.6131,-1.61472c-0.88977,0 -1.6131,0.72339 -1.6131,1.61472c0,0.89127 0.72333,1.61304 1.6131,1.61304z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M900.56802,496.87839c0.89136,0 1.6131,-0.72177 1.6131,-1.61304c0,-0.89133 -0.72174,-1.61472 -1.6131,-1.61472c-0.88977,0 -1.6131,0.72339 -1.6131,1.61472c0,0.89127 0.72333,1.61304 1.6131,1.61304z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M765.09604,496.87839c0.89127,0 1.61304,-0.72177 1.61304,-1.61304c0,-0.89133 -0.72177,-1.61472 -1.61304,-1.61472c-0.88974,0 -1.61151,0.72339 -1.61151,1.61472c0,0.89127 0.72177,1.61304 1.61151,1.61304z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M765.09604,496.87839c0.89127,0 1.61304,-0.72177 1.61304,-1.61304c0,-0.89133 -0.72177,-1.61472 -1.61304,-1.61472c-0.88974,0 -1.61151,0.72339 -1.61151,1.61472c0,0.89127 0.72177,1.61304 1.61151,1.61304z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M628.01092,496.87839c0.89127,0 1.61304,-0.72177 1.61304,-1.61304c0,-0.89133 -0.72177,-1.61472 -1.61304,-1.61472c-0.88971,0 -1.61142,0.72339 -1.61142,1.61472c0,0.89127 0.72171,1.61304 1.61142,1.61304z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M628.01092,496.87839c0.89127,0 1.61304,-0.72177 1.61304,-1.61304c0,-0.89133 -0.72177,-1.61472 -1.61304,-1.61472c-0.88971,0 -1.61142,0.72339 -1.61142,1.61472c0,0.89127 0.72171,1.61304 1.61142,1.61304z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M492.53894,496.87839c0.8913,0 1.61307,-0.72177 1.61307,-1.61304c0,-0.89133 -0.72177,-1.61472 -1.61307,-1.61472c-0.88971,0 -1.61142,0.72339 -1.61142,1.61472c0,0.89127 0.72171,1.61304 1.61142,1.61304z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M492.53894,496.87839c0.8913,0 1.61307,-0.72177 1.61307,-1.61304c0,-0.89133 -0.72177,-1.61472 -1.61307,-1.61472c-0.88971,0 -1.61142,0.72339 -1.61142,1.61472c0,0.89127 0.72171,1.61304 1.61142,1.61304z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M355.4555,496.87839c0.88966,0 1.61145,-0.72177 1.61145,-1.61304c0,-0.89133 -0.72179,-1.61472 -1.61145,-1.61472c-0.89133,0 -1.6131,0.72339 -1.6131,1.61472c0,0.89127 0.72177,1.61304 1.6131,1.61304z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M355.4555,496.87839c0.88966,0 1.61145,-0.72177 1.61145,-1.61304c0,-0.89133 -0.72179,-1.61472 -1.61145,-1.61472c-0.89133,0 -1.6131,0.72339 -1.6131,1.61472c0,0.89127 0.72177,1.61304 1.6131,1.61304z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M219.98349,496.87839c0.88969,0 1.61147,-0.72177 1.61147,-1.61304c0,-0.89133 -0.72179,-1.61472 -1.61147,-1.61472c-0.89131,0 -1.61307,0.72339 -1.61307,1.61472c0,0.89127 0.72176,1.61304 1.61307,1.61304z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M219.98349,496.87839c0.88969,0 1.61147,-0.72177 1.61147,-1.61304c0,-0.89133 -0.72179,-1.61472 -1.61147,-1.61472c-0.89131,0 -1.61307,0.72339 -1.61307,1.61472c0,0.89127 0.72176,1.61304 1.61307,1.61304z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M21.61307,609.83035c0.89131,0 1.61307,-0.72174 1.61307,-1.61307c0,-0.8913 -0.72176,-1.61465 -1.61307,-1.61465c-0.88969,0 -1.61307,0.72336 -1.61307,1.61465c0,0.89133 0.72338,1.61307 1.61307,1.61307z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M21.61307,609.83035c0.89131,0 1.61307,-0.72174 1.61307,-1.61307c0,-0.8913 -0.72176,-1.61465 -1.61307,-1.61465c-0.88969,0 -1.61307,0.72336 -1.61307,1.61465c0,0.89133 0.72338,1.61307 1.61307,1.61307z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1926.28842,609.83035c0.88782,0 1.61462,-0.72174 1.61462,-1.61307c0,-0.8913 -0.72681,-1.61465 -1.61462,-1.61465c-0.88818,0 -1.61487,0.72336 -1.61487,1.61465c0,0.89133 0.72668,1.61307 1.61487,1.61307z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1926.28842,609.83035c0.88782,0 1.61462,-0.72174 1.61462,-1.61307c0,-0.8913 -0.72681,-1.61465 -1.61462,-1.61465c-0.88818,0 -1.61487,0.72336 -1.61487,1.61465c0,0.89133 0.72668,1.61307 1.61487,1.61307z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1789.20144,609.83035c0.88794,0 1.61462,-0.72174 1.61462,-1.61307c0,-0.8913 -0.72668,-1.61465 -1.61462,-1.61465c-0.88818,0 -1.61462,0.72336 -1.61462,1.61465c0,0.89133 0.72644,1.61307 1.61462,1.61307z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1789.20144,609.83035c0.88794,0 1.61462,-0.72174 1.61462,-1.61307c0,-0.8913 -0.72668,-1.61465 -1.61462,-1.61465c-0.88818,0 -1.61462,0.72336 -1.61462,1.61465c0,0.89133 0.72644,1.61307 1.61462,1.61307z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1653.7294,609.83035c0.88806,0 1.61475,-0.72174 1.61475,-1.61307c0,-0.8913 -0.72668,-1.61465 -1.61475,-1.61465c-0.88818,0 -1.61462,0.72336 -1.61462,1.61465c0,0.89133 0.72644,1.61307 1.61462,1.61307z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1653.7294,609.83035c0.88806,0 1.61475,-0.72174 1.61475,-1.61307c0,-0.8913 -0.72668,-1.61465 -1.61475,-1.61465c-0.88818,0 -1.61462,0.72336 -1.61462,1.61465c0,0.89133 0.72644,1.61307 1.61462,1.61307z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1518.25564,609.83035c0.89148,0 1.61316,-0.72174 1.61316,-1.61307c0,-0.8913 -0.72168,-1.61465 -1.61316,-1.61465c-0.88959,0 -1.61298,0.72336 -1.61298,1.61465c0,0.89133 0.72339,1.61307 1.61298,1.61307z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1518.25564,609.83035c0.89148,0 1.61316,-0.72174 1.61316,-1.61307c0,-0.8913 -0.72168,-1.61465 -1.61316,-1.61465c-0.88959,0 -1.61298,0.72336 -1.61298,1.61465c0,0.89133 0.72339,1.61307 1.61298,1.61307z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1381.17239,609.83035c0.88971,0 1.61298,-0.72174 1.61298,-1.61307c0,-0.8913 -0.72327,-1.61465 -1.61298,-1.61465c-0.89124,0 -1.61316,0.72336 -1.61316,1.61465c0,0.89133 0.72192,1.61307 1.61316,1.61307z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1381.17239,609.83035c0.88971,0 1.61298,-0.72174 1.61298,-1.61307c0,-0.8913 -0.72327,-1.61465 -1.61298,-1.61465c-0.89124,0 -1.61316,0.72336 -1.61316,1.61465c0,0.89133 0.72192,1.61307 1.61316,1.61307z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1245.69876,609.83035c0.8913,0 1.6131,-0.72174 1.6131,-1.61307c0,-0.8913 -0.7218,-1.61465 -1.6131,-1.61465c-0.88977,0 -1.61151,0.72336 -1.61151,1.61465c0,0.89133 0.72174,1.61307 1.61151,1.61307z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1245.69876,609.83035c0.8913,0 1.6131,-0.72174 1.6131,-1.61307c0,-0.8913 -0.7218,-1.61465 -1.6131,-1.61465c-0.88977,0 -1.61151,0.72336 -1.61151,1.61465c0,0.89133 0.72174,1.61307 1.61151,1.61307z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M1110.22665,609.83035c0.89136,0 1.6131,-0.72174 1.6131,-1.61307c0,-0.8913 -0.72174,-1.61465 -1.6131,-1.61465c-0.88959,0 -1.61145,0.72336 -1.61145,1.61465c0,0.89133 0.72186,1.61307 1.61145,1.61307z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M1110.22665,609.83035c0.89136,0 1.6131,-0.72174 1.6131,-1.61307c0,-0.8913 -0.72174,-1.61465 -1.6131,-1.61465c-0.88959,0 -1.61145,0.72336 -1.61145,1.61465c0,0.89133 0.72186,1.61307 1.61145,1.61307z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M973.14315,609.83035c0.88965,0 1.61151,-0.72174 1.61151,-1.61307c0,-0.8913 -0.72186,-1.61465 -1.61151,-1.61465c-0.89124,0 -1.61298,0.72336 -1.61298,1.61465c0,0.89133 0.72174,1.61307 1.61298,1.61307z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M973.14315,609.83035c0.88965,0 1.61151,-0.72174 1.61151,-1.61307c0,-0.8913 -0.72186,-1.61465 -1.61151,-1.61465c-0.89124,0 -1.61298,0.72336 -1.61298,1.61465c0,0.89133 0.72174,1.61307 1.61298,1.61307z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M837.67126,609.83035c0.88959,0 1.61139,-0.72174 1.61139,-1.61307c0,-0.8913 -0.7218,-1.61465 -1.61139,-1.61465c-0.89136,0 -1.6131,0.72336 -1.6131,1.61465c0,0.89133 0.72174,1.61307 1.6131,1.61307z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M837.67126,609.83035c0.88959,0 1.61139,-0.72174 1.61139,-1.61307c0,-0.8913 -0.7218,-1.61465 -1.61139,-1.61465c-0.89136,0 -1.6131,0.72336 -1.6131,1.61465c0,0.89133 0.72174,1.61307 1.6131,1.61307z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M700.58615,609.83035c0.8913,0 1.6131,-0.72174 1.6131,-1.61307c0,-0.8913 -0.7218,-1.61465 -1.6131,-1.61465c-0.88968,0 -1.61307,0.72336 -1.61307,1.61465c0,0.89133 0.72339,1.61307 1.61307,1.61307z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M700.58615,609.83035c0.8913,0 1.6131,-0.72174 1.6131,-1.61307c0,-0.8913 -0.7218,-1.61465 -1.6131,-1.61465c-0.88968,0 -1.61307,0.72336 -1.61307,1.61465c0,0.89133 0.72339,1.61307 1.61307,1.61307z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M565.11416,609.83035c0.88974,0 1.6131,-0.72174 1.6131,-1.61307c0,-0.8913 -0.72336,-1.61465 -1.6131,-1.61465c-0.8913,0 -1.61307,0.72336 -1.61307,1.61465c0,0.89133 0.72177,1.61307 1.61307,1.61307z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M565.11416,609.83035c0.88974,0 1.6131,-0.72174 1.6131,-1.61307c0,-0.8913 -0.72336,-1.61465 -1.6131,-1.61465c-0.8913,0 -1.61307,0.72336 -1.61307,1.61465c0,0.89133 0.72177,1.61307 1.61307,1.61307z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M429.64212,609.83035c0.89133,0 1.61311,-0.72174 1.61311,-1.61307c0,-0.8913 -0.72179,-1.61465 -1.61311,-1.61465c-0.8913,0 -1.61304,0.72336 -1.61304,1.61465c0,0.89133 0.72174,1.61307 1.61304,1.61307z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M429.64212,609.83035c0.89133,0 1.61311,-0.72174 1.61311,-1.61307c0,-0.8913 -0.72179,-1.61465 -1.61311,-1.61465c-0.8913,0 -1.61304,0.72336 -1.61304,1.61465c0,0.89133 0.72174,1.61307 1.61304,1.61307z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M292.55707,609.83035c0.8913,0 1.61307,-0.72174 1.61307,-1.61307c0,-0.8913 -0.72177,-1.61465 -1.61307,-1.61465c-0.8913,0 -1.61307,0.72336 -1.61307,1.61465c0,0.89133 0.72177,1.61307 1.61307,1.61307z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M292.55707,609.83035c0.8913,0 1.61307,-0.72174 1.61307,-1.61307c0,-0.8913 -0.72177,-1.61465 -1.61307,-1.61465c-0.8913,0 -1.61307,0.72336 -1.61307,1.61465c0,0.89133 0.72177,1.61307 1.61307,1.61307z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
          <path
            d="M157.08508,609.83035c0.8913,0 1.61307,-0.72174 1.61307,-1.61307c0,-0.8913 -0.72176,-1.61465 -1.61307,-1.61465c-0.89132,0 -1.61308,0.72336 -1.61308,1.61465c0,0.89133 0.72176,1.61307 1.61308,1.61307z"
            fill="#b382ec"
            fill-opacity="0.4"
          ></path>
          <path
            d="M157.08508,609.83035c0.8913,0 1.61307,-0.72174 1.61307,-1.61307c0,-0.8913 -0.72176,-1.61465 -1.61307,-1.61465c-0.89132,0 -1.61308,0.72336 -1.61308,1.61465c0,0.89133 0.72176,1.61307 1.61308,1.61307z"
            fill-opacity="0"
            fill="#ffffff"
            stroke-dashoffset="0"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-opacity="1"
            stroke="#b382ec"
            stroke-miterlimit="20"
            stroke-width="2"
          ></path>
        </svg> */}
        <svg
          id="SVGDoc"
          width="1825"
          height="1824"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xmlnsAvocode="https://avocode.com/"
          viewBox="0 0 1825 1824"
        >
          <defs></defs>
          <desc>Generated with Avocode.</desc>
          <g>
            <g transform="rotate(-9.999999442302629 912.5 912)" opacity="0.4">
              <title>Rectangle 2</title>
              <path
                d="M911.50008,1824.00004c-503.13141,0 -911,-407.86859 -911,-911v-1.99995c0,-503.13141 407.86859,-911 911,-911h1.99995c503.13141,0 911,407.86859 911,911v1.99995c0,503.13141 -407.86859,911 -911,911z"
                fill="#453a65"
                fill-opacity="1"
              ></path>
            </g>
          </g>
        </svg>
        <img src={dots} id="points" alt="dots" />

        <img src={rocket} className="rocket" alt="rocket" />
        <img src={rocketSmall} className="rocketSmall" alt="rocketSmall" />
        <img src={mercury} className="mercury" alt="mercury" />
        <img src={title} className="title" alt="title" />
        <img src={ancient} className="ancient" alt="ancient" />
        <img src={astro} className="astro" alt="astro" />
        <p>Play, Invest and win Everyday, every hour</p>
        <svg
          id="SVGDoc"
          width="50"
          height="50"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xmlnsAvocode="https://avocode.com/"
          viewBox="0 0 50 50"
          onClick={executeScroll}
        >
          <defs>
            <clipPath id="ClipPath1051">
              <path
                d="M25,50c-13.80712,0 -25,-11.19288 -25,-25v0c0,-13.80712 11.19288,-25 25,-25v0c13.80712,0 25,11.19288 25,25v0c0,13.80712 -11.19288,25 -25,25z"
                fill="#ffffff"
              ></path>
            </clipPath>
            <clipPath id="ClipPath1060">
              <path
                d="M25,50c-13.80712,0 -25,-11.19288 -25,-25v0c0,-13.80712 11.19288,-25 25,-25v0c13.80712,0 25,11.19288 25,25v0c0,13.80712 -11.19288,25 -25,25z"
                fill="#ffffff"
              ></path>
            </clipPath>
          </defs>
          <desc>Generated with Avocode.</desc>
          <g>
            {" "}
            <g>
              <path
                d="M25.49998,29.87787c-0.60573,0 -1.21143,-0.23364 -1.67004,-0.69226l-5.64177,-5.64175c-0.25093,-0.25095 -0.25093,-0.66629 0,-0.91721c0.25095,-0.25096 0.66629,-0.25096 0.91722,0l5.64178,5.64175c0.41534,0.41534 1.09027,0.41534 1.5056,0l5.64178,-5.64175c0.25095,-0.25096 0.66631,-0.25096 0.91722,0c0.25093,0.25092 0.25093,0.66626 0,0.91721l-5.64177,5.64175c-0.45862,0.45862 -1.06432,0.69226 -1.67003,0.69226z"
                fill="#ffffff"
                fill-opacity="1"
              ></path>
            </g>{" "}
            <g>
              <path
                d="M25,50c-13.80712,0 -25,-11.19288 -25,-25v0c0,-13.80712 11.19288,-25 25,-25h0c13.80712,0 25,11.19288 25,25v0c0,13.80712 -11.19288,25 -25,25z"
                fill-opacity="0"
                fill="#ffffff"
                stroke-dashoffset="0"
                stroke-linejoin="miter"
                stroke-linecap="butt"
                stroke-opacity="1"
                stroke="#ffffff"
                stroke-miterlimit="20"
                stroke-width="2"
                clip-path='url("#ClipPath1051")'
              ></path>
            </g>{" "}
            <g>
              {" "}
              <g>
                <path
                  d="M25,50c-13.80712,0 -25,-11.19288 -25,-25v0c0,-13.80712 11.19288,-25 25,-25h0c13.80712,0 25,11.19288 25,25v0c0,13.80712 -11.19288,25 -25,25z"
                  fill-opacity="0"
                  fill="#ffffff"
                  stroke-dashoffset="0"
                  stroke-linejoin="miter"
                  stroke-linecap="butt"
                  stroke-opacity="1"
                  stroke="#ffffff"
                  stroke-miterlimit="20"
                  stroke-width="2"
                  clip-path='url("#ClipPath1060")'
                ></path>
                <path
                  d="M25.49998,29.87787c-0.60573,0 -1.21143,-0.23364 -1.67004,-0.69226l-5.64177,-5.64175c-0.25093,-0.25095 -0.25093,-0.66629 0,-0.91721c0.25095,-0.25096 0.66629,-0.25096 0.91722,0l5.64178,5.64175c0.41534,0.41534 1.09027,0.41534 1.5056,0l5.64178,-5.64175c0.25095,-0.25096 0.66631,-0.25096 0.91722,0c0.25093,0.25092 0.25093,0.66626 0,0.91721l-5.64177,5.64175c-0.45862,0.45862 -1.06432,0.69226 -1.67003,0.69226z"
                  fill="#ffffff"
                  fill-opacity="1"
                ></path>
              </g>
            </g>
          </g>
        </svg>
      </div>
      <div className="steps">
        <Box sx={{ width: "100%" }}>
          <Stepper
            nonLinear
            activeStep={activeStep}
            orientation="vertical"
            className="stepper"
          >
            <Step>
              <StepButton
                color="inherit"
                onClick={() => {
                  executeScroll();
                  console.log(scrolltest);

                  setActiveStep(0);
                }}
              ></StepButton>
            </Step>
            <Step>
              <StepButton
                color="inherit"
                onClick={() => {
                  executeScroll1();
                  console.log(scrolltest);

                  setActiveStep(1);
                }}
              ></StepButton>
            </Step>
            <Step>
              <StepButton
                color="inherit"
                onClick={() => {
                  executeScroll2();
                  setActiveStep(2);
                }}
              ></StepButton>
            </Step>
            <Step>
              <StepButton
                color="inherit"
                onClick={() => {
                  executeScroll3();
                  setActiveStep(3);
                }}
              ></StepButton>
            </Step>
          </Stepper>
        </Box>

        <div className="step1" ref={myRef}>
          <svg
            id="SVGDoc"
            width="294"
            height="213"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlnsAvocode="https://avocode.com/"
            viewBox="0 0 294 225"
            className="loopSVG"
          >
            <path
              d="M7.82794,139.07996c-11.97461,-51.72717 40.77393,-108.27158 117.57959,-126.05151c76.80859,-17.78003 149.04163,9.83691 161.01611,61.56415c11.97437,51.73132 -40.77832,108.27979 -117.58374,126.05969c-76.80933,17.77588 -149.03735,-9.84088 -161.01196,-61.57233zM292.12506,73.27344c-12.8551,-55.52713 -88.35828,-85.64969 -168.31384,-67.14191c-79.95227,18.50763 -134.54065,78.74445 -121.68542,134.27161c12.85156,55.52716 88.35791,85.64966 168.3103,67.14209c79.95166,-18.50769 134.54028,-78.74451 121.68896,-134.27179z"
              className="path four"
            />
            <path
              d="M47.74652,116.23483c-8.22449,-35.53925 28.31982,-74.46082 81.46924,-86.76624c53.1499,-12.30121 103.08228,6.59927 111.31067,42.13861c8.224,35.535 -28.3197,74.46066 -81.47339,86.76614c-53.14563,12.30109 -103.07812,-6.60349 -111.30652,-42.13852zM246.22858,70.28806c-9.10522,-39.33914 -62.31714,-60.74121 -118.60852,-47.71222c-56.29626,13.03314 -94.68079,55.63876 -85.57556,94.97803c9.10474,39.33911 62.31226,60.74127 118.60425,47.71225c56.29248,-13.02899 94.68457,-55.63882 85.57983,-94.97806z"
              className="path three"
            />
            <path
              d="M79.6015,94.9982c-4.08142,-17.62686 20.62878,-39.04153 53.96008,-46.75299c33.32678,-7.71561 64.93408,0.66159 69.01489,18.28851c4.0813,17.62701 -20.63306,39.03732 -53.95996,46.75296c-33.32739,7.71561 -64.93433,-0.65741 -69.01501,-18.28848zM208.2785,65.21472c-5.11523,-22.10504 -38.63611,-32.58698 -76.31323,-23.86642c-37.67712,8.72446 -63.18054,32.86804 -58.06628,54.97299c5.11951,22.10083 38.6366,32.57861 76.31372,23.85831c37.67664,-8.72049 63.18481,-32.86401 58.0658,-54.96487z"
              className="path two"
            />
            <path
              d="M110.87714,82.7919c-1.57935,-6.82254 8.61694,-17.19696 25.78101,-21.17053c17.15979,-3.96942 30.875,0.86426 32.45435,7.68683c1.57996,6.82663 -8.61304,17.19275 -25.77661,21.16632c-17.16406,3.97363 -30.87866,-0.86005 -32.45874,-7.68262zM174.81879,67.98917c-2.81543,-12.15237 -19.90503,-17.85437 -39.75684,-13.26062c-19.85181,4.59802 -32.69824,17.2258 -29.88672,29.38239c2.81592,12.15253 19.90552,17.85449 39.75684,13.25653c19.85132,-4.59393 32.69849,-17.22607 29.88672,-29.3783z"
              className="path one"
            />
          </svg>
          <p>Step 1</p>
          <img src={createAccount} className="createAccount" />
        </div>
        <div className="step2" ref={myRef1}></div>
        <div className="step3" ref={myRef2}>
          <button onClick={executeScroll3} style={{ top: "25%" }}>
            Click to scroll test
          </button>
        </div>
        <div className="step4" ref={myRef3}></div>
      </div>
    </>
  );
};

export default Home;
