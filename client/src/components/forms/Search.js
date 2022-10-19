import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
    const navigate = useNavigate();

    const [location, setLocation] = useState("");
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [bed, setBed] = useState("");

    const submitHandler = () => {
        navigate(
            `/search-result?location=${location}&fromDate=${fromDate}&toDate=${toDate}&bed=${bed}`
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

            <select
                onChange={(e) => setBed(e.target.value)}
                name="bed"
                value={bed}
            >
                <option value="">Number of beds</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>

            <button onClick={submitHandler}>Search</button>
        </div>
    );
};

export default Search;
