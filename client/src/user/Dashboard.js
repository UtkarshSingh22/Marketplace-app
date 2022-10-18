import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ConnectNav from "../components/ConnectNav";
import DashboardNav from "../components/DashboardNav";
import { toast } from "react-toastify";
import { userHotelBookings } from "../actions/hotel";
import { useSelector } from "react-redux";

const Dashboard = () => {
    const { auth } = useSelector((state) => ({ ...state }));

    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const paymentSuccessNoti = window.localStorage.getItem("payment");
        if (paymentSuccessNoti === "true") {
            window.localStorage.removeItem("payment");
            toast.success(
                "Your payment is processed and the booking is complete."
            );
        }
        loadUserBookings();
    }, []);

    const loadUserBookings = async () => {
        const res = await userHotelBookings(auth.token, auth.user._id);
        setBookings(res.data);
    };

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
            <div>{JSON.stringify(bookings, null, 4)}</div>
        </Fragment>
    );
};

export default Dashboard;
