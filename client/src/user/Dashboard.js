import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ConnectNav from "../components/ConnectNav";
import DashboardNav from "../components/DashboardNav";
import { toast } from "react-toastify";
import { userHotelBookings } from "../actions/hotel";
import { useSelector } from "react-redux";
import BookingCard from "../components/BookingCard";
import styles from "./Dashboard.module.css";
import Footer from "../components/Footer";
import LoadingSpinner from "../components/modals/LoadingSpinner";

const Dashboard = () => {
    const { auth } = useSelector((state) => ({ ...state }));

    const [bookings, setBookings] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const paymentSuccessNoti = window.localStorage.getItem("payment");
        if (paymentSuccessNoti === "true") {
            window.localStorage.removeItem("payment");
            toast.success(
                "Your payment is processed and the booking is complete."
            );
        }
        loadUserBookings();
        setIsLoading(false);
    }, []);

    const loadUserBookings = async () => {
        try {
            const res = await userHotelBookings(auth.token, auth.user._id);
            setBookings(res.data);
        } catch (error) {
            toast.error("Unable to load bookings, please try again.");
        }
    };

    return (
        <section className={styles.main}>
            {isLoading && <LoadingSpinner />}
            <nav className={styles.dashNav}>
                <ConnectNav />
                <DashboardNav />
            </nav>
            <div className={styles.content}>
                <div className={styles.title}>
                    <Link to="/" className={styles.link}>
                        Browse Hotels
                    </Link>
                    <h2>Your Bookings</h2>
                </div>
                <div className={styles.bookings}>
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
            </div>
            <Footer className={styles.footer} />
        </section>
    );
};

export default Dashboard;
