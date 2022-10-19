import { useNavigate, Link } from "react-router-dom";
import { differenceInDates } from "../utils/differnceInDates";
import { convertDateToNormalFormat } from "../utils/convertDate";

const Hotel = ({ hotel, owner = false, showViewMoreButton = true }) => {
    const navigate = useNavigate();

    let fromDate = convertDateToNormalFormat(hotel.from);

    return (
        <div>
            <div>
                {hotel.imageContentType ? (
                    <img
                        src={`${process.env.REACT_APP_API}/hotel/image/${hotel._id}`}
                        alt="hotel pictures"
                    />
                ) : (
                    <img
                        src="https://via.placeholder.com/300x300.png?text=MERN+Booking"
                        alt="hotel picture"
                    />
                )}
            </div>
            <div>
                <h3>{hotel.title}</h3>
                <p>₹{hotel.price}/night</p>
                <p>
                    For {differenceInDates(hotel.from, hotel.to)}{" "}
                    {differenceInDates(hotel.from, hotel.to) <= 1
                        ? " day"
                        : " days"}
                </p>
                <p>{`${hotel.content.substring(0, 200)}...`}</p>
                <p>{hotel.location}</p>

                <p>
                    {hotel.bed} {hotel.bed <= 1 ? " bed" : " beds"}
                </p>
                <p>Available from {fromDate}</p>
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
                {owner && <Link to={`/hotel/edit/${hotel._id}`}>Edit</Link>}
            </div>
        </div>
    );
};

export default Hotel;
