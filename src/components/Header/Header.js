import React, { useContext } from 'react'
import { clear, getItem, removeItem, setItem } from '../../utils/LocalStorage';
import { MainContext } from '../../utils/MainContext';
import './Header.scss';

const Header = () => {
  const {loggedIn, setLogIn} = useContext(MainContext)
  const handleLogin = () =>{
      if(loggedIn){
          clear();
      }
      else{
        setItem('token',123);
      }
    setLogIn(loggedIn?false:true)
  }
  return (
    <div className='main__header'>
        <div>
            <p>PandaLotto</p>
        </div>
        <div>
            <p onClick={handleLogin}>{loggedIn?"Logout":"Login"}</p>
        </div>
    </div>
  )
}

export default Header