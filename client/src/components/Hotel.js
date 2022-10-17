import { Fragment } from "react";
import { useNavigate, Link } from "react-router-dom";
import { differenceInDates } from "../utils/differnceInDates";

const Hotel = ({
    hotel,
    deleteHotelHandler = (f) => f,
    owner = false,
    showViewMoreButton = true,
}) => {
    const navigate = useNavigate();

    return (
        <div>
            <div>
                {hotel.imageContentType ? (
                    <img
                        src={`${process.env.REACT_APP_API}/hotel/image/${hotel._id}`}
                        alt="hotel image"
                    />
                ) : (
                    <img
                        src="https://via.placeholder.com/300x300.png?text=MERN+Booking"
                        alt="hotel image"
                    />
                )}
            </div>
            <div>
                <h3>{hotel.title}</h3>
                <p>₹{hotel.price}/night</p>
                <p>{`${hotel.content.substring(0, 200)}...`}</p>
                <p>{hotel.location}</p>

                <p>
                    For {differenceInDates(hotel.from, hotel.to)}{" "}
                    {differenceInDates(hotel.from, hotel.to) <= 1
                        ? " day"
                        : " days"}
                </p>
                <p>
                    {hotel.bed} {hotel.bed <= 1 ? " bed" : " beds"}
                </p>
                <p>
                    Available from {new Date(hotel.from).toLocaleDateString()}
                </p>
            </div>
            <div>
                {showViewMoreButton && (
                    <button
                        onClick={() => {
                            navigate(`/hotel/${hotel._id}`);
                        }}
                    >
                        Show more
                    </button>
                )}
                {owner && (
                    <Fragment>
                        <Link to={`/hotel/edit/${hotel._id}`}>Edit</Link>
                        <button onClick={() => deleteHotelHandler(hotel._id)}>
                            Delete
                        </button>
                    </Fragment>
                )}
            </div>
        </div>
    );
};

export default Hotel;
