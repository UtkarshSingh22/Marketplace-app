import { Fragment } from "react";

const HotelCreateForm = ({
    changeHandler,
    imageChangeHandler,
    formSubmitHandler,
    values,
    preview,
    edit,
}) => {
    const { title, content, location, price, from, to, bed } = values;

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

                <select onChange={changeHandler} name="bed" value={bed}>
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
                    value={from.split("T")[0]}
                    min={new Date().toISOString().split("T")[0]}
                />

                <label>To date</label>
                <input
                    type="date"
                    name="to"
                    onChange={changeHandler}
                    value={to}
                    min={from}
                    disabled={from.length === 0 && !edit}
                />

                <button type="submit">Save</button>
            </form>
        );
    };

    return <Fragment>{hotelForm()}</Fragment>;
};

export default HotelCreateForm;
