import { read, updateHotel } from "../actions/hotel";
import { useParams } from "react-router-dom";
import { Fragment, useState } from "react";

const ViewHotel = () => {
    const params = useParams();
    const [hotel, setHotel] = useState({});
    const [image, setImage] = useState('');

    useEffect(() => {
        loadSellerHotel();
    }, []);

    const loadSellerHotel = async () => {
        let res = await read(params.hotelId);
        setHotel(res.data)
        setImage(
            `${process.env.REACT_APP_API}/hotel/image/${params.hotelId}`
        );
    };

    return <Fragment>
        <h2>{ }</h2>
    </Fragment>
};

export default ViewHotel;
