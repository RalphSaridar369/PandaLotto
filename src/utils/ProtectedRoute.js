import { Navigate, Outlet } from "react-router-dom";
import { getItem } from "./LocalStorage";

const useAuth =()=>{
    return getItem('token')?true:false
}

const ProtectedRoute = () =>{
    const isAuth = useAuth();
    return isAuth ? <Outlet/> : <Navigate to="/login"/>;
}

export default ProtectedRoute;