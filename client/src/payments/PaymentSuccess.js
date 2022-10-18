import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const PaymentSuccess = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            toast.success('Your payment is processed and the booking is complete.')
            navigate("/dashboard");
        }, 1000);
    }, []);
    return <h1>Payment Successful.</h1>;
};

export default PaymentSuccess;
