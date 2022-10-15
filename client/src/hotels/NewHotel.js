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

    const { title, content, location, image, price, from, to, bed } = values;

    const formSubmitHandler = (event) => {};

    const imageChangeHandler = (event) => {};

    const changeHandler = (event) => {};

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
