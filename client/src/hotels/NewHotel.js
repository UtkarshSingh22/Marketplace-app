import AlgoliaPlaces from "algolia-places-react";
import { Fragment, useState } from "react";

const NewHotel = () => {
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

    const formSubmitHandler = (event) => {};

    const imageChangeHandler = (event) => {};

    const changeHandler = (event) => {
        setValues((prevState) => {
            return { ...prevState, [event.target.name]: event.target.value };
        });
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
                    type="number"
                    name="price"
                    onChange={changeHandler}
                    placeholder="Price"
                    value={price}
                />

                <input
                    type="number"
                    name="bed"
                    onChange={changeHandler}
                    placeholder="Number of beds"
                    value={bed}
                />

                <button type="submit">Save</button>
            </form>
        );
    };

    return (
        <Fragment>
            <h2>Add Hotel</h2>
            {hotelForm()}
        </Fragment>
    );
};

export default NewHotel;
