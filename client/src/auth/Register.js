import { Fragment, useState } from "react";
import RegisterForm from "../components/RegisterForm";

const Register = () => {
    const [nameInput, setNameInput] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");

    const nameInputHandler = (event) => {
        setNameInput(event.target.value);
    };

    const emailInputHandler = (event) => {
        setEmailInput(event.target.value);
    };

    const passwordInputHandler = (event) => {
        setPasswordInput(event.target.value);
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();

        setNameInput("");
        setEmailInput("");
        setPasswordInput("");
    };

    return (
        <Fragment>
            <h1>Register</h1>
            <RegisterForm
                nameInput={nameInput}
                emailInput={emailInput}
                passwordInput={passwordInput}
                nameInputHandler={nameInputHandler}
                emailInputHandler={emailInputHandler}
                passwordInputHandler={passwordInputHandler}
                formSubmitHandler={formSubmitHandler}
            />
        </Fragment>
    );
};

export default Register;
