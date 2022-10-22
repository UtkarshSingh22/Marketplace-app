import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { searchListings } from "../actions/hotel";
import Footer from "../components/Footer";
import Search from "../components/forms/Search";
import Hotel from "../components/Hotel";
import styles from "./SearchResults.module.css";
import LoadingSpinner from "../components/modals/LoadingSpinner";

const SearchResults = () => {
    const [searchParams] = useSearchParams();

    const [hotels, setHotels] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
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

        setIsLoading(false);
    }, [window.location.search]);

    return (
        <section className={styles.hotelsParent}>
            {isLoading && <LoadingSpinner />}
            <article className={styles.hotels}>
                <h1>Search Results</h1>
                <Search />
                <div className={styles.hotelsList}>
                    {hotels.map((hotel) => {
                        return <Hotel hotel={hotel} key={hotel._id} />;
                    })}
                </div>
            </article>
            <Footer />
        </section>
    );
};

export default SearchResults;
