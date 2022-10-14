import { useSelector } from "react-redux";
import { Fragment } from "react";

const ConnectNav = () => {
    const { auth } = useSelector((state) => ({ ...state }));
    const { user } = auth;
    return (
        <div>
            <div>
                <div>{user.name[0]}</div>
                <h2>{user.name}</h2>
            </div>
            {auth && auth.user && (
                <Fragment>
                    <div>Pending balance</div>
                    <div>Payout settings</div>
                </Fragment>
            )}
        </div>
    );
};

export default ConnectNav;
