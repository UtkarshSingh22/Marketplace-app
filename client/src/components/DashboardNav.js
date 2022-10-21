import { Link } from "react-router-dom";
import styles from "./DashboardNav.module.css";

const DashboardNav = () => {
    const active = window.location.pathname;

    return (
        <ul className={styles.main}>
            <li>
                <Link
                    to="/dashboard"
                    className={`${active === "/dashboard" && styles.active}`}
                >
                    Your Bookings
                </Link>
            </li>
            <li>
                <Link
                    to="/dashboard/seller"
                    className={`${
                        active === "/dashboard/seller" && styles.active
                    }`}
                >
                    Your Hotels
                </Link>
            </li>
        </ul>
    );
};

export default DashboardNav;
