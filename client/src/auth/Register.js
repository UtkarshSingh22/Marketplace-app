import { Fragment, useState } from "react";

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
        console.log(nameInput, emailInput, passwordInput);
    };

    return (
        <Fragment className="registerPage">
            <h1>Sign-up</h1>
            <form onSubmit={formSubmitHandler}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    onChange={nameInputHandler}
                    value={nameInput}
                />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    onChange={emailInputHandler}
                    value={emailInput}
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    onChange={passwordInputHandler}
                    value={passwordInput}
                />

                <button type="submit">Register</button>
            </form>
        </Fragment>
    );
};

export default Register;
