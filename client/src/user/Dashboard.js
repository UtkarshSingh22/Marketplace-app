import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ConnectNav from "../components/ConnectNav";
import DashboardNav from "../components/DashboardNav";
import { toast } from "react-toastify";
import { userHotelBookings } from "../actions/hotel";
import { useSelector } from "react-redux";
import BookingCard from "../components/BookingCard";

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
            <div>
                {bookings.map((booking) => {
                    return (
                        <BookingCard
                            key={booking._id}
                            hotel={booking.hotelId}
                            user={booking.userId}
                            id={booking._id}
                        />
                    );
                })}
            </div>
        </Fragment>
    );
};

export default Dashboard;
