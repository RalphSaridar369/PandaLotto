import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Panda1 from "../../images/panda.png";
import Panda2 from "../../images/panda2.png";
import './Stepper.scss';

const labelStyle={
  color:'#fff'
}

const textStyle={
  color:'#fff'
}

const steps = [
  {
    label: (<div style={labelStyle}>Choose your panda</div>),
    description: (
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
    ),
  },
  {
    label: (<div style={labelStyle}>Place your bet</div>),
    description:
      (<div style={textStyle}>An ad group contains one or more ads which target a shared set of keywords.</div>),
  },
  {
    label: (<div style={labelStyle}>Select Payment Method</div>),
    description: (<div style={textStyle}>Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.</div>),
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box style={{ width: "100%", marginLeft: "-400px" }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel>{step.label}</StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? "Finish" : "Continue"}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}