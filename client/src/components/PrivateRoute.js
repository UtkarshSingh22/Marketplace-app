import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children, redirectTo }) => {
    const authState = useSelector((state) => state.auth);

    return authState && authState.token ? children : <Navigate to={redirectTo}/>;
};

export default PrivateRoute;
