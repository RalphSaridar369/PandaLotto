import React, { useState } from "react";
import { TextInput } from "../../components/TextInput/Textinput";
import "./Play.scss";
import "./Step3.scss";
import Panda1 from "../../images/panda.png";
import Panda2 from "../../images/panda2.png";
// import Stepper from "./components/Stepper/Stepper";
import { useNavigate } from "react-router-dom";

const myStyle = {
  backgroundColor: "#090021",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const Step2 = () => {

  // const [active1, setActive1] = useState(false);
  // const [active2, setActive2] = useState(false);
  // const [active3, setActive3] = useState(false);
  // const [ticket, setTicket] = useState();
  // const tickets = [
  //   { id: 1, value: 20 },
  //   { id: 2, value: 50 },
  //   { id: 3, value: 100 },
  //   { id: 4, value: 200 },
  //   { id: 5, value: 300 },
  //   { id: 6, value: 400 },
  //   { id: 7, value: 500 },
  //   { id: 8, value: 750 },
  //   { id: 9, value: 1000 },
  //   { id: 10, value: 2000 },
  //   { id: 11, value: 3000 },
  //   { id: 12, value: 5000 },
  // ];

  const navigate = useNavigate();


  const steps = [
    {
      step: 1,
      label: "Choose your panda",
      active: true,
      completed:true,
      // description: (
          //   <div className="choose-character-container">
          //     <div className="choose-character">
          //       <div className="box1" onClick={()=>setActiveStep(1)}>
          //         <img src={Panda1} />
          //         <p>Space Panda</p>
          //       </div>
          
          //       <div className="box2" onClick={()=>setActiveStep(1)}>
          //         <img src={Panda2} />
          //         <p>Viking Panda</p>
          //       </div>
          //     </div>
          
          //     <div className="Buttons">
          //       <div className="Button" onClick={()=>setActiveStep(1)}  >
          //         <h2>Select</h2>
          //       </div>
          //       <div className="Button" onClick={()=>setActiveStep(1)}  >
          //         <h2>Select</h2>
          //       </div>
          //     </div>
          //   </div>
          // ),
        },
        {
            step: 2,
            label: "Place your bet",
            active: true,
            completed:true,
            onClick:()=>navigate('/step2')
            // description:(
                // <div className="amount-container">
                //   <img src={require('../../icons/Tickets.png')} className="tickets-image"/>
                //   <h3>
                //     Select a ticket or add an amount:
                //   </h3>
      //   <div className="ticket-container">
      //     {tickets.map((item,index)=><div onClick={()=>setTicket(item.id)} className={`ticket-button ${ticket==item.id && "active-ticket"}`} key={index}>{item.value}$</div>)}
      //   </div>
      //   <div className="input-container">
      //     <h4>
      //       Add Amount:
      //     </h4>
      //     <TextInput type="number" style={{borderRadius:'5px'}}/>
      //   </div>
      //   <hr></hr>
      //   <div className="submit-button" onClick={()=>setActiveStep(2)}>
      //     Next
      //   </div>
      // </div>
      // ),
    },
    {
      step: 3,
      label: "Select Payment Method",
      active: false,
      completed:false
      // description: (
      //   <div className="payment-container">
      //     <img src={require('../../icons/hand.png')} className="hand-image"/>
      //     <div className="payment-options">
      //       <div className="payment-option">
      //         <img src={require('../../icons/Paypal.png')} />
      //       </div>
      //       <div className="payment-option">
      //         <img src={require('../../icons/BTC.png')} />
      //       </div>
      //       <div className="payment-option">
      //         <img src={require('../../icons/Wallet.png')} />
      //       </div>
      //     </div>
      //   </div>
      // ),
    },
  ];

  return (
    <div className="main">
      <div className="main-play" style={myStyle}>
        <div className="containers">
          <div className="title">
            <div className="title-part1">
              <h2>Buy your ticket</h2>
              <div className="separator"></div>
              <h3>March 1, 2022</h3>
            </div>
            <div className="title-part2">
              <h3>Next Draw in:</h3>
              <h2>53:45</h2>
            </div>
          </div>
          <div className="line"></div>
        </div>
        <div>
        </div>
      </div>
      <div className="main-containers">
        <div className="main-left">
          {steps.map((item, index) => {
            return (
              <>
                <div className={`main-left-circle ${item.active ? "active-circle" : "inactive-circle"} ${item.onClick && "hoverable" }`} onClick={item.onClick}>{ !item.completed?index + 1:<img src={require('../../icons/tick.png')} className="left-tick-icon"/>}</div>
                <div className={`main-left-label ${item.active ? "active-label" : "inactive-label"}`}>{item.label}</div>
                {index != 2 && <div className="main-left-seperator"></div>}
              </>
            )
          })}
        </div>
        <div className="main-right">
         <div className="payment-container">
           <img src={require('../../icons/hand.png')} className="hand-image"/>
           <div className="payment-options">
             <div className="payment-option">
               <img src={require('../../icons/Paypal.png')} />
             </div>
             <div className="payment-option">
               <img src={require('../../icons/BTC.png')} />
             </div>
             <div className="payment-option">
               <img src={require('../../icons/Wallet.png')} />
             </div>
           </div>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Step2;
