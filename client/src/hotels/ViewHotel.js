import { read } from "../actions/hotel";
import { useNavigate, useParams } from "react-router-dom";
import { Fragment, useState, useEffect } from "react";
import { differenceInDates } from "../utils/differnceInDates";
import { useSelector } from "react-redux";

const ViewHotel = () => {
    const params = useParams();
    const [hotel, setHotel] = useState({});
    const [image, setImage] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        loadSellerHotel();
    }, []);

    const { auth } = useSelector((state) => {
        return state;
    });

    const loadSellerHotel = async () => {
        let res = await read(params.hotelId);
        setHotel(res.data);
        setImage(`${process.env.REACT_APP_API}/hotel/image/${params.hotelId}`);
    };

    let from = new Date(hotel.from);
    let date = from.toLocaleDateString().split("/");
    let fromDate = `${date[1]}-${date[0]}-${date[2]}`;

    const clickHandler = (event) => {
        if (!auth) {
            navigate("/login");
        } else {
        }
    };

    return (
        <Fragment>
            <h2>{hotel.title}</h2>
            <img src={image} alt={hotel.title} />
            <br />
            <b>{hotel.content}</b>
            <p>{hotel.price}</p>
            <span>
                For {differenceInDates(hotel.from, hotel.to)}{" "}
                {differenceInDates(hotel.from, hotel.to) <= 1
                    ? " day"
                    : " days"}
            </span>
            <p>Available from {fromDate}</p>
            <p>Posted by {hotel.postedBy && hotel.postedBy.name}</p>
            <button onClick={clickHandler}>
                {auth && auth.token ? "Book Now" : "Login to Book"}
            </button>
        </Fragment>
    );
};

export default ViewHotel;
