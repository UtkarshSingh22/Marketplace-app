const Hotel = ({ hotel }) => {
    return (
        <div>
            <div>
                <img
                    src="https://via.placeholder.com/300x300.png?text=MERN+Booking"
                    alt="hotel image"
                />
            </div>
            <div>
                <h3>{hotel.title}</h3>
                <p>{hotel.price}</p>
                <p>{`${hotel.content.substring(1, 200)}...`}</p>
                <p>{hotel.location}</p>
                <p>{hotel.beds}</p>
            </div>
        </div>
    );
};

export default Hotel;
