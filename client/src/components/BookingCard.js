import { useState } from "react";
import { convertDateToNormalFormat } from "../utils/convertDate";
import OrderModal from "./modals/OrderModal";

const BookingCard = ({ hotel, user, id }) => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    let fromDate = convertDateToNormalFormat(hotel.from);
    let toDate = convertDateToNormalFormat(hotel.to);

    return (
        <div>
            <h2>Booking ID: {id}</h2>
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
                <p>{hotel.location}</p>
                <p>
                    {hotel.bed} {hotel.bed <= 1 ? " bed" : " beds"}
                </p>
                <p>
                    Booking dates: {fromDate} to {toDate}
                </p>
            </div>
            {showModal && (
                <OrderModal
                    hotel={hotel}
                    user={user}
                    id={id}
                    onToggle={toggleModal}
                />
            )}
            <button onClick={toggleModal}>Show payment info</button>
        </div>
    );
};

export default BookingCard;
