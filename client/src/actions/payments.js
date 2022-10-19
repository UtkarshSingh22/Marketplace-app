import axios from "axios";

export const connectPayouts = async ({ email, accountNum, ifsc, token }) => {
    return await axios.post(
        `${process.env.REACT_APP_API}/connect-payouts`,
        {
            email: email,
            accountNumber: accountNum,
            ifscCode: ifsc,
        },
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
};

export const paymentSuccess = async (token, hotelId, userId) => {
    return await axios.post(
        `${process.env.REACT_APP_API}/payment-success`,
        {
            hotelId,
            userId,
        },
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
};

export const getBalance = async (token, userId) => {
    return await axios.get(`${process.env.REACT_APP_API}/get-balance`, {
        headers: {
            Authorization: `Bearer ${token}`,
            userId: userId,
        },
    });
};
