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
        <form onSubmit={formSubmitHandler}>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                id="name"
                onChange={nameInputHandler}
                value={nameInput}
                placeholder="Utkarsh Singh"
            />
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

            <button type="submit">Sign up</button>
        </form>
    );
};

export default RegisterForm;
