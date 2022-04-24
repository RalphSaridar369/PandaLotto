import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.scss";
import { TextInput } from "../../components/TextInput/Textinput";
import { Checkbox } from "../../components/Checkbox/Checkbox";
import Background from "../../images/background.png";
import { formValidator } from "../../utils/FormValidator";
import clock from "../../images/Meteoroid@1.5x.svg";

const Register = () => {
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
    <div className="main-containers" style={myStyle}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="127.5"
        height="81"
        viewBox="0 0 150 54"
        // strokeDasharray={}
        className="animation"
      >
        <defs>
          <image
            id="tx7ab"
            width="146"
            height="91"
            xlinkHref="data:image/png;base64,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"
          />
          <clipPath id="tx7aa">
            <path d="M.14 53.155V.48h84.51v52.675z" />
          </clipPath>
        </defs>
        <g>
          <g>
            <g clip-path='url("#tx7aa")'>
              <use transform="scale(.5822 .5934)" xlinkHref="#tx7ab" />
            </g>
          </g>
        </g>
      </svg>
      <div className="left">
        <h2 className="header-text">Create an account</h2>
        <div className="inputs-container">
          <div className="input">
            <div className="input-label">Email*</div>
            <TextInput
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>
          <div className="input">
            <div className="input-label-container">
              <div className="input-label">Password*</div>
              <div className="input-label-2">
                Your password should be 8 characters or longer.
              </div>
            </div>
            <TextInput
              hideText
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </div>
          <div className="input">
            <div className="input-label">Confirm Password*</div>
            <TextInput
              hideText
              onChange={(e) => setData({ ...data, confirm: e.target.value })}
            />
          </div>
          <div className="checkbox-container">
            <Checkbox
              className="checkbox"
              right={
                <div className="checkbox-text">Accept Terms and Conditions</div>
              }
              value={data.accept_1}
              onChange={(e) => setData({ ...data, accept_1: e.target.checked })}
            />
            <Checkbox
              className="checkbox"
              right={
                <div className="checkbox-text">I’m 18 years old or older</div>
              }
              value={data.accept_2}
              onChange={(e) => setData({ ...data, accept_2: e.target.checked })}
            />
          </div>
          <div className="register-button" onClick={handleRegister}>
            <div className="register-button-text">Create Account</div>
          </div>
        </div>
      </div>

      <div className="right">
        <div className="header-text">Creating an account with Panda Lotto</div>
        <div className="text-container">
          <div className="text">
            You need in account to be able to buy a ticket and play with Panda
            Lotto.
          </div>
          <div className="text">
            After registering, we will send your User Id by email.
          </div>
          <div className="text">
            When logging in, make sure to use the User Id sent by email,
            together with the Password registered here. Please keep them in a
            safe place.
          </div>
          <div className="text">
            The email address you enter here is only used for verification and
            cannot be used for signing in or recovery.
          </div>
        </div>
        <div className="sign-in-button">
          <Link to="/login" className="sign-in-button-text-1">
            Already have an account ?{" "}
            <div className="sign-in-button-text-2"> Sign in!</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
