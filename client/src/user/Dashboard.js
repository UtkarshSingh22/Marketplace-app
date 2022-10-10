import { Fragment } from "react";
import { Link } from "react-router-dom";
import ConnectNav from "../components/ConnectNav";
import DashboardNav from "../components/DashboardNav";

const Dashboard = () => {
    return (
        <Fragment>
            <ConnectNav />

            <DashboardNav />
            <div>
                <h2>Your Bookings</h2>
            </div>
            <div>
                <Link to='/'>Browse Hotels</Link>
            </div>
        </Fragment>
    );
};

export default Dashboard;
