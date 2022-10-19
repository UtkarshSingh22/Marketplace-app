import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getBalance } from "../actions/payments";
import { toast } from "react-toastify";

const ConnectNav = () => {
    const { auth } = useSelector((state) => ({ ...state }));
    const { user } = auth;

    const [balance, setBalance] = useState("");

    useEffect(() => {
        loadBalance();
    }, []);

    const loadBalance = async () => {
        try {
            const result = await getBalance(auth.token, user._id);
            setBalance(result.data.balance.balance);
        } catch (err) {
            toast.error("Unable to fetch your balance");
        }
    };

    return (
        <div>
            <div>
                <div>{user.name[0]}</div>
                <h2>{user.name}</h2>
            </div>
            {auth && auth.user && (
                <div>
                    <div>Balance: ₹{balance}</div>
                </div>
            )}
        </div>
    );
};

export default ConnectNav;
