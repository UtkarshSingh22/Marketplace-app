import { Fragment, useState } from "react";
import { createHotel } from "../actions/hotel";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import convertDate from "../utils/convertDate";
import { useNavigate } from "react-router-dom";

const NewHotel = () => {
    const { auth } = useSelector((state) => ({ ...state }));
    const { token } = auth;

    const navigate = useNavigate();

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
            let res = await createHotel(token, hotelData);
            console.log(res)
            toast("New hotel is posted");
            setTimeout(() => {
                navigate("/hotels/new");
            }, 1000);
        } catch (err) {
            toast("...");
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

    const hotelForm = () => {
        return (
            <form onSubmit={formSubmitHandler}>
                <label>
                    Image
                    <input
                        type="file"
                        name="image"
                        onChange={imageChangeHandler}
                        accept="image/*"
                        hidden
                    />
                </label>

                <input
                    type="text"
                    name="title"
                    onChange={changeHandler}
                    placeholder="Title"
                    value={title}
                />

                <textarea
                    name="content"
                    onChange={changeHandler}
                    placeholder="Content"
                    value={content}
                />

                <input
                    type="text"
                    name="location"
                    onChange={changeHandler}
                    placeholder="Address"
                    value={location}
                />

                <input
                    type="number"
                    name="price"
                    onChange={changeHandler}
                    placeholder="Price"
                    value={price}
                />

                <select
                    onChange={changeHandler}
                    name="bed"
                    value={bed}
                    required
                >
                    <option value="">Number of beds</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                <label>From date</label>
                <input
                    type="date"
                    name="from"
                    onChange={changeHandler}
                    value={from}
                    min={new Date().toISOString().split("T")[0]}
                />

                <label>To date</label>
                <input
                    type="date"
                    name="to"
                    onChange={changeHandler}
                    value={to}
                    min={from}
                    disabled={from.length === 0}
                />

                <button type="submit">Save</button>
            </form>
        );
    };

    return (
        <Fragment>
            <h2>Add Hotel</h2>
            {hotelForm()}
            <img src={preview} alt="preview_image" />
        </Fragment>
    );
};

export default NewHotel;
