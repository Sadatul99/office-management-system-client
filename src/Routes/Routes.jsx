import { createBrowserRouter } from "react-router";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
        ]
    }
])
