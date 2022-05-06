import React, { useState, useCallback } from "react";
import { Table } from "react-bootstrap";
import "./Previous.scss";
import { Calendar } from "@natscale/react-calendar";

const MyTickets = () => {
  const [value, setValue] = useState(new Date());

  const onChange = useCallback(
    (val) => {
      setValue(val);
    },
    [setValue]
  );
  return (
    <div className="main-settings">
      <h2 className="header-settings">Previous Results</h2>
      <hr className="previous-seperator"></hr>

      <div className="body">
        <div className="left">
          <div className="label">Pick a date</div>
          <Calendar
            className="react-calendar"
            disableFuture
            value={value}
            onChange={onChange}
          />
        </div>

        <div className="right">
          <div className="label">Latest Results</div>

          <div className="container-settings">
            <div className="container-my-tickets-right">
              <div
                className="my-tickets-header"
                style={{ fontFamily: "Roobert" }}
              >
                Panda Lotto Results for March 1, 2022
              </div>
              <div
                className="my-tickets-helper"
                style={{ fontFamily: "Helvetica Neue" }}
              >
                The Panda Lotto results for March 1, 2022 are displayed below.
                Simply scroll down to view the draw information
              </div>
              <table className="my-tickets-table">
                <tr>
                  <th className="left">Draw Time</th>
                  <th>Draw ID</th>
                  <th>Result</th>
                  <th>Tickets Sold</th>
                  <th className="right">Total Winners</th>
                </tr>
                <tr>
                  <td>12:00 am</td>
                  <td>100023</td>
                  <td>Space Panda</td>
                  <td>29813</td>
                  <td>1321</td>
                </tr>
                <tr>
                  <td>11:00 pm</td>
                  <td>100023</td>
                  <td>Space Panda</td>
                  <td>29813</td>
                  <td>1321</td>
                </tr>
                <tr>
                  <td>10:00 pm</td>
                  <td>100023</td>
                  <td>Space Panda</td>
                  <td>29813</td>
                  <td>1321</td>
                </tr>
                <tr>
                  <td>9:00 pm</td>
                  <td>100023</td>
                  <td>Space Panda</td>
                  <td>29813</td>
                  <td>1321</td>
                </tr>
                <tr>
                  <td>2:00 am</td>
                  <td>100023</td>
                  <td>Space Panda</td>
                  <td>29813</td>
                  <td>1321</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTickets;
