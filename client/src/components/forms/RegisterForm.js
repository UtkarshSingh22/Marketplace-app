import Button from "../Button";
import styles from "./Register.module.css";

const RegisterForm = ({
    nameInput,
    emailInput,
    passwordInput,
    nameInputHandler,
    emailInputHandler,
    passwordInputHandler,
    formSubmitHandler,
}) => {
    return (
        <form onSubmit={formSubmitHandler} className={styles.form}>
            <div className={styles.inputs}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    onChange={nameInputHandler}
                    value={nameInput}
                />
            </div>
            <div className={styles.inputs}>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    onChange={emailInputHandler}
                    value={emailInput}
                />
            </div>
            <div className={styles.inputs}>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    onChange={passwordInputHandler}
                    value={passwordInput}
                />
            </div>
            <Button type="submit">Sign up</Button>
        </form>
    );
};

export default RegisterForm;
