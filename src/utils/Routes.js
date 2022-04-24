import Home from "../screens/Home/Home";
import Login from "../screens/Login/Login";
import ProtectedPath from "../screens/ProtectedPath/ProtectedPath";
import Register from "../screens/Register/Register";
import Play from "../screens/Play/Play";
import Settings from "../screens/Settings/Settings";

export const normalRoutes = [
  {
    exact: true,
    path: "/",
    component: <Home />,
    header: true,
  },
  {
    exact: false,
    path: "/login",
    component: <Login />,
    header: false,
  },
  {
    exact: false,
    path: "/register",
    component: <Register />,
    header: false,
  },
  //this needs to be in the loggednRoutes
  {
    exact: false,
    path: "/play",
    component: <Play />,
    header: false,
  },
  {
    exact: false,
    path: "/settings",
    component: <Settings />,
    header: false,
  },
];

export const loggedInRoutes = [
  {
    exact: false,
    path: "/protected",
    component: <ProtectedPath />,
    header: true,
  },
];
