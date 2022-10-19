import { Fragment } from "react";
import ReactDOM from "react-dom";
import { convertDateToNormalFormat } from "../../utils/convertDate";
import styles from "./OrderModal.module.css";

const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onToggle}></div>;
};

const Overlay = ({ hotel, user, id, onToggle }) => {
    return (
        <div className={styles.modal}>
            <h2>Booking payment info</h2>
            <button onClick={onToggle}>X</button>
            <p>Booking ID: {id}</p>
            <p>Customer ID: {user._id}</p>
            <p>Customer Name: { user.name}</p>
            <p>Payment status: Paid</p>
            <p>Total amount: ₹{hotel.price}/night</p>
            <p>Booked from: { convertDateToNormalFormat(hotel.from)}</p>
        </div>
    );
};

const element = document.querySelector("#overlays");

const OrderModal = ({ hotel, user, id, onToggle }) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onToggle={onToggle} />, element)}
            {ReactDOM.createPortal(
                <Overlay
                    hotel={hotel}
                    user={user}
                    id={id}
                    onToggle={onToggle}
                />,
                element
            )}
        </Fragment>
    );
};

export default OrderModal;
