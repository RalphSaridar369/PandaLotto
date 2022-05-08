import React, { useContext, useRef, useEffect, useState } from "react";
import { MainContext } from "../../utils/MainContext";
import title from "../../images/title.png";
import mercury from "../../images/mercury.png";
import rocket from "../../images/rocket.svg";
import rocketSmall from "../../images/rocketSmall.png";
import pandaLaptop from "../../images/pandaLaptop.png";
import ancient from "../../images/Character_ancient.png";
import fingerClick from "../../images/fingerClick.png";
import file from "../../images/file.png";
import helmet from "../../images/helmet.png";
import helmetOld from "../../images/helmetOld.png";
import pandasTwo from "../../images/pandasTwo.png";
import Secured from "../../images/Secured.png";
import Betcoin from "../../images/Betcoin.png";
import Missile from "../../images/Missile.png";
import Dollar from "../../images/Dollar.png";
import Clock from "../../images/Clock.png";
import FlyingCar from "../../images/FlyingCar.png";
import astro from "../../images/panda.png";
import "./Home.scss";
import { Step, Stepper, Box, StepButton } from "@mui/material";
import useWindowDimensions from "../../hooks/WindowDimensions";
import SvgDot from "../../images/SvgDot";
import SvgRocket from "../../images/svgRocket";
import SvgMissile from "../../images/SvgMissile";

const useMountEffect = (fun) => useEffect(fun, []);
const steps = ["", "", ""];

const Home = () => {
  const { loggedIn } = useContext(MainContext);
  const myStyle = {
    // backgroundImage: `url(${Background})`,
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
  // console.log(scrolltest);
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
  const prevScrollY = useRef(0);
  const [goingUp, setGoingUp] = useState(false);
  const [pos, setPos] = useState(0);

  const onScroll = (e) => {
    const currentScrollY = e.target.scrollTop;
    setPos(e.target.scrollTop);
    if (prevScrollY.current < currentScrollY && goingUp) {
      setGoingUp(false);
    }
    if (prevScrollY.current > currentScrollY && !goingUp) {
      setGoingUp(true);
    }
    prevScrollY.current = currentScrollY;
    console.log(e.target);
  };
  const { height, width } = useWindowDimensions();
  console.log("position:", pos, "width:", width, "height:", height);

  return (
    // <div>Loggedin: {!loggedIn?"No":"Yes"}</div>
    // onScroll={onScroll}
    <div
      className="test"
      // style={{ height: "100vh" }}
    >
      {/* <div className="twinkling"></div> */}
      <div className="cube"></div>

      <div className="home" style={myStyle}>
        <SvgRocket className="rocket" />
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
          className="arrowDown"
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
            <g>
              <path
                d="M25.49998,29.87787c-0.60573,0 -1.21143,-0.23364 -1.67004,-0.69226l-5.64177,-5.64175c-0.25093,-0.25095 -0.25093,-0.66629 0,-0.91721c0.25095,-0.25096 0.66629,-0.25096 0.91722,0l5.64178,5.64175c0.41534,0.41534 1.09027,0.41534 1.5056,0l5.64178,-5.64175c0.25095,-0.25096 0.66631,-0.25096 0.91722,0c0.25093,0.25092 0.25093,0.66626 0,0.91721l-5.64177,5.64175c-0.45862,0.45862 -1.06432,0.69226 -1.67003,0.69226z"
                fill="#ffffff"
                fill-opacity="1"
              ></path>
            </g>
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
      <div className="steps" onScroll={onScroll}>
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

        <div className="step1 step" ref={myRef}>
          <p className="stepNumber">Step 1</p>
          <div className="title">
            <h1>Create</h1>
            <h1>Account</h1>
            <p>Easy & Quick account registration.</p>
          </div>
          <div className="box">
            <div>
              <div className="boxColored">
                <img
                  src={fingerClick}
                  className="fingerClick"
                  alt="fingerClick"
                />
              </div>
              <p>One Click Registration</p>
              <p>Easy registration by using your Gmail or Facebook Account.</p>
            </div>
            <div>
              <div className="boxColored">
                <img src={file} className="file" alt="file" />
              </div>
              <p>Secured Information</p>
              <p>
                Lorum ipsum dolor sit met niet das Auto estetuer de copicada
              </p>
            </div>
          </div>
          <img
            src={pandaLaptop}
            className="pandaLaptop mainImage"
            alt="pandaLaptop"
          />
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
        </div>
        <div className="step2 step" ref={myRef1}>
          <p className="stepNumber">Step 2</p>
          <div className="title">
            <h1>Choose</h1>
            <h1>Your Panda</h1>
            <p>Select the Panda you’d like to invest with.</p>
          </div>
          <div className="box">
            <div>
              <div className="boxColored">
                <img src={helmet} className="helmet" alt="helmet" />
              </div>
              <p>Space Panda</p>
              <p>Easy registration by using your Gmail or Facebook Account.</p>
            </div>
            <div>
              <div className="boxColored">
                <img src={helmetOld} className="helmetOld" alt="helmetOld" />
              </div>
              <p>Secured Information</p>
              <p>
                Lorum ipsum dolor sit met niet das Auto estetuer de copicada
              </p>
            </div>
          </div>
          <img
            src={pandasTwo}
            className="pandasTwo mainImage"
            alt="pandasTwo"
          />
        </div>
        <div className="step3 step" ref={myRef2}>
          <p className="stepNumber">Step 3</p>
          <div className="title">
            <h1>Place</h1>
            <h1>Your bet</h1>
            <p>Select the budget you’d like to buy your ticket!</p>
          </div>
          <div className="box">
            <div>
              <div className="boxColored">
                <img src={Secured} className="Secured" alt="Secured" />
              </div>
              <p>100% Secure Payment</p>
              <p>Easy registration by using your Gmail or Facebook Account.</p>
            </div>
            <div>
              <div className="boxColored">
                <img src={Betcoin} className="Betcoin" alt="Betcoin" />
              </div>
              <p>Play with Crypto Currency</p>
              <p>
                Lorum ipsum dolor sit met niet das Auto estetuer de copicada
              </p>
            </div>
          </div>
          <SvgMissile className="Missile mainImage" />
        </div>
        <div className="step4 step" ref={myRef3}>
          <p className="stepNumber">Step 4</p>
          <div className="title">
            <h1>Double</h1>
            <h1>Your Money</h1>
            <p>
              Enjoy the game and get a change to double your money every hour!
            </p>
          </div>
          <div className="box">
            <div>
              <div className="boxColored">
                <img src={Dollar} className="Dollar" alt="Dollar" />
              </div>
              <p>Earnings Fast Withdrawal</p>
              <p>Easy registration by using your Gmail or Facebook Account.</p>
            </div>
            <div>
              <div className="boxColored">
                <img src={Clock} className="Clock" alt="Clock" />
              </div>
              <p>Earnings Fast Withdrawal 24/7 Lottery</p>
              <p>
                Lorum ipsum dolor sit met niet das Auto estetuer de copicada
              </p>
            </div>
          </div>
          <img
            src={FlyingCar}
            className="FlyingCar mainImage"
            alt="FlyingCar"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
