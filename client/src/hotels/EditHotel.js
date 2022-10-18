import { Fragment, useEffect, useState } from "react";
import { read, updateHotel } from "../actions/hotel";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { convertDate } from "../utils/convertDate";
import HotelCreateForm from "../forms/HotelCreateForm";

const EditHotel = () => {
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        loadSellerHotel();
        const toastNoti = window.localStorage.getItem("toast");
        if (toastNoti) {
            navigate("/dashboard/seller");
            toast(toastNoti);
            window.localStorage.removeItem("toast");
        }
    }, []);

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

    const loadSellerHotel = async () => {
        let res = await read(params.hotelId);
        setValues((prevState) => {
            const fromDate = res.data.from;
            const toDate = res.data.to;
            return {
                ...res.data,
                from: fromDate.split("T")[0],
                to: toDate.split("T")[0],
            };
        });
        setPreview(
            `${process.env.REACT_APP_API}/hotel/image/${params.hotelId}`
        );
    };

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
            await updateHotel(token, hotelData, params.hotelId);

            window.localStorage.setItem(
                "toast",
                `New changes are saved. ${title} is updated.`
            );
            window.localStorage.setItem("reload", "true");

            navigate('/dashboard/seller')

            window.location.reload();
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
            <h2>Edit Hotel</h2>
            <img src={preview} alt="preview_image" />
            <HotelCreateForm
                changeHandler={changeHandler}
                imageChangeHandler={imageChangeHandler}
                formSubmitHandler={formSubmitHandler}
                values={values}
                preview={preview}
                edit={true}
            />
        </Fragment>
    );
};

export default EditHotel;
