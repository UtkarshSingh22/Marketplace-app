import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/slices/auth";
import Logo from "../images/windLogo.jpg";
import styles from "./Navigation.module.css";
import { useState } from "react";
import { X, List } from "phosphor-react";

const Navigation = () => {
    const loggedInUser = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [navOpen, setNavOpen] = useState(false);

    const logoutHandler = () => {
        dispatch(authActions.logout());
        window.localStorage.removeItem("auth");
        navigate("/login");
    };

    const closeNav = () => {
        navOpen(false);
    };

    const toggleMenu = () => {
        setNavOpen((prevState) => !prevState);
    };

    const active = window.location.pathname;

    return (
        <nav className={styles.nav}>
            <div className={styles.navFirst}>
                <div className={styles.logoTop}>
                    <h1>H</h1>
                    <img
                        src={Logo}
                        className={styles.logo}
                        alt="hotelswind logo"
                    />
                    <h1>TELSWIND</h1>
                </div>
                <div className={styles.logoBottom}>BOOK YOUR STAYS EASILY</div>
            </div>
            <div className={styles.navSec}>
                <Link
                    to="/"
                    className={`${styles.home} ${
                        active === "/" && styles.active
                    }`}
                >
                    Home
                </Link>

                {loggedInUser && (
                    <Link
                        to="/dashboard"
                        className={`${styles.dashboard} ${
                            active === "/dashboard" && styles.active
                        }`}
                    >
                        Dashboard
                    </Link>
                )}

                {!loggedInUser && (
                    <Link
                        to="/login"
                        className={`${styles.login} ${
                            active === "/login" && styles.active
                        }`}
                    >
                        Login
                    </Link>
                )}
                {!loggedInUser && (
                    <Link
                        to="/register"
                        className={`${styles.register} ${
                            active === "/register" && styles.active
                        }`}
                    >
                        Register
                    </Link>
                )}
                {loggedInUser && (
                    <p onClick={logoutHandler} className={styles.logout}>
                        Logout
                    </p>
                )}
            </div>
            {navOpen && (
                <div className={styles.mobNav}>
                    <Link to="/" className={styles.home} onClick={closeNav}>
                        Home
                    </Link>

                    {loggedInUser && (
                        <Link
                            to="/dashboard"
                            className={styles.dashboard}
                            onClick={closeNav}
                        >
                            Dashboard
                        </Link>
                    )}

                    {!loggedInUser && (
                        <Link
                            to="/login"
                            className={styles.login}
                            onClick={closeNav}
                        >
                            Login
                        </Link>
                    )}
                    {!loggedInUser && (
                        <Link
                            to="/register"
                            className={styles.registerMob}
                            onClick={closeNav}
                        >
                            Register
                        </Link>
                    )}
                    {loggedInUser && (
                        <p onClick={logoutHandler} className={styles.logout}>
                            Logout
                        </p>
                    )}
                </div>
            )}
            <div className={styles.options}>
                {!navOpen && (
                    <List
                        size={32}
                        className={styles.menu}
                        onClick={toggleMenu}
                    />
                )}
                {navOpen && (
                    <X size={32} className={styles.menu} onClick={toggleMenu} />
                )}
            </div>
        </nav>
    );
};

export default Navigation;
