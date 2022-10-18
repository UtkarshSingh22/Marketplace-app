import { Fragment, useState } from "react";
import { createHotel } from "../actions/hotel";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import convertDate from "../utils/convertDate";
import HotelCreateForm from "../forms/HotelCreateForm";

const NewHotel = () => {
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

    const formSubmitHandler = async (event) => {
        event.preventDefault();

        let hotelData = new FormData();
        hotelData.append("title", title);
        hotelData.append("content", content);
        hotelData.append("location", location);
        image && hotelData.append("image", image);
        hotelData.append("price", price);
        hotelData.append("from", from);
        hotelData.append("to", to);
        hotelData.append("bed", bed);

        try {
            let res = await createHotel(token, hotelData, auth.user._id);
            console.log(res);
            toast("New hotel is posted");
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        } catch (err) {
            toast.error(err.response.data);
        }
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
            <h2>Add Hotel</h2>
            <img src={preview} alt="preview_image" />
            <HotelCreateForm
                changeHandler={changeHandler}
                imageChangeHandler={imageChangeHandler}
                formSubmitHandler={formSubmitHandler}
                values={values}
                preview={preview}
            />
        </Fragment>
    );
};

export default NewHotel;
