import React, {useState} from 'react'
import { Table } from 'react-bootstrap';
import './Previous.scss';
import Calendar from 'react-calendar';

const MyTickets = () => {
  
  const [value, onChange] = useState(new Date());
  return (
      
    <div className='main-settings'>

    <h2 className='header-settings'>
      Previous Results
    </h2>
    <hr className='previous-seperator'></hr>
    <div className='previous-header-label'>
        <div style={{color:'#fff'}}>Pick a date</div>
        <div style={{color:'#fff', marginLeft:'12%'}} className="hide-latest-result">Latest Results</div>
    </div>
    <div className='container-settings'>
      <div className='container-settings-left'>
      </div>
      <div style={{color:'#fff', alignSelf:'flex-start', marginBottom:'20px'}} className='show-latest-result'>Latest Results</div>
    <div className='container-my-tickets-right'>
            <div className='my-tickets-header'>Panda Lotto Results for March 1, 2022</div>
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
      </div>
    </div>
  )
}

export default MyTickets