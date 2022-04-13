import Home from '../screens/Home/Home'
import Login from '../screens/Login/Login'
import ProtectedPath from '../screens/ProtectedPath/ProtectedPath'
import Register from '../screens/Register/Register'

export const normalRoutes = [
    {   
        exact:true,
        path:"/",
        component:<Home/>,
        header:true
    },
    {   
        exact:false,
        path:"/login",
        component:<Login/>,
        header:false
    },
    {   
        exact:false,
        path:"/register",
        component:<Register/>,
        header:false
    },
]

export const loggedInRoutes = [
    {   
        exact:false,
        path:"/protected",
        component:<ProtectedPath/>,
        header:true
    },
]