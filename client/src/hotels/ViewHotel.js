import { isAlreadyBooked, read } from "../actions/hotel";
import { paymentSuccess } from "../actions/payments";
import { useNavigate, useParams } from "react-router-dom";
import { Fragment, useState, useEffect } from "react";
import { differenceInDates } from "../utils/differnceInDates";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Button from "../components/Button";
import styles from "./ViewHotel.module.css";

const ViewHotel = () => {
    const params = useParams();
    const [hotel, setHotel] = useState({});
    const [image, setImage] = useState("");
    const [alreadyBooked, setAlreadyBooked] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        loadSellerHotel();
    }, []);

    const { auth } = useSelector((state) => ({ ...state }));

    useEffect(() => {
        if (auth && auth.token) {
            isAlreadyBooked(auth.token, params.hotelId, auth.user._id).then(
                (res) => {
                    if (res.data.ok) {
                        setAlreadyBooked(true);
                    }
                }
            );
        }
    }, []);

    const loadSellerHotel = async () => {
        let res = await read(params.hotelId);
        setHotel(res.data);
        setImage(`${process.env.REACT_APP_API}/hotel/image/${params.hotelId}`);
    };

    const diffDays = `${differenceInDates(hotel.from, hotel.to)}${
        differenceInDates(hotel.from, hotel.to) <= 1 ? " day" : " days"
    }`;

    let from = new Date(hotel.from);
    let date = from.toLocaleDateString().split("/");
    let fromDate = `${date[1]}-${date[0]}-${date[2]}`;

    const message = `Are you sure to book rooms in ${hotel.title}?`;

    const clickHandler = async () => {
        try {
            if (!auth) {
                navigate("/login");
            } else {
                if (hotel.postedBy._id === auth.user._id) {
                    toast.warn(
                        "This hotel was posted by you. It can't be booked."
                    );
                } else if (!auth.user.isConnectedForPayouts) {
                    window.localStorage.setItem("from", "booking");
                    navigate("/connect-payouts");
                } else {
                    if (window.confirm(message)) {
                        await paymentSuccess(
                            auth.token,
                            params.hotelId,
                            auth.user._id,
                            hotel.postedBy._id,
                            hotel.price
                        );

                        navigate("/hotel/payment-success");
                    } else {
                        toast("Transaction cancelled.");
                    }
                }
            }
        } catch (error) {
            toast.error("Transaction failed, Please try again.");
        }
    };

    return (
        <section className={styles.main}>
            <div className={styles.card}>
                <header>
                    <h2>{hotel.title}</h2>
                </header>
                <article>
                    <img src={image} alt={hotel.title} className={styles.img} />
                    <div className={styles.content}>
                        <div className={styles.text}>
                            <p className={styles.price}>₹{hotel.price}/night</p>
                            <p className={styles.location}>{hotel.location}</p>
                            <p>{hotel.content}</p>
                            <p>For {diffDays}</p>
                            <p>Available from {fromDate}</p>
                            <p>
                                Posted by{" "}
                                {hotel.postedBy && hotel.postedBy.name}
                            </p>
                        </div>
                        <Button onClick={clickHandler} disabled={alreadyBooked}>
                            {alreadyBooked
                                ? "Already Booked"
                                : auth && auth.token
                                ? "Book Now"
                                : "Login to Book"}
                        </Button>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default ViewHotel;
