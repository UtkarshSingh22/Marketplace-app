import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
        <div>
            <input
                placeholder="Location"
                type="text"
                onChange={(e) => setLocation(e.target.value)}
                value={location}
            />

            <label>From date</label>
            <input
                type="date"
                name="from"
                onChange={(e) => setFromDate(e.target.value)}
                value={fromDate}
                min={new Date().toISOString().split("T")[0]}
            />

            <label>To date</label>
            <input
                type="date"
                name="to"
                onChange={(e) => setToDate(e.target.value)}
                value={toDate}
                min={fromDate}
                disabled={fromDate.length === 0}
            />

            <button onClick={submitHandler}>Search</button>
        </div>
    );
};

export default Search;
