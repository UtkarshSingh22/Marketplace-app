import { Fragment } from "react";
import ReactDOM from "react-dom";
import styles from "./LoadingSpinner.module.css";

const Backdrop = () => {
    return <div className={styles.backdrop}></div>;
};

const Spinner = () => {
    return (
        <div className={styles.spinner}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

const element = document.querySelector("#overlays");

const LoadingSpinner = () => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop />, element)}
            {ReactDOM.createPortal(<Spinner />, element)}
        </Fragment>
    );
};

export default LoadingSpinner;
