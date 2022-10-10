import { Link } from "react-router-dom";

const DashboardNav = () => {
    const active = window.location.pathname;

    return (
        <ul>
            <li>
                <Link
                    to="/dashboard"
                    className={`${active === "/dashboard" && "active"}`}
                >
                    Your Bookings
                </Link>
            </li>
            <li>
                <Link
                    to="/dashboard/seller"
                    className={`${active === "/dashboard/seller" && "active"}`}
                >
                    Your Hotels
                </Link>
            </li>
        </ul>
    );
};

export default DashboardNav;
