import styles from "./Login.module.css";
import Button from "../Button";

const LoginForm = ({
    emailInput,
    passwordInput,
    emailInputHandler,
    passwordInputHandler,
    formSubmitHandler,
}) => {
    return (
        <form onSubmit={formSubmitHandler} className={styles.form}>
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

            <Button type="submit">Sign in</Button>
        </form>
    );
};

export default LoginForm;
