import { useNavigate, Link } from "react-router-dom";
import { differenceInDates } from "../utils/differnceInDates";
import { convertDateToNormalFormat } from "../utils/convertDate";
import styles from "./Hotel.module.css";
import Button from "./Button";

const Hotel = ({ hotel, owner = false, showViewMoreButton = true }) => {
    const navigate = useNavigate();

    let fromDate = convertDateToNormalFormat(hotel.from);

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
                        <h2>{hotel.title}</h2>
                        <p className={styles.price}>₹{hotel.price}/night</p>
                    </div>
                    <p className={styles.location}>{hotel.location}</p>
                    <p>
                        For {differenceInDates(hotel.from, hotel.to)}{" "}
                        {differenceInDates(hotel.from, hotel.to) <= 1
                            ? " day"
                            : " days"}
                    </p>
                    <p>{`${hotel.content.substring(0, 200)}...`}</p>

                    <p>
                        {hotel.bed} {hotel.bed <= 1 ? " bed" : " beds"}
                    </p>
                    <p>Available from {fromDate}</p>
                </article>
                <div className={styles.btn}>
                    {showViewMoreButton && (
                        <Button
                            onClick={() => {
                                navigate(`/hotel/${hotel._id}`);
                            }}
                        >
                            Show more
                        </Button>
                    )}
                    {owner && (
                        <Link
                            to={`/hotel/edit/${hotel._id}`}
                            className={styles.link}
                        >
                            Edit
                        </Link>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Hotel;
