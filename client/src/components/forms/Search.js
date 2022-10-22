import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Search.module.css";
import { MagnifyingGlass } from "phosphor-react";

const Search = () => {
    const navigate = useNavigate();

    const [location, setLocation] = useState("");
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");

    const submitHandler = () => {
        navigate(
            `/search-result?location=${location}&fromDate=${fromDate}&toDate=${toDate}`
        );
    };

    return (
        <section className={styles.cover}>
            <div className={styles.inputs}>
                <label>Location</label>
                <input
                    className={styles.input}
                    placeholder="Bangalore, India"
                    type="text"
                    onChange={(e) => setLocation(e.target.value)}
                    value={location}
                    required
                />
            </div>

            <div className={styles.inputs}>
                <label>From date</label>
                <input
                    className={styles.input}
                    type="date"
                    name="from"
                    onChange={(e) => setFromDate(e.target.value)}
                    value={fromDate}
                    min={new Date().toISOString().split("T")[0]}
                    required
                />
            </div>

            <div className={styles.inputs}>
                <label>To date</label>
                <input
                    className={styles.input}
                    type="date"
                    name="to"
                    onChange={(e) => setToDate(e.target.value)}
                    value={toDate}
                    min={fromDate}
                    disabled={fromDate.length === 0}
                />
            </div>

            <div className={styles.button}>
                <button onClick={submitHandler}>
                    <MagnifyingGlass size={32} className={styles.icon} />
                </button>
            </div>
        </section>
    );
};

export default Search;
