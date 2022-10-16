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

    const formSubmitHandler = (event) => {
        event.preventDefault();
    };

    const imageChangeHandler = (event) => {
        setPreview(URL.createObjectURL(event.target.files[0]));
        setValues((prevState) => {
            return { ...prevState, image: event.target.files[0] };
        });
    };

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

                <input
                    type="number"
                    name="bed"
                    onChange={changeHandler}
                    placeholder="Number of beds"
                    value={bed}
                />

                <label>From date</label>
                <input
                    type="date"
                    onChange={(event) => console.log(event.target.valueAsDate)}
                    
                />
                <label>To date</label>
                <input
                    type="date"
                    onChange={(event) => console.log(event.target.valueAsDate)}
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
            {JSON.stringify(values, null, 8)}
        </Fragment>
    );
};

export default NewHotel;
