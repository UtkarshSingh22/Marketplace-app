import axios from "axios";

export const createHotel = async (token, data, userId) => {
    await axios.post(`${process.env.REACT_APP_API}/create-hotel`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
            userId: userId,
        },
    });
};

export const allHotels = async () => {
    return await axios.get(`${process.env.REACT_APP_API}/hotels`);
};

export const sellerHotels = async (token, userId) => {
    return await axios.get(`${process.env.REACT_APP_API}/seller-hotels`, {
        headers: {
            Authorization: `Bearer ${token}`,
            userId,
        },
    });
};

export const read = async (hotelId) => {
    return await axios.get(`${process.env.REACT_APP_API}/hotel/${hotelId}`);
};

export const updateHotel = async (token, data, hotelId) => {
    await axios.put(
        `${process.env.REACT_APP_API}/update-hotel/${hotelId}`,
        data,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
};

export const userHotelBookings = async (token, userId) => {
    return await axios.get(`${process.env.REACT_APP_API}/user-hotel-bookings`, {
        headers: {
            Authorization: `Bearer ${token}`,
            userId: userId,
        },
    });
};

export const isAlreadyBooked = async (token, hotelId, userId) => {
    return await axios.get(
        `${process.env.REACT_APP_API}/is-already-booked/${hotelId}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
                userId,
            },
        }
    );
};

export const searchListings = async (query) => {
    return await axios.post(
        `${process.env.REACT_APP_API}/search-listings`,
        query
    );
};
