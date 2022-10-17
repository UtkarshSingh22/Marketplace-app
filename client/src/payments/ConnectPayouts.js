import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { connectPayouts } from "../actions/payments";
import ConnectPayoutsForm from "./ConnectPayoutsForm";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/slices/auth";

const ConnectPayouts = () => {
    const state = useSelector((state) => state.auth.user);

    const { auth } = useSelector((state) => state);
    const { token } = auth;

    const [nameInput, setNameInput] = useState(state.name);
    const [accountNum, setAccountNum] = useState("");
    const [ifsc, setIfsc] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const nameInputHandler = (event) => {
        setNameInput(event.target.value);
    };

    const accountNumHandler = (event) => {
        setAccountNum(event.target.value);
    };

    const ifscHandler = (event) => {
        setIfsc(event.target.value);
    };

    const formSubmitHandler = async (event) => {
        event.preventDefault();

        try {
            const email = state.email;
            await connectPayouts({ email, accountNum, ifsc, token });

            const data = JSON.parse(window.localStorage.getItem("auth"));
            data.user.isConnectedForPayouts = true;

            dispatch(authActions.connectForPayouts());
            window.localStorage.setItem("auth", JSON.stringify(data));

            toast.success("You're bank account is added successfully.");
            navigate("/dashboard/seller");
        } catch (err) {
            toast.error(err.response.data);
        }
    };

    return (
        <Fragment>
            <h1>Connect your bank account</h1>
            <ConnectPayoutsForm
                nameInput={nameInput}
                accountNum={accountNum}
                ifsc={ifsc}
                nameInputHandler={nameInputHandler}
                accountNumHandler={accountNumHandler}
                ifscHandler={ifscHandler}
                formSubmitHandler={formSubmitHandler}
            />
        </Fragment>
    );
};

export default ConnectPayouts;
