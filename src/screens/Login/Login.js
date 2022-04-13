import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Checkbox } from '../../components/Checkbox/Checkbox';
import { TextInput } from '../../components/TextInput/Textinput';
import './Login.scss';

const Login = () => {

  const [data, setData] = useState({
    email: '',
    password: '',
    remember_me: '',
  })

  return (
    <div className='main'>
      <div className='sign-in-container'>
        <div className='sign-in-header'>
          Sign in
        </div>
        <div className='inputs-container'>
          <div className='input'>
            <div className='input-label'>
              User ID*
            </div>
            <TextInput value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
          </div>
          <div className='input'>
            <div className='input-label'>
              Password*
            </div>
            <TextInput value={data.password} hideText onChange={(e) => setData({ ...data, password: e.target.value })} />
          </div>
        </div>

        <div className='forgot-password-container'>
          <div>
            <Checkbox right={<div className='checkbox-text'>Remember me</div>} value={data.remember_me} onChange={(e) => setData({ ...data, remember_me: e.target.checked })} />
          </div>
          <Link to="/" className="forgot-password-link">
            Forgot your password ?
          </Link>
        </div>


        <div className='register-button'>
          <div className='register-button-text'>
            Sign in
          </div>
        </div>
      </div>

      <div className='social-media-container'>
        <div className='social-button' style={{backgroundColor:'#505eba'}}>
          <div className='social-button-text'>
            Sign in
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login