const LoginForm = ({
    emailInput,
    passwordInput,
    emailInputHandler,
    passwordInputHandler,
    formSubmitHandler,
}) => {
    return (
        <form onSubmit={formSubmitHandler}>
            <label htmlFor="email">Email</label>
            <input
                type="email"
                id="email"
                onChange={emailInputHandler}
                value={emailInput}
                placeholder="test@test.com"
            />
            <label htmlFor="password">Password</label>
            <input
                type="password"
                id="password"
                onChange={passwordInputHandler}
                value={passwordInput}
            />

            <button disabled={!emailInput || !passwordInput} type="submit">
                Sign up
            </button>
        </form>
    );
};

export default LoginForm;
