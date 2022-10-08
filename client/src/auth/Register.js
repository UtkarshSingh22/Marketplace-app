import { Fragment, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import RegisterForm from "../components/RegisterForm";

const Register = () => {
    const navigate = useNavigate();

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
            await axios.post(`${process.env.REACT_APP_API}/register`, {
                name: nameInput,
                email: emailInput,
                password: passwordInput,
            });

            toast.success("Registered! Please login");
            navigate("/login");
        } catch (err) {
            if (err.response.status === 400) {
                toast.error(err.response.data);
            } else {
                toast("Something went wrong. Please try again!");
            }
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
