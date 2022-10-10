import { Link } from "react-router-dom";

const DashboardNav = () => {
    return (
        <ul>
            <li>
                <Link to="/dashboard">Your Bookings</Link>
            </li>
            <li>
                <Link to="/dashboard/seller">Your Hotels</Link>
            </li>
        </ul>
    );
};

export default DashboardNav;
