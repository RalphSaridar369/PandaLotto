import React, { useState } from 'react';
import ChangePassword from './Screens/ChangePassword';
import MyTickets from './Screens/MyTickets';
import './Settings.scss';

const Settings = () => {
  const [screenState, setScreenState] = useState(1);

  const [changePasswordData, setChangePasswordData] = useState({
    email:'',
    password:'',
    confirm:'',
  })

  const setChangePassword = (type,value) =>{
    setChangePasswordData({...changePasswordData,[type]:value})
  }

  const handleSubmitPassword = () =>{
    alert("Password changed successfully")
  }

  let screens = [
    { id: 1, value: 'Edit Account' },
    { id: 2, value: 'Wallet' },
    { id: 3, value: 'My Tickets' },
    { id: 4, value: 'Logout' },
  ]

  const returnScreen =()=>{
    switch(screenState){
      case 1:
        return <ChangePassword setChangePassword={setChangePassword} handleSubmitPassword={handleSubmitPassword}/>
      case 3:
          return <MyTickets />
      }
  }

  return (
    <div className='main-settings'>

      <h2 className='header-settings'>
        My Account
      </h2>
      <div className='container-settings'>
        <div className='container-settings-left'>
          {screens.map((item, index) => {
            return <div key={index} onClick={() => setScreenState(item.id)}>
              <div  className='settings-option-container'> 
              <div className={`settings-option ${item.id === screenState && "active-setting"}`}
                >
                {item.value}
              </div>
              {item.id === screenState && <img src={require('../../icons/chevron-right.png')}/>}
              </div>
              {index != 3 && <hr></hr>}
            </div>
          })}
        </div>
        {returnScreen()}
      </div>
    </div>
  )
}

export default Settings