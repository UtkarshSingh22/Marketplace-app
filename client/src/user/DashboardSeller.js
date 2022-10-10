import { Fragment } from "react";
import DashboardNav from "../components/DashboardNav";

const DashboardSeller = () => {
    return (
        <Fragment>
            <h1>Dashboard</h1>

            <DashboardNav />
            <div>
                <p>Show all hotels user has hosted</p>
            </div>
        </Fragment>
    );
};

export default DashboardSeller;
