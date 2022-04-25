import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChangePassword from './Screens/ChangePassword';
import MyTickets from './Screens/MyTickets';
import MyWallet from './Screens/MyWallet';
import './Settings.scss';

const Settings = () => {
  const navigate = useNavigate();
  const [screenState, setScreenState] = useState(1);
  const [changePasswordData, setChangePasswordData] = useState({
    email: '',
    password: '',
    confirm: '',
  })

  const setChangePassword = (type, value) => {
    setChangePasswordData({ ...changePasswordData, [type]: value })
  }

  const handleSubmitPassword = () => {
    alert("Password changed successfully")
  }

  let options = [
    {id:1, value:'Paypal'},
    {id:2, value:'Bitcoin'},
    {id:3, value:'Wallet'},
  ]

  let screens = [
    { id: 1, value: 'Edit Account' },
    { id: 2, value: 'Wallet' },
    { id: 3, value: 'My Tickets' },
    { id: 4, value: 'Logout' },
  ]

  const returnScreen = () => {
    switch (screenState) {
      case 1:
        return <ChangePassword setChangePassword={setChangePassword} handleSubmitPassword={handleSubmitPassword} />
      case 2:
        return <MyWallet options={options}/>
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
            return <div key={index} onClick={() =>{
              if(item.id!=4){
                setScreenState(item.id);
              }
              else navigate('/login')
            }}>
              <div className='settings-option-container'>
                <div className={`settings-option ${item.id === screenState && "active-setting"}`}
                >
                  {item.value}
                </div>
                {item.id === screenState && <img src={require('../../icons/chevron-right.png')} />}
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