import axios from "axios";

export const register = async (user) => {
    return await axios.post(`${process.env.REACT_APP_API}/register`, {
        name: user.nameInput,
        email: user.emailInput,
        password: user.passwordInput,
    });
};
