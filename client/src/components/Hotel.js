import { useNavigate, Link } from "react-router-dom";
import { differenceInDates } from "../utils/differnceInDates";

const Hotel = ({ hotel, onDelete }) => {
    const navigate = useNavigate();

    const deleteHotelHandler = (id) => {
        onDelete(id);
    };

    return (
        <div>
            <div>
                <img
                    src="https://via.placeholder.com/300x300.png?text=MERN+Booking"
                    alt="hotel image"
                />
            </div>
            <div>
                <h3>{hotel.title}</h3>
                <p>₹{hotel.price}/night</p>
                <p>{`${hotel.content.substring(1, 200)}...`}</p>
                <p>{hotel.location}</p>

                <p>
                    For {differenceInDates(hotel.from, hotel.to)}{" "}
                    {differenceInDates(hotel.from, hotel.to) <= 1
                        ? " day"
                        : " days"}
                </p>
                <p>{hotel.beds} bed</p>
                <p>
                    Available from {new Date(hotel.from).toLocaleDateString()}
                </p>
            </div>
            <div>
                <button
                    onClick={() => {
                        navigate(`/hotel/${hotel._id}`);
                    }}
                >
                    Show more
                </button>
                <Link to={`/hotel/edit/${hotel._id}`}>Edit</Link>
                <button onClick={() => deleteHotelHandler(hotel._id)}>
                    Delete
                </button>
            </div>
        </div>
    );
};

export default Hotel;
