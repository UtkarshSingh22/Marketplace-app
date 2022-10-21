import { Fragment, useEffect, useState } from "react";
import ConnectNav from "../components/ConnectNav";
import DashboardNav from "../components/DashboardNav";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { sellerHotels } from "../actions/hotel";
import Hotel from "../components/Hotel";
import { toast } from "react-toastify";
import styles from "./DashboardSeller.module.css";
import Footer from "../components/Footer";

const DashboardSeller = () => {
    const { auth } = useSelector((state) => ({ ...state }));

    const [hotels, setHotels] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const toastNoti = window.localStorage.getItem("toast");
        const reload = window.localStorage.getItem("reload");

        if (reload) {
            window.localStorage.removeItem("reload");
            window.location.reload();
        }
        if (toastNoti) {
            toast(toastNoti);
            window.localStorage.removeItem("toast");
        }

        loadSellerHotels();
    }, []);

    const loadSellerHotels = async () => {
        let { data } = await sellerHotels(auth.token, auth.user._id);
        setHotels(data);
    };

    const payoutClickHandler = async () => {
        navigate("/connect-payouts");
    };

    const connected = () => (
        <Fragment>
            <div className={styles.title}>
                <Link to="/hotels/new" className={styles.link}>
                    + Add New
                </Link>
                <h2>Your Hotels</h2>
            </div>
            <div className={styles.bookings}>
                {hotels.map((hotel) => {
                    return (
                        <Hotel
                            hotel={hotel}
                            key={hotel._id}
                            showViewMoreButton={false}
                            owner={true}
                        />
                    );
                })}
            </div>
        </Fragment>
    );

    const notConnected = () => (
        <Fragment>
            <div>
                <h2>Connect with stripe</h2>
            </div>
            {/* home icon */}
            <h4>Setup payouts to post hotel rooms</h4>
            <p>
                MERN partners with stripe to transfer earnings to your bank
                account
            </p>
            <button onClick={payoutClickHandler}>Setup Payouts</button>
            <p>
                You'll be redirected to Stripe to complete the onboarding
                process.
            </p>
        </Fragment>
    );

    return (
        <Fragment>
            <section className={styles.main}>
                <nav className={styles.nav}>
                    <ConnectNav />
                    <DashboardNav />
                </nav>

                {auth && auth.user && auth.user.isConnectedForPayouts
                    ? connected()
                    : notConnected()}
            </section>
            <Footer />
        </Fragment>
    );
};

export default DashboardSeller;
