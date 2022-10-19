import { Fragment } from "react";

const Backdrop = () => {
    return <div></div>;
};

const Modal = (props) => {
    return <div>{props.children}</div>;
};

const OrderModal = (props) => {
    return (
        <Fragment>
            <Backdrop />
            <Modal props={props} className="modal" />
        </Fragment>
    );
};

export default OrderModal;
