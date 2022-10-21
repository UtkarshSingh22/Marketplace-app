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
import { Bank } from "phosphor-react";
import Button from "../components/Button";

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
            <section className={styles.content}>
                <h2>Connect your Bank Account</h2>
                <Bank size={32} className={styles.icon} />
                <h3>Setup payouts to post hotel rooms</h3>
                <p className={styles.para}>
                    Hotelswind with Banks to transfer earnings to your bank
                    account
                </p>
                <Button onClick={payoutClickHandler}>Setup Payouts</Button>
                <p className={styles.small}>
                    You'll be redirected to a form to complete the onboarding
                    process.
                </p>
                <p className={styles.small2}>It is a dummy form.</p>
            </section>
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
            <Footer className={styles.footer} />
        </Fragment>
    );
};

export default DashboardSeller;
