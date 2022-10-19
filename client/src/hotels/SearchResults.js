import { Fragment, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Search from "../components/forms/Search";

const SearchResults = () => {
    const [searchParams] = useSearchParams();

    const [location, setLocation] = useState("");
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [bed, setBed] = useState("");
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        const location = searchParams.get("location");
        const fromDate = searchParams.get("fromDate");
        const toDate = searchParams.get("toDate");
        const bed = searchParams.get("bed");

        console.table({ location, fromDate, toDate, bed });
    }, [window.location.search]);

    return (
        <Fragment>
            <div>search result</div>
        </Fragment>
    );
};

export default SearchResults;
