import { Fragment } from "react";
import DashboardNav from "../components/DashboardNav";

const Dashboard = () => {
    return (
        <Fragment>
            <h1>Dashboard</h1>

            <DashboardNav />
            <div>
                <p>Show all bookings and a button to browse hotels</p>
            </div>
        </Fragment>
    );
};

export default Dashboard;
