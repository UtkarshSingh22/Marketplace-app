import { useSelector } from "react-redux";
import { Card, Avatar } from "antd";
import { Fragment } from "react";

const { Meta } = Card;

const ConnectNav = () => {
    const { auth } = useSelector((state) => ({ ...state }));
    const { user } = auth;
    return (
        <div>
            <Card>
                <Meta
                    avatar={<Avatar>{user.name[0]}</Avatar>}
                    title={user.name}
                />
            </Card>
            {auth &&
                auth.user &&
                auth.user.stripe_seller &&
                auth.user.stripe_seller.charges_enabled && (
                    <Fragment>
                        <div>Pending balance</div>
                        <div>Payout settings</div>
                    </Fragment>
                )}
        </div>
    );
};

export default ConnectNav;
