import React, { useEffect, useState } from 'react';
import { MainContext } from './utils/MainContext';
import Header from './components/Header/Header';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { loggedInRoutes, normalRoutes } from './utils/Routes';
import { getItem } from './utils/LocalStorage';

function App() {

  useEffect(()=>{
    setLoggedIn(getItem('token')?true:false)
  },[])

  const [loggedIn, setLoggedIn] = useState(false);

  const returnNormalRoutes = () => {
    return normalRoutes.map((item, index) => <Route key={index} path={item.path} exact={item.exact} element={item.component} />)
  }

  const returnLoggedRoutes = () => {
    return loggedInRoutes.map((item, index) => <Route key={index} path={item.path} exact={item.exact} element={item.component} />)
  }

  return (
    <Router>
      <MainContext.Provider value={{ loggedIn, setLogIn: (val) => setLoggedIn(val) }} >
        <div>
          <Header />
        </div>

        <Routes>
          {returnNormalRoutes()}
          {loggedIn && returnLoggedRoutes()}
        </Routes>
      </MainContext.Provider>
    </Router>
  );
}

export default App;
