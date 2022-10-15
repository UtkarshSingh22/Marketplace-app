import axios from "axios";

export const connectPayouts = async ({ auth, accountNum, ifsc }) => {
    return await axios.post(process.env.REACT_APP_API, {
        
    });
};
