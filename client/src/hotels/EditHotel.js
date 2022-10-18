import { Fragment, useEffect, useState } from "react";
import { read } from "../actions/hotel";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import convertDate from "../utils/convertDate";

const EditHotel = () => {
    const params = useParams();

    const { auth } = useSelector((state) => ({ ...state }));
    const { token } = auth;

    const [values, setValues] = useState({
        title: "",
        content: "",
        location: "",
        image: "",
        price: "",
        from: "",
        to: "",
        bed: "",
    });

    const [preview, setPreview] = useState(
        "https://via.placeholder.com/100x100.png?text=PREVIEW"
    );

    const { title, content, location, image, price, from, to, bed } = values;

    useEffect(() => {
        loadSellerHotel();
    }, []);

    const loadSellerHotel = async () => {
        let res = await read(params.hotelId);
        setValues((prevState) => {
            return { ...prevState, ...res.data };
        });
        setPreview(
            `${process.env.REACT_APP_API}/hotel/image/${params.hotelId}`
        );
    };

    const formSubmitHandler = async (event) => {
        event.preventDefault();
    };

    const imageChangeHandler = (event) => {
        setPreview(URL.createObjectURL(event.target.files[0]));
        setValues((prevState) => {
            return { ...prevState, image: event.target.files[0] };
        });
    };

    const changeHandler = (event) => {
        if (event.target.type === "date") {
            setValues((prevState) => {
                return {
                    ...prevState,
                    [event.target.name]: convertDate(event.target.valueAsDate),
                };
            });
        } else {
            setValues((prevState) => {
                return {
                    ...prevState,
                    [event.target.name]: event.target.value,
                };
            });
        }
    };

    return (
        <Fragment>
            <h2>Edit Hotel</h2>
            <img src={preview} alt="preview_image" />
        </Fragment>
    );
};

export default EditHotel;
