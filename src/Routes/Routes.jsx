import { createBrowserRouter } from "react-router";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import ContactUs from "../pages/ContactUs/ContactUs";
import Dashboard from "../Layout/Dashboard";
import WorkSheet from "../pages/Dashboard/Employee/WorkSheet";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/contactUs',
                element:<ContactUs></ContactUs>
            },
        ]
    },
    {
        path:'dashboard',
        element:<Dashboard></Dashboard>,
        children:[
            {
                path:'work-sheet',
                element:<WorkSheet></WorkSheet>
            }
        ]
    }
])
