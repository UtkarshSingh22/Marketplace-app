import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getBalance } from "../actions/payments";
import { toast } from "react-toastify";
import { sellerHotels } from "../actions/hotel";
import styles from "./ConnectNav.module.css";
import LoadingSpinner from "./modals/LoadingSpinner";

const ConnectNav = () => {
    const { auth } = useSelector((state) => ({ ...state }));
    const { user } = auth;

    const [balance, setBalance] = useState("");
    const [isSeller, setIsSeller] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        loadBalance();
    }, []);

    useEffect(() => {
        loadSellerHotels();
    }, []);

    const loadSellerHotels = async () => {
        setIsLoading(true);
        let { data } = await sellerHotels(auth.token, auth.user._id);

        if (data.length > 0) {
            setIsSeller(true);
        }
        setIsLoading(false);
    };

    const loadBalance = async () => {
        setIsLoading(true);
        try {
            const result = await getBalance(auth.token, user._id);
            setBalance(result.data.balance.balance);
        } catch (err) {
            toast.error("Unable to fetch your balance");
        }
        setIsLoading(false);
    };

    return (
        <section className={styles.main}>
            {isLoading && <LoadingSpinner />}
            <div className={styles.name}>
                <p>{user.name[0]}</p>
                <h2>{user.name}</h2>
            </div>

            {auth && auth.user && (
                <div className={styles.balance}>
                    {isSeller && (
                        <div>
                            Balance: <p>₹{balance}</p>
                        </div>
                    )}
                    {!isSeller && <div>The offers are LIVE. Hurry!</div>}
                </div>
            )}
        </section>
    );
};

export default ConnectNav;
