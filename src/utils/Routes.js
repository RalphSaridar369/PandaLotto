import Home from "../screens/Home/Home";
import Login from "../screens/Login/Login";
import ProtectedPath from "../screens/ProtectedPath/ProtectedPath";
import Register from "../screens/Register/Register";
import Step1 from "../screens/Play/Step1";
import Success from "../screens/Payment/Success/Success";
import Failed from "../screens/Payment/Failed/Failed";
import Settings from "../screens/Settings/Settings";
import Reachus from "../screens/ReachUs/Reachus";
import Previous from "../screens/Previous/Previous";

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
    path: "/step1",
    component: <Step1 />,
    header: false,
  },
  {
    exact: false,
    path: "/success",
    component: <Success />,
    header: false,
  },
  {
    exact: false,
    path: "/failed",
    component: <Failed />,
  },
  {
    path: "/settings",
    component: <Settings />,
    header: false,
  },
  {
    path: "/reach-us",
    component: <Reachus />,
    header: false,
  },
  {
    path: "/previous",
    component: <Previous />,
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
