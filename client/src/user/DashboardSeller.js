import { Fragment } from "react";
import ConnectNav from "../components/ConnectNav";
import DashboardNav from "../components/DashboardNav";

const DashboardSeller = () => {
    return (
        <Fragment>
            <ConnectNav />

            <DashboardNav />
            <div>
                <p>Show all hotels user has hosted</p>
            </div>
        </Fragment>
    );
};

export default DashboardSeller;
