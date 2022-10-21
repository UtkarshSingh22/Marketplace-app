import { useState } from "react";
import { convertDateToNormalFormat } from "../utils/convertDate";
import OrderModal from "./modals/OrderModal";
import styles from "./BookingCard.module.css";
import Button from "./Button";

const BookingCard = ({ hotel, user, id }) => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    let fromDate = convertDateToNormalFormat(hotel.from);
    let toDate = convertDateToNormalFormat(hotel.to);

    return (
        <section className={styles.hotel}>
            <div className={styles.img}>
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
            <div className={styles.content}>
                <article className={styles.text}>
                    <div className={styles.description}>
                        <h2>Booking ID: {id}</h2>
                        <p className={styles.price}>₹{hotel.price}</p>
                    </div>
                    <h3>{hotel.title}</h3>
                    <p className={styles.location}>{hotel.location}</p>
                    <p>
                        {hotel.bed} {hotel.bed <= 1 ? " bed" : " beds"}
                    </p>
                    <p>
                        Booking dates: {fromDate} to {toDate}
                    </p>
                </article>
                <div className={styles.btn}>
                    <Button onClick={toggleModal}>Show payment info</Button>
                </div>
                {showModal && (
                    <OrderModal
                        hotel={hotel}
                        user={user}
                        id={id}
                        onToggle={toggleModal}
                    />
                )}
            </div>
        </section>
    );
};

export default BookingCard;
