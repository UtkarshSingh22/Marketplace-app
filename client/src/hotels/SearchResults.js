import { Fragment, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { searchListings } from "../actions/hotel";
import Search from "../components/forms/Search";
import Hotel from "../components/Hotel";

const SearchResults = () => {
    const [searchParams] = useSearchParams();

    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        const location = searchParams.get("location");
        const fromDate = searchParams.get("fromDate");
        const toDate = searchParams.get("toDate");

        searchListings({ location, fromDate, toDate })
            .then((res) => {
                setHotels(res.data);
            })
            .catch((err) => {
                toast.error("Unable to fetch the results, please try again.");
            });
    }, [window.location.search]);

    return (
        <Fragment>
            <Search />
            <div>
                {hotels.map((hotel) => {
                    return <Hotel hotel={hotel} key={hotel._id} />;
                })}
            </div>
        </Fragment>
    );
};

export default SearchResults;
