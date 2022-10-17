import { Fragment, useEffect, useState } from "react";
import { allHotels } from "../actions/hotel";

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
            <div>{JSON.stringify(hotels, null, 8)}</div>
        </Fragment>
    );
};

export default Home;
