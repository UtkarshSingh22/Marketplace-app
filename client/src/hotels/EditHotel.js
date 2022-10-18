import { Fragment, useEffect, useState } from "react";
import { read } from "../actions/hotel";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const EditHotel = () => {
    const params = useParams();

    useEffect(() => {
        loadSellerHotel();
    }, []);

    const loadSellerHotel = async () => {
        let res = await read(params.hotelId);
        console.log(res);
    };

    return (
        <Fragment>
            <h2>Edit Hotel</h2>
        </Fragment>
    );
};

export default EditHotel;
