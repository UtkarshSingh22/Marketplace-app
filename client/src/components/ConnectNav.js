import { useSelector } from "react-redux";
import { Card, Avatar } from "antd";
import Title from "antd/lib/skeleton/Title";

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
        </div>
    );
};

export default ConnectNav;
