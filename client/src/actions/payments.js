import axios from "axios";

export const connectPayouts = async ({ email, accountNum, ifsc }) => {
    return await axios.post(process.env.REACT_APP_API/connect-payouts, {
        email: email,
        accountNumber: accountNum,
        ifscCode: ifsc,
    });
};
