import { Fragment } from "react";
import ReactDOM from "react-dom";
import styles from "./OrderModal.module.css";

const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onToggle}></div>;
};

const Overlay = (props) => {
    return <div className={styles.modal}>
        
    </div>;
};

const element = document.querySelector("#overlays");

const OrderModal = ({ hotel, user, id, onToggle }) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onToggle={onToggle} />, element)}
            {ReactDOM.createPortal(
                <Overlay hotel={hotel} user={user} id={id} />,
                element
            )}
        </Fragment>
    );
};

export default OrderModal;
