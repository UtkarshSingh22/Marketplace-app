import { useState } from "react";
import { register } from "../actions/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import RegisterForm from "../components/forms/RegisterForm";
import styles from "../components/forms/Register.module.css";
import hotelImg from "../images/hotel-front.jpg";
import LoadingSpinner from "../components/modals/LoadingSpinner";

const Register = () => {
    const navigate = useNavigate();

    const [nameInput, setNameInput] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);

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
        setIsLoading(true);
        event.preventDefault();

        try {
            await register({
                nameInput,
                emailInput,
                passwordInput,
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

        setIsLoading(false);
        setNameInput("");
        setEmailInput("");
        setPasswordInput("");
    };

    return (
        <section className={styles.login}>
            {isLoading && <LoadingSpinner />}
            <div className={styles.main}>
                <div className={styles.image}>
                    <img src={hotelImg} />
                </div>
                <div className={styles.text}>
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
                </div>
            </div>
        </section>
    );
};

export default Register;
