import { Fragment } from "react";
import ConnectNav from "../components/ConnectNav";
import DashboardNav from "../components/DashboardNav";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const DashboardSeller = () => {
    const { auth } = useSelector((state) => ({ ...state }));

    const connected = () => (
        <Fragment>
            <div>
                <h2>Your Hotels</h2>
            </div>
            <div>
                <Link to="/hotels/new">+ Add New</Link>
            </div>
        </Fragment>
    );

    const notConnected = () => (
        <Fragment>
            <div>
                <h2>Connect with stripe</h2>
            </div>
            <h4>Setup payouts to post hotel rooms</h4>
            <p>
                MERN partners with stripe to transfer earnings to your bank
                account
            </p>
            <button>Setup Payouts</button>
            <p>
                You'll be redirected to Stripe to complete the onboarding
                process.
            </p>
        </Fragment>
    );

    return (
        <Fragment>
            <ConnectNav />

            <DashboardNav />
            {auth &&
            auth.user &&
            auth.user.stripe_seller &&
            auth.user.stripe_seller.charges_enabled
                ? connected()
                : notConnected()}
        </Fragment>
    );
};

export default DashboardSeller;
