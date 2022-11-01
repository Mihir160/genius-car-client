import Main from "../../Layout/Main";
import Home from "../../Page/Home/Home.js/Home";
import Login from "../../Page/Login/Login";
import Signup from "../../Page/Signup/Signup";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            }
        ]
    }
])

export default router;