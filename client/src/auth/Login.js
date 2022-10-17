import { Fragment, useState } from "react";
import { toast } from "react-toastify";
import { login } from "../actions/auth";
import { useDispatch } from "react-redux";
import { authActions } from "../store/slices/auth";
import { useNavigate } from "react-router-dom";
import LoginForm from "../forms/LoginForm";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");

    const emailInputHandler = (event) => {
        setEmailInput(event.target.value);
    };

    const passwordInputHandler = (event) => {
        setPasswordInput(event.target.value);
    };

    const formSubmitHandler = async (event) => {
        event.preventDefault();

        try {
            let res = await login({
                emailInput,
                passwordInput,
            });
            toast.success("Logged in!");
            if (res.data) {
                const data = res.data;
                window.localStorage.setItem("auth", JSON.stringify(res.data));
                dispatch(authActions.loggedInUser(data));
                navigate("/dashboard");
            }
        } catch (err) {
            if (err.response.status === 400) {
                toast.error(err.response.data);
            } else {
                toast("Something went wrong. Please try again!");
            }
        }

        setEmailInput("");
        setPasswordInput("");
    };
    return (
        <Fragment>
            <h1>Login</h1>
            <LoginForm
                emailInput={emailInput}
                passwordInput={passwordInput}
                emailInputHandler={emailInputHandler}
                passwordInputHandler={passwordInputHandler}
                formSubmitHandler={formSubmitHandler}
            />
        </Fragment>
    );
};

export default Login;
