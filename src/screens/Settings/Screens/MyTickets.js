import React, { useState } from "react";
import { Table } from "react-bootstrap";
import "./MyTickets.scss";

const MyTickets = () => {
  return (
    <div className="container-my-tickets-right">
      <div className="my-tickets-header">My Tickets</div>
      <div className="my-tickets-helper">
        The Panda Lotto results for March 1, 2022 are displayed below. Simply
        scroll down to view the draw information
      </div>
      <table className="my-tickets-table">
        <tr>
          <th className="left">Draw Date</th>
          <th>Draw ID</th>
          <th>Selected Panda</th>
          <th>Amount</th>
          <th>Result</th>
          <th className="right">Ticket#</th>
        </tr>
        <tr>
          <td>01/3/2022</td>
          <td>100023</td>
          <td>Space Panda</td>
          <td>$100.00</td>
          <td>Win</td>
          <td>12321</td>
        </tr>
        <tr>
          <td>01/3/2022</td>
          <td>100023</td>
          <td>Space Panda</td>
          <td>$100.00</td>
          <td>Lost</td>
          <td>12321</td>
        </tr>
        <tr>
          <td>01/3/2022</td>
          <td>100023</td>
          <td>Space Panda</td>
          <td>$100.00</td>
          <td>Lost</td>
          <td>12321</td>
        </tr>
        <tr>
          <td>01/3/2022</td>
          <td>100023</td>
          <td>Space Panda</td>
          <td>$100.00</td>
          <td>Win</td>
          <td>12321</td>
        </tr>
      </table>
    </div>
  );
};

export default MyTickets;
