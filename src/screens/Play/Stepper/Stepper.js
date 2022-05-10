import React, { useState } from "react";
import { TextInput } from "../../../components/TextInput/Textinput";
// import Box from "@mui/material/Box";
// import Stepper from "@mui/material/Stepper";
// import Step from "@mui/material/Step";
// import StepLabel from "@mui/material/StepLabel";
// import StepContent from "@mui/material/StepContent";
// import Button from "@mui/material/Button";
// import Paper from "@mui/material/Paper";
// import Typography from "@mui/material/Typography";
import Panda1 from "../../../images/panda.png";
import Panda2 from "../../../images/panda2.png";
import './Stepper.scss';

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [ticket,setTicket] = useState();

  const tickets = [
    {id:1,value:20,},
    {id:2,value:50,},
    {id:3,value:100,},
    {id:4,value:200,},
    {id:5,value:300,},
    {id:6,value:400,},
    {id:7,value:500,},
    {id:8,value:750,},
    {id:9,value:1000,},
    {id:10,value:2000,},
    {id:11,value:3000,},
    {id:12,value:5000,}
  ]

  const steps = [
    {
      step: 1,
      label: "Choose your panda",
      description: (
        <div className="choose-character-container">
          <div className="choose-character">
            <div className="box1" onClick={()=>setActiveStep(1)}>
              <img src={Panda1} />
              <p>Space Panda</p>
            </div>

            <div className="box2" onClick={()=>setActiveStep(1)}>
              <img src={Panda2} />
              <p>Viking Panda</p>
            </div>
          </div>

          <div className="Buttons">
            <div className="Button" onClick={()=>setActiveStep(1)}  >
              <h2>Select</h2>
            </div>
            <div className="Button" onClick={()=>setActiveStep(1)}  >
              <h2>Select</h2>
            </div>
          </div>
        </div>
      ),
    },
    {
      step: 2,
      label: "Place your bet",
      description:(
      <div className="amount-container">
        <img src={require('../../../icons/Tickets.png')} className="tickets-image"/>
        <h3>
          Select a ticket or add an amount:
        </h3>
        <div className="ticket-container">
          {tickets.map((item,index)=><div onClick={()=>setTicket(item.id)} className={`ticket-button ${ticket==item.id && "active-ticket"}`} key={index}>{item.value}$</div>)}
        </div>
        <div className="input-container">
          <h4>
            Add Amount:
          </h4>
          <TextInput type="number" style={{borderRadius:'5px'}}/>
        </div>
        <hr></hr>
        <div className="submit-button" onClick={()=>setActiveStep(2)}>
          Next
        </div>
      </div>
      ),
    },
    {
      step: 3,
      label: "Select Payment Method",
      description: (
        <div className="payment-container">
          <img src={require('../../../icons/hand.png')} className="hand-image"/>
          <div className="payment-options">
            <div className="payment-option">
              <img src={require('../../../icons/Paypal.png')} />
            </div>
            <div className="payment-option">
              <img src={require('../../../icons/BTC.png')} />
            </div>
            <div className="payment-option">
              <img src={require('../../../icons/Wallet.png')} />
            </div>
          </div>
        </div>
      ),
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
        <div className="step-left-mobile">
        {steps.map((item, index) => {
            return <div key={index} className="step-left-container">
              <div className="step-left-circle" onClick={()=>{
               if(activeStep + 1 > item.step)
               setActiveStep(index)
              }}>
                {activeStep + 1 > item.step ?
                  <img src={require("../../../icons/tick.png")} className="tick" />
                  : index + 1}
              </div>
              <span className="step-left-header">{item.label}</span>
              {item.label != "Select Payment Method" && <div class="vertical-line"></div>}
            </div>
          })}
        </div>
        <div className="step-left">
          {steps.map((item, index) => {
            return <div key={index} className="step-left-container">
              <div className="step-left-circle" onClick={()=>{
               if(activeStep + 1 > item.step)
               setActiveStep(index)
              }}>
                {activeStep + 1 > item.step ?
                  <img src={require("../../../icons/tick.png")} className="tick" />
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

// import React from "react";
// import "./Stepper.scss";

// const Stepper = () => {
//   return (
//     <div className="stepper">
//       <div className="circle">1</div>
//     </div>
//   );
// };

