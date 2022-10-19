import { Fragment, useEffect, useState } from "react";
import { allHotels } from "../actions/hotel";
import Search from "../components/forms/Search";
import Hotel from "../components/Hotel";

const Home = () => {
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        loadAllHotels();
    }, []);

    const loadAllHotels = async () => {
        let result = await allHotels();
        setHotels(result.data);
    };

    return (
        <Fragment>
            <h1>All Hotels</h1>
            <Search />
            <div>
                {hotels.map((hotel) => {
                    return <Hotel key={hotel._id} hotel={hotel} />;
                })}
            </div>
        </Fragment>
    );
};

export default Home;
