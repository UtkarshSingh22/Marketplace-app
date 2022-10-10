import { Fragment } from "react";
import ConnectNav from "../components/ConnectNav";
import DashboardNav from "../components/DashboardNav";
import { Link } from "react-router-dom";

const DashboardSeller = () => {
    return (
        <Fragment>
            <ConnectNav />

            <DashboardNav />
            <div>
                <h2>Your Hotels</h2>
            </div>
            <div>
                <Link to="/hotels/new">+ Add New</Link>
            </div>
        </Fragment>
    );
};

export default DashboardSeller;
