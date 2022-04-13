import React, { useState } from 'react';
import { MainContext } from './utils/MainContext';
import Header from './components/Header/Header';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { loggedInRoutes, normalRoutes } from './utils/Routes';
import Home from './screens/Home/Home';

function App() {
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
