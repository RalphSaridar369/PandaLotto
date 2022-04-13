import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Checkbox } from '../../components/Checkbox/Checkbox';
import { TextInput } from '../../components/TextInput/Textinput';
import './Login.scss';
import Background from '../../images/background.jpeg';
import { formValidator } from '../../utils/FormValidator';
import { setItem } from '../../utils/LocalStorage';

const Login = () => {

  const navigate = useNavigate();
  const [data, setData] = useState({
    userId: '',
    password: '',
    remember_me: '',
  })

  const myStyle = {
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  const handleLogin = () => {
    let { userId, password } = data
    formValidator({ userId, password }, 'login', () => {
      setItem("user-data",{userId,password});
      setItem("token",1231);
      navigate("/");
    })
  }

  return (
    <div className='main-login' style={myStyle}>
      <div className='sign-in-container'>
        <div className='sign-in-header'>
          Sign in
        </div>
        <div className='inputs-container'>
          <div className='input'>
            <div className='input-label'>
              User ID*
            </div>
            <TextInput value={data.userId} onChange={(e) => setData({ ...data, userId: e.target.value })} />
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


        <div className='signin-button' onClick={handleLogin}>
          <div className='signin-button-text'>
            Sign in
          </div>
        </div>



        <div className='social-media-container'>
          <div className='social-button' style={{ backgroundColor: '#505eba', marginRight: '5px' }}>
            <div className='social-button-text'>
              <img src={require("../../icons/facebook.png")} className="social-button-icon" />
              Login with Facebook
            </div>
          </div>
          <div className='social-button' style={{ backgroundColor: '#5fbcdd', marginLeft: '5px' }}>
            <div className='social-button-text'>
              <img src={require("../../icons/twitter.png")} className="social-button-icon" />
              Login with Twitter
            </div>
          </div>
        </div>
      </div>


      <div className='create-button'>
        <Link to="/register" className="create-button-text-1">
          Don't have an account yet ?{'\n'} <div className="create-button-text-2">Create one for free!</div>
        </Link>
      </div>
    </div>
  )
}

export default Login