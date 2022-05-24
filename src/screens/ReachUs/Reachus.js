import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { formValidator } from "../../utils/FormValidator";
import Background from "../../images/background.png";
import "./Reachus.scss";
import ReCAPTCHA from "react-google-recaptcha";
import { TextInput } from "../../components/TextInput2/Textinput";

const Reachus = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
    confirm: "",
    accept_1: false,
    accept_2: false,
  });

  const myStyle = {
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const handleRegister = () => {
    formValidator(data, "register", () => {
      alert("User registered successfully! please check your email");
      navigate("/login");
    });
  };
  return (
    <div className="main-reach" style={myStyle}>
      <div className="containers">
        <div className="left">
          <div className="title">Reach us</div>
          <div className="form">
            <div className="inputs-container">
              <div className="input">
                <div className="input-label">Full Name*</div>
                <TextInput
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                />
              </div>
              <div className="input">
                <div className="input-label">Email*</div>
                <TextInput
                  placeHolder="ex: email@gmail.com"
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                />
              </div>
              <div className="input">
                <div className="input-label">Phone number</div>
                <TextInput
                  placeHolder="ex: +961 928 288"
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                />
              </div>
              <div className="input">
                <div className="input-label">Message*</div>
                <TextInput
                  style={{ height: "150px" }}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                />
              </div>
              <div className="buttons">
                <div className="robot">
                  <ReCAPTCHA
                    sitekey="6Les0BQgAAAAACCZa2usK3CyVmYO19P3OLE2kfjR"
                    // onChange={onChange}
                  />
                </div>
                <div className="submit">Submit</div>
              </div>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="title">Contact Info</div>
          <div className="contact-info">
            <div className="address">Address:</div>
            <div className="value">
              Romania, Ilfov, Domnesti, str Uverturii nr 17
            </div>
            <br></br>
            <div className="email">Email:</div>
            <div className="value">info@pandalotto.com</div>
            <div className="value">hello@pandalotto.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reachus;
