import React, { useEffect, useState } from "react";
import { MainContext } from "./utils/MainContext";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/footer";

import {
  Routes,
  Route,
  Navigate,
  BrowserRouter as Router,
} from "react-router-dom";
import { loggedInRoutes, normalRoutes } from "./utils/Routes";
import { getItem } from "./utils/LocalStorage";
import ProtectedRoute from "./utils/ProtectedRoute";
import "./App.scss";
import Stepper from "./screens/Play/Stepper/Stepper";

function App() {
  useEffect(() => {
    setLoggedIn(getItem("token") ? true : false);
  }, []);

  const [loggedIn, setLoggedIn] = useState(false);

  const returnNormalRoutes = () => {
    return normalRoutes.map((item, index) => {
      // let component = <><Header type=""/>{item.component}</>
      return (
        <Route
          key={index}
          path={item.path}
          exact={item.exact}
          element={item.component}
        />
      );
    });
  };

  const returnLoggedRoutes = () => {
    return loggedInRoutes.map((item, index) => {
      // let component = <><Header type=""/>{item.component}</>
      return (
        <Route
          key={index}
          path={item.path}
          exact={item.exact}
          element={item.component}
        />
      );
    });
  };

  return (
    // <div className='app-container'>
    //   test
    // </div>
    <Router>
      <MainContext.Provider
        value={{ loggedIn, setLogIn: (val) => setLoggedIn(val) }}
      >
        <div className="app-container">
          <Header />
          <Routes>
            {returnNormalRoutes()}
            <Route element={<ProtectedRoute />}>{returnLoggedRoutes()}</Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          {/* <Footer /> */}
        </div>
      </MainContext.Provider>
    </Router>
  );
}

export default App;
