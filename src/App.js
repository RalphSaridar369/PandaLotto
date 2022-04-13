import React, { useEffect, useState } from 'react';
import { MainContext } from './utils/MainContext';
import Header from './components/Header/Header';
import { Routes, Route, Navigate, BrowserRouter as Router } from "react-router-dom";
import { loggedInRoutes, normalRoutes } from './utils/Routes';
import { getItem } from './utils/LocalStorage';
import ProtectedRoute from './utils/ProtectedRoute';

function App() {

  useEffect(() => {
    setLoggedIn(getItem('token') ? true : false)
  }, [])

  const [loggedIn, setLoggedIn] = useState(false);

  const returnNormalRoutes = () => {
    return normalRoutes.map((item, index) => {
      let element = item.header?<><Header/>{item.element}</>:item.component;
    return <Route key={index} path={item.path} exact={item.exact} element={element} />
    })
  }

  const returnLoggedRoutes = () => {
    return loggedInRoutes.map((item, index) => <Route key={index} path={item.path} exact={item.exact} element={item.component} />)
  }

  return (
    <Router>
      <MainContext.Provider value={{ loggedIn, setLogIn: (val) => setLoggedIn(val) }} >
        <Routes>
          {returnNormalRoutes()}
          <Route element={<ProtectedRoute />} >
            {returnLoggedRoutes()}
          </Route>
          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Routes>
      </MainContext.Provider>
    </Router>
  );
}

export default App;
