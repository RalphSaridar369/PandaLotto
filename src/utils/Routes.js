import Home from '../screens/Home/Home'
import Login from '../screens/Login/Login'
import ProtectedPath from '../screens/ProtectedPath/ProtectedPath'
import Register from '../screens/Register/Register'

export const normalRoutes = [
    {   
        exact:true,
        path:"/",
        component:<Home/>
    },
    {   
        exact:false,
        path:"/login",
        component:<Login/>
    },
    {   
        exact:false,
        path:"/register",
        component:<Register/>
    },
]

export const loggedInRoutes = [
    {   
        exact:false,
        path:"/protected",
        component:<ProtectedPath/>
    },
]