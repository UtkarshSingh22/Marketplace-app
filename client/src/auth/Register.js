import { Fragment, useState } from "react";
import axios from "axios";
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

    const formSubmitHandler = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(
                "http://localhost:4000/api/register",
                {
                    name: nameInput,
                    email: emailInput,
                    password: passwordInput,
                }
            );
            console.log("Register User ===>", response);
        } catch (err) {
            console.log(err);
        }

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
