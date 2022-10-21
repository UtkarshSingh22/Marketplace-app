import { Fragment } from "react";
import styles from "./HotelCreateForm.module.css";

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
            <form onSubmit={formSubmitHandler} className={styles.form}>
                <input
                    type="text"
                    name="title"
                    onChange={changeHandler}
                    placeholder="Title"
                    value={title}
                    required
                />
                <label className={styles.image}>
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
                    type="number"
                    name="price"
                    onChange={changeHandler}
                    placeholder="Price"
                    value={price}
                    required
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

                <textarea
                    name="content"
                    onChange={changeHandler}
                    placeholder="Description"
                    value={content}
                />

                <textarea
                    name="location"
                    onChange={changeHandler}
                    placeholder="Address"
                    value={location}
                    required
                />

                <div className={styles.date}>
                    <label>From date</label>
                    <input
                        type="date"
                        name="from"
                        onChange={changeHandler}
                        value={from}
                        min={new Date().toISOString().split("T")[0]}
                        required
                    />
                </div>

                <div className={styles.date}>
                    <label>To date</label>
                    <input
                        type="date"
                        name="to"
                        onChange={changeHandler}
                        value={to}
                        min={from}
                        disabled={from.length === 0 && !edit}
                        required
                    />
                </div>

                <button type="submit" className={styles.btn}>
                    Save
                </button>
            </form>
        );
    };

    return <Fragment>{hotelForm()}</Fragment>;
};

export default HotelCreateForm;
