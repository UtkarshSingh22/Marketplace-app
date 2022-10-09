import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Fragment } from "react";
import { authActions } from "../store/slices/auth";

const Navigation = () => {
    const loggedInUser = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = () => {
        dispatch(authActions.logout());
        window.localStorage.removeItem("auth");
        navigate("/login");
    };

    return (
        <div>
            <Link to="/">Home</Link>
            {!loggedInUser && (
                <Fragment>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </Fragment>
            )}
            {loggedInUser && (
                <p onClick={logoutHandler}>
                    Logout
                </p>
            )}
        </div>
    );
};

export default Navigation;
