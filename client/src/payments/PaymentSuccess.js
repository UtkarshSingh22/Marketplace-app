import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/dashboard");
        }, 1000);
    }, []);
    return <h1>Payment Successful.</h1>;
};

export default PaymentSuccess;
