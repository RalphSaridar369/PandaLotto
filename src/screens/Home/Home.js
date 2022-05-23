import React, { useContext, useRef, useEffect, useState } from "react";
import { MainContext } from "../../utils/MainContext";
import title from "../../images/title.png";
import mercury from "../../images/mercury.png";
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
import Dollar from "../../images/Dollar.png";
import Clock from "../../images/Clock.png";
import FlyingCar from "../../images/FlyingCar.png";
import "./Home.scss";
import { Step, Stepper, Box, StepButton } from "@mui/material";
import useWindowDimensions from "../../hooks/WindowDimensions";
import SvgRocket from "../../images/svgRocket";
import SvgMissile from "../../images/SvgMissile";
import Circles from "../../images/Circles";
import ArrowDown from "../../images/ArrowDown";
import Astronaut from "../../images/Astronaut";
import Ancient from "../../images/Ancient";
import RocketSmall from "../../images/RocketSmall";
import GooglePlay from "../../images/GooglePlay";
import AppStore from "../../images/AppStore";
import Footer from "../../components/Footer/footer";

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
      <div className="home" style={myStyle}>
        <div className="step0">
          <img src={title} className="title" alt="title" />
          <p>Play, Invest and win Everyday, every hour</p>
          <div className="stores">
            <GooglePlay className="store googlePlay" />
            <AppStore className="store appStore" />
          </div>
        </div>
        <SvgRocket className="rocket" />
        <RocketSmall className="rocketSmall" />
        <img src={mercury} className="mercury" alt="mercury" />
        <Ancient className="ancient" />
        <Astronaut className="astro" />
        <ArrowDown className="arrowDown" onClick={executeScroll} />
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
            <div className="box1">
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
            <div className="box1" style={{ marginRight: "800px" }}>
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
          <Circles className="loopSVG" />
        </div>
        <div className="step2 step" ref={myRef1}>
          <p className="stepNumber">Step 2</p>
          <div className="title">
            <h1>Choose</h1>
            <h1>Your Panda</h1>
            <p>Select the Panda you’d like to invest with.</p>
          </div>
          <div className="box">
            <div className="box1">
              <div className="boxColored">
                <img src={helmet} className="helmet" alt="helmet" />
              </div>
              <p>Space Panda</p>
              <p>Easy registration by using your Gmail or Facebook Account.</p>
            </div>
            <div className="box1" style={{ marginRight: "800px" }}>
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
            <div className="box1">
              <div className="boxColored">
                <img src={Secured} className="Secured" alt="Secured" />
              </div>
              <p>100% Secure Payment</p>
              <p>Easy registration by using your Gmail or Facebook Account.</p>
            </div>
            <div className="box1" style={{ marginRight: "800px" }}>
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
            <div className="box1">
              <div className="boxColored">
                <img src={Dollar} className="Dollar" alt="Dollar" />
              </div>
              <p>Earnings Fast Withdrawal</p>
              <p>Easy registration by using your Gmail or Facebook Account.</p>
            </div>
            <div className="box1" style={{ marginRight: "800px" }}>
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

      {/* <Footer /> */}
    </div>
  );
};

export default Home;
