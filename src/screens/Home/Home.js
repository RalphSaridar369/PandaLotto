import React, { useContext } from 'react'
import { MainContext } from '../../utils/MainContext'

const Home = () => {
  const {loggedIn} = useContext(MainContext)
  return (
    <div>Loggedin: {!loggedIn?"No":"Yes"}</div>
  )
}

export default Home