import React, { useState } from "react";
// import Box from "@mui/material/Box";
// import Stepper from "@mui/material/Stepper";
// import Step from "@mui/material/Step";
// import StepLabel from "@mui/material/StepLabel";
// import StepContent from "@mui/material/StepContent";
// import Button from "@mui/material/Button";
// import Paper from "@mui/material/Paper";
// import Typography from "@mui/material/Typography";
import Panda1 from "../../../../images/panda.png";
import Panda2 from "../../../../images/panda2.png";
import './Stepper.scss';

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: 1,
      label: "Choose your panda",
      description: (
        <div className="choose-character-container">
          <div className="choose-character">
            <div className="box1">
              <img src={Panda1} />
              <p>Space Panda</p>
            </div>

            <div className="box2">
              <img src={Panda2} />
              <p>Viking Panda</p>
            </div>
          </div>


          <div className="Buttons">
            <div className="Button">
              <h2>Select</h2>
            </div>
            <div className="Button">
              <h2>Select</h2>
            </div>
          </div>
        </div>
      ),
    },
    {
      step: 2,
      label: "Place your bet",
      description:
        "An ad group contains one or more ads which target a shared set of keywords.",
    },
    {
      step: 3,
      label: "Select Payment Method",
      description: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`,
    },
  ];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const returnData = () => {
    if (activeStep == 1) {
      return steps[0].description
    }
  }

  return (
    <div>
      <div className="step">
        <div className="step-left">
          {steps.map((item, index) => {
            return <div key={index} className="step-left-container">
              <div className="step-left-circle">
                {activeStep + 1 > item.step ?
                  <img src={require("../../../../icons/tick.png")} className="tick" />
                  : index + 1}
              </div>
              <span className="step-left-header">{item.label}</span>
              {item.label != "Select Payment Method" && <div class="vertical-line"></div>}
            </div>
          })}
        </div>
        <div className="step-right">
          {steps[activeStep].description}
        </div>
      </div>
    </div>
    // <Box style={{ width: "100%", marginLeft: "-400px" }}>
    //   <Stepper activeStep={activeStep} orientation="vertical">
    //     {steps.map((step, index) => (
    //       <Step key={step.label}>
    //         <StepLabel>{step.label}</StepLabel>
    //         <StepContent>
    //           <Typography>{step.description}</Typography>
    //           <Box sx={{ mb: 2 }}>
    //             <div>
    //               <Button
    //                 variant="contained"
    //                 onClick={handleNext}
    //                 sx={{ mt: 1, mr: 1 }}
    //               >
    //                 {index === steps.length - 1 ? "Finish" : "Continue"}
    //               </Button>
    //               <Button
    //                 disabled={index === 0}
    //                 onClick={handleBack}
    //                 sx={{ mt: 1, mr: 1 }}
    //               >
    //                 Back
    //               </Button>
    //             </div>
    //           </Box>
    //         </StepContent>
    //       </Step>
    //     ))}
    //   </Stepper>
    //   {activeStep === steps.length && (
    //     <Paper square elevation={0} sx={{ p: 3 }}>
    //       <Typography>All steps completed - you&apos;re finished</Typography>
    //       <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
    //         Reset
    //       </Button>
    //     </Paper>
    //   )}
    // </Box>
  );
}
