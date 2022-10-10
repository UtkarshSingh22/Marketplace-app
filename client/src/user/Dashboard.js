import { Fragment } from "react";
import ConnectNav from "../components/ConnectNav";
import DashboardNav from "../components/DashboardNav";

const Dashboard = () => {
    return (
        <Fragment>
            <ConnectNav />

            <DashboardNav />
            <div>
                <p>Show all bookings and a button to browse hotels</p>
            </div>
        </Fragment>
    );
};

export default Dashboard;
