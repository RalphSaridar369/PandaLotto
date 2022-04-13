import React, { useState } from 'react';
import './Register.scss';
import { TextInput } from '../../components/TextInput/Textinput';

const Register = () => {

  const [data,setData] = useState({
    email:'',
    password:'',
    confirm:'',
  })

  return (
    <div>
      <div className='main'>
        <div className='left'>
          <div className='header-text'>Create an account</div>
          <div class="inputs-container">
            <div className='input'>
              <div className='input-label'>
                Email*
              </div>
              <TextInput onChange={(e)=>setData({...data,email:e.target.value})}/>
            </div>
            <div className='input'>
              <div className='input-label'>
                Password*
              </div>
              <TextInput password onChange={(e)=>setData({...data,password:e.target.value})}/>
            </div>
            <div className='input'>
              <div className='input-label'>
                Confirm Password*
              </div>
              <TextInput password onChange={(e)=>setData({...data,confirm:e.target.value})}/>
            </div>
          </div>
        </div>
      </div>
      <div className='right'>

      </div>
    </div>
  )
}

export default Register