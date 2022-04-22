import React, { useContext, useRef, useEffect, useState } from "react";
import { MainContext } from "../../utils/MainContext";
import title from "../../images/title.png";
import ancient from "../../images/Character_ancient.png";
import Background from "../../images/Rectangle_52.png";
import astro from "../../images/panda.png";
import createAccount from "../../images/create-account.png";
import "./Home.scss";
import {
  Step,
  Stepper,
  Box,
  StepButton,
  Button,
  Typography,
} from "@mui/material";
const useMountEffect = (fun) => useEffect(fun, []);
const steps = ["", "", ""];

const Home = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const { loggedIn } = useContext(MainContext);
  const myStyle = {
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  const myRef = useRef(null);
  const executeScroll = () => myRef.current.scrollIntoView();
  const myRef2 = useRef(null);
  const executeScroll2 = () => myRef2.current.scrollIntoView();
  const myRef3 = useRef(null);
  const executeScroll3 = () => myRef3.current.scrollIntoView();
  // useMountEffect(executeScroll);

  return (
    // <div>Loggedin: {!loggedIn?"No":"Yes"}</div>
    <>
      <div className="home" style={myStyle}>
        <img src={title} className="title" />
        <img src={ancient} className="ancient" />
        <img src={astro} className="astro" />
        <p>Play, Invest and win Everyday, every hour</p>
      </div>
      <div className="steps">
        <Box sx={{ width: "100%" }}>
          <Stepper
            nonLinear
            activeStep={activeStep}
            orientation="vertical"
            className="stepper"
          >
            {/* {steps.map((label, index) => (
              <Step key={label} completed={completed[index]}>
                <StepButton color="inherit" onClick={executeScroll}>
                  {label}
                </StepButton>
              </Step>
            ))} */}
            <Step>
              <StepButton color="inherit" onClick={executeScroll}></StepButton>
            </Step>
            <Step>
              <StepButton color="inherit" onClick={executeScroll2}></StepButton>
            </Step>
            <Step>
              <StepButton color="inherit" onClick={executeScroll3}></StepButton>
            </Step>
            <Step>
              <StepButton color="inherit" onClick={executeScroll}></StepButton>
            </Step>
          </Stepper>
        </Box>

        <div className="step1" ref={myRef}>
          {" "}
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
        <div className="step2" ref={myRef}></div>
        <div className="step3" ref={myRef2}>
          <button onClick={executeScroll}> Click to scroll </button>
        </div>
        <div className="step4" ref={myRef3}></div>
      </div>
    </>
  );
};

export default Home;
