import { Fragment, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { searchListings } from "../actions/hotel";
import Search from "../components/forms/Search";
import Hotel from "../components/Hotel";

const SearchResults = () => {
    const [searchParams] = useSearchParams();

    const [location, setLocation] = useState("");
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        const location = searchParams.get("location");
        const fromDate = searchParams.get("fromDate");
        const toDate = searchParams.get("toDate");

        searchListings({ location, fromDate, toDate }).then((res) => {
            setHotels(res.data);
        });
    }, [window.location.search]);

    return (
        <Fragment>
            <h2>Search Results</h2>
            <div>
                {hotels.map((hotel) => {
                    return <Hotel hotel={hotel} key={hotel._id} />;
                })}
            </div>
        </Fragment>
    );
};

export default SearchResults;
