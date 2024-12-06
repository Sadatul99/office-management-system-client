import { Link, NavLink, Outlet } from "react-router";


const Dashboard = () => {

    const employeeNavOptions = <>
        <li><NavLink to="work-sheet">Work sheet</NavLink></li>
        <li><NavLink to="/payment-history">Payment History</NavLink></li>
    </>

    return (
        <div className="flex">
            <div className="w-64 min-h-screen  bg-gray-800 ">
                <h4 className="text-4xl text-white text-center my-4 font-bold">WorkNest</h4>
                <ul className="menu text-white font-semibold">
                    {employeeNavOptions}
                </ul>
                <hr className="mx-6 text-white" />
                <ul className="menu text-white font-semibold">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contactUs">Contact us</Link></li>
                </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;