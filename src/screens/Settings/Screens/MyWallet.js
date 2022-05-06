import React from "react";
import Select from "../../../components/Select/Select";
import { TextInput } from "../../../components/TextInput/Textinput";
import "../Settings.scss";

const MyWallet = ({ options }) => {
  return (
    <div className="container-my-wallet-right">
      <div className="my-wallet-right-top">
        <div className="labels-container-payment">
          <div className="label-payment">Available Balance:</div>
          <h2 className="label-balance">$500.00</h2>
        </div>
      </div>
      <div className="my-wallet-right-bottom">
        <div className="my-wallet-right-bottom-child">
          <div className="right-bottom-label">Load my wallet:</div>
          <TextInput
            className="settings-right-inputs"
            placeholder="Add amount"
          />
          <Select
            items={options}
            className="select-input"
            label="Load Method"
          />
          {/* <TextInput className="settings-right-inputs" placeholder="Add amount"/> */}
          <div className="my-wallet-button">
            <div className="my-wallet-button-text">Load amount</div>
          </div>
        </div>
        <div className="my-wallet-seperator"></div>
        <hr className="my-wallet-seperator-hr"></hr>
        <div className="my-wallet-right-bottom-child">
          <div className="right-bottom-label">Checkout</div>
          <TextInput
            className="settings-right-inputs"
            placeholder="Transfer amount"
          />
          <Select
            items={options}
            className="select-input"
            label="Transfer Method"
          />
          <div className="my-wallet-button">
            <div className="my-wallet-button-text">Transfer amount</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyWallet;
