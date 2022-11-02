import Main from "../../Layout/Main";
import Checkout from "../../Page/Checkout/Checkout";
import Home from "../../Page/Home/Home/Home";

import Login from "../../Page/Login/Login";
import Orders from "../../Page/Orders/Orders";
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
            },
            {
                path:'/checkout/:id',
                element:<Checkout></Checkout>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path:'/orders',
                element:<Orders></Orders>
            }
        ]
    }
])

export default router;