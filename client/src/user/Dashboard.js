import { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import ConnectNav from "../components/ConnectNav";
import DashboardNav from "../components/DashboardNav";
import { toast } from "react-toastify";

const Dashboard = () => {
    useEffect(() => {
        const paymentSuccessNoti = window.localStorage.getItem("payment");
        if (paymentSuccessNoti === "true") {
            window.localStorage.removeItem("payment");
            toast.success(
                "Your payment is processed and the booking is complete."
            );
        }
    }, []);
    return (
        <Fragment>
            <ConnectNav />

            <DashboardNav />
            <div>
                <h2>Your Bookings</h2>
            </div>
            <div>
                <Link to="/">Browse Hotels</Link>
            </div>
        </Fragment>
    );
};

export default Dashboard;
