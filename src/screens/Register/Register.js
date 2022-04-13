import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.scss';
import { TextInput } from '../../components/TextInput/Textinput';
import { Checkbox } from '../../components/Checkbox/Checkbox';
import Background from '../../images/background.jpeg';

const Register = () => {

  const [data, setData] = useState({
    email: '',
    password: '',
    confirm: '',
    accept_1:false,
    accept_2:false
  })

  const myStyle = {
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  return (
      <div className='main-register' style={myStyle}>
        <div className='main-containers'>
        <div className='left'>
          <div className='header-text'>Create an account</div>
          <div className="inputs-container">
            <div className='input'>
              <div className='input-label'>
                Email*
              </div>
              <TextInput onChange={(e) => setData({ ...data, email: e.target.value })} />
            </div>
            <div className='input'>
              <div className='input-label'>
                Password*
              </div>
              <TextInput hideText onChange={(e) => setData({ ...data, password: e.target.value })} />
            </div>
            <div className='input'>
              <div className='input-label'>
                Confirm Password*
              </div>
              <TextInput hideText onChange={(e) => setData({ ...data, confirm: e.target.value })} />
            </div>
            <Checkbox right={<div className='checkbox-text'>Accept Terms and Conditions</div>} value={data.accept_1} onChange={(e)=>setData({...data,accept_1:e.target.checked})}/>  
            <Checkbox right={<div className='checkbox-text'>I’m 18 years old or older</div>} 
            value={data.accept_2} onChange={(e)=>setData({...data,accept_2:e.target.checked})}/>  
            <div className='register-button'>
              <div className='register-button-text'>
                Create Account
              </div>
            </div>
          </div>
        </div>

        <div className='right'>
          <div className='header-text'>Creating an account with Panda Lotto</div>
          <div className='text'>You need in account to be able to buy a ticket
            and play with Panda Lotto.</div>
          <div className='text'>
            After registering, we will send your User Id by email.
          </div>
          <div className='text'>
            When logging in, make sure to use the User Id sent by email, together with the Password registered here. Please keep them in a safe place.
          </div>
          <div className='text'>

            The email address you enter here is only used for verification and cannot be used for signing in or recovery.
          </div>
          <div className='sign-in-button'>
            <Link to="/login" className="sign-in-button-text-1">
              Already have an account ? <div className="sign-in-button-text-2"> Sign in!</div>
            </Link>
          </div>
        </div>
        </div>
      </div>
  )
}

export default Register