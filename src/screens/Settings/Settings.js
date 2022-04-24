import React, { useState } from 'react';
import { TextInput } from '../../components/TextInput/Textinput';
import './Settings.scss';

const Settings = () => {
  const [screenState, setScreenState] = useState(1);

  let screens = [
    { id: 1, value: 'Edit Account' },
    { id: 2, value: 'Wallet' },
    { id: 3, value: 'My Tickets' },
    { id: 4, value: 'Logout' },
  ]

  return (
    <div className='main-settings'>

      <h2 className='header-settings'>
        My Account
      </h2>
      <div className='container-settings'>
        <div className='container-settings-left'>
          {screens.map((item, index) => {
            return <div>
              <div className={`settings-option ${item.id === screenState && "active-setting"}`}
                onClick={() => setScreenState(item.id)}>
                {item.value}
              </div>
              {index != 3 && <hr></hr>}
            </div>
          })}
        </div>
        <div className='container-settings-right'>
          <div className='settings-input-label'>Email</div>
          <TextInput className="settings-right-inputs" />
          <div className='settings-input-label'>Change Password</div>
          <div className='settings-password-container'>
            <div className='settings-small-label-container'>
              <div className='settings-small-label'>
                Current password
              </div>
              <TextInput className="settings-right-inputs" />
            </div>
            <div className='settings-right-seperator'></div>
            <div className='settings-small-label-container'>
              <div className='settings-small-label'>
                New password
              </div>
              <TextInput className="settings-right-inputs" />
            </div>
          </div>
          <div className="update-password-button-container">
            <div className='update-password-button'>
              <div className="update-password-text">Update</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings