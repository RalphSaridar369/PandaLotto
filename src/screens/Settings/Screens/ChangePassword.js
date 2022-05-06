import React from "react";
import "../Settings.scss";
import { TextInput } from "../../../components/TextInput/Textinput";

const ChangePassword = ({ setChangePassword, handleSubmitPassword }) => {
  return (
    <div className="container-change-password-right">
      <div className="settings-input-label">Email</div>
      <TextInput
        className="settings-right-inputs"
        onChange={(e) => setChangePassword("email", e.target.value)}
        placeHolder="testmail@gmail.com"
      />
      <div className="settings-input-label">Change Password</div>
      <div className="settings-password-container">
        <div className="settings-small-label-container">
          <div className="settings-small-label">Current password</div>
          <TextInput
            className="settings-right-inputs"
            onChange={(e) => setChangePassword("password", e.target.value)}
            hideText
          />
        </div>
        <div className="settings-right-seperator"></div>
        <div className="settings-small-label-container">
          <div className="settings-small-label">New password</div>
          <TextInput
            className="settings-right-inputs"
            onChange={(e) => setChangePassword("confirm", e.target.value)}
            hideText
          />
        </div>
      </div>
      <div className="update-password-button-container">
        <div className="update-password-button" onClick={handleSubmitPassword}>
          <div className="update-password-text">Update</div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
