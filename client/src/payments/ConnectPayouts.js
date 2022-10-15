import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { connectPayouts } from "../actions/payments";
import ConnectPayoutsForm from "./ConnectPayoutsForm";
import { useSelector } from "react-redux";

const ConnectPayouts = () => {
    const [nameInput, setNameInput] = useState("");
    const [accountNum, setAccountNum] = useState("");
    const [ifsc, setIfsc] = useState("");

    const { auth } = useSelector((state) => state);

    const navigate = useNavigate();

    const nameInputHandler = (event) => {
        setNameInput(event.target.value);
    };

    const accountNumHandler = (event) => {
        setAccountNum(event.target.value);
    };

    const ifscHandler = (event) => {
        setIfsc(event.target.value);
    };

    const formSubmitHandler = async () => {
        try {
            let response = await connectPayouts({ auth, accountNum, ifsc });
            toast.success("You're account is added successfully.");
            navigate("/dashboard");
        } catch (err) {
            toast.error("Something went wrong, Please try again.");
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
