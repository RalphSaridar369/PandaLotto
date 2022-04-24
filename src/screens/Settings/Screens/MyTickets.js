import React from 'react'
import { Table } from 'react-bootstrap';

const MyTickets = () => {
  return (
    <div className='container-my-tickets-right'>
            <div className='my-tickets-header'>My Tickets</div>
            <div className='my-tickets-helper'>The Panda Lotto results for March 1, 2022 are displayed below. Simply scroll down to view the draw information</div>
            <Table className="my-tickets-table" responsive borderless>
              <thead>
                <tr>
                  <th>Draw Date</th>
                  <th>Draw ID</th>
                  <th>Selected Panda</th>
                  <th>Amount</th>
                  <th>Result</th>
                  <th>Ticket#</th>
                </tr>
              </thead>
            </Table>
          </div>
  )
}

export default MyTickets