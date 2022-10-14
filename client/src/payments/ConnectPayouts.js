import { Fragment } from "react"

const ConnectPayouts = () => {
    
    return (
        <form onSubmit={formSubmitHandler}>
            <label htmlFor="accountNum">Account Number</label>
            <input
                type="number"
                id="accountNum"
                onChange={nameInputHandler}
                value={nameInput}
            />
            <label htmlFor="name">Email</label>
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
    )
}

export default ConnectPayouts