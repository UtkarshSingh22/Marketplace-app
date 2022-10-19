import { read } from "../actions/hotel";
import { paymentSuccess } from "../actions/payments";
import { useNavigate, useParams } from "react-router-dom";
import { Fragment, useState, useEffect } from "react";
import { differenceInDates } from "../utils/differnceInDates";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const ViewHotel = () => {
    const params = useParams();
    const [hotel, setHotel] = useState({});
    const [image, setImage] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        loadSellerHotel();
    }, []);

    const { auth } = useSelector((state) => ({ ...state }));

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
        <Fragment>
            <h2>{hotel.title}</h2>
            <img src={image} alt={hotel.title} />
            <br />
            <b>{hotel.content}</b>
            <p>{hotel.price}</p>
            <span>For {diffDays}</span>
            <p>Available from {fromDate}</p>
            <p>Posted by {hotel.postedBy && hotel.postedBy.name}</p>
            <button onClick={clickHandler}>
                {auth && auth.token ? "Book Now" : "Login to Book"}
            </button>
        </Fragment>
    );
};

export default ViewHotel;
