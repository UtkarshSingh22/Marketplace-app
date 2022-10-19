import Hotel from "../models/hotel";
import fs from "fs";
import Order from "../models/order";

export const create = async (req, res) => {
    try {
        let fields = req.fields;
        let files = req.files;

        let hotel = new Hotel(fields);
        hotel.postedBy = req.headers.userid;

        if (files.image) {
            hotel.imageData = fs.readFileSync(files.image.path);
            hotel.imageContentType = files.image.type;
        }

        hotel.save((err, result) => {
            if (err) {
                res.status(400).send("Error in saving, Try again.");
            }
            res.json(result);
        });
    } catch (err) {
        res.status(400).send("Something went wrong, Try again.");
    }
};

export const hotels = async (req, res) => {
    let all = await Hotel.find({})
        .limit(24)
        .select("-imageData")
        .populate("postedBy", "_id name")
        .exec();

    res.json(all);
};

export const image = async (req, res) => {
    let hotel = await Hotel.findById(req.params.hotelId).exec();

    if (hotel && hotel.imageData) {
        res.set("Content-Type", hotel.imageContentType);
        return res.send(hotel.imageData);
    }
};

export const sellerHotels = async (req, res) => {
    let all = await Hotel.find({ postedBy: req.headers.userid })
        .select("-imageData")
        .populate("postedBy", "_id name")
        .exec();

    res.send(all);
};

export const read = async (req, res) => {
    let hotel = await Hotel.findById(req.params.hotelId)
        .populate("postedBy", "_id name")
        .select("-imageData")
        .exec();

    res.json(hotel);
};

export const updateHotel = async (req, res) => {
    try {
        let fields = req.fields;
        let files = req.files;

        let data = { ...fields };

        if (files.image) {
            let imageData = fs.readFileSync(files.image.path);
            let imageContentType = files.image.type;

            data.imageData = imageData;
            data.imageContentType = imageContentType;
        }

        let updated = Hotel.findByIdAndUpdate(req.params.hotelId, data, {
            new: true,
        })
            .select("-imageData")
            .exec();

        res.json(updated);
    } catch (err) {
        res.status(400).send("Something went wrong, Try again.");
    }
};

export const userHotelBookings = async (req, res) => {
    try {
        const all = await Order.find({ userId: req.headers.userid })
            .populate("hotelId", "-imageData")
            .populate("userId", "_id name")
            .exec();

        res.json(all);
    } catch (err) {
        res.status(400).send(
            "Unable to fetch your bookings, please try again."
        );
    }
};

export const isAlreadyBooked = async (req, res) => {
    try {
        const { hotelId } = req.params;

        const userOrders = await Order.find({ userId: req.headers.userid })
            .select("hotelId")
            .exec();

        let ids = [];

        for (let index = 0; index < userOrders.length; index++) {
            ids.push(userOrders[index].hotelId.toString());
        }

        console.log(userOrders);
        console.log(ids);

        res.json({
            ok: ids.includes(hotelId),
        });
    } catch (error) {
        res.status(400).send("Some error occurred, please try again.");
    }
};

export const searchListings = async (req, res) => {
    try {
        const { location, fromDate, toDate } = req.body;

        let result = await Hotel.find({})
            .select("-imageData -imageContentType")
            .exec();

        let finalListings = [];

        for (let hotel of result) {
            const hotelLocation = hotel.location.toLowerCase();
            let from = hotel.from.toString();
            let date = from.split("T")[0].split("-");
            let dateFrom = fromDate.split("-");

            if (hotelLocation.includes(location.toLowerCase().trim())) {
                if (
                    date[0] > dateFrom[0] ||
                    (date[0] === dateFrom[0] && date[1] > dateFrom[1]) ||
                    (date[0] === dateFrom[0] &&
                        date[1] === dateFrom[1] &&
                        date[2] >= dateFrom[2])
                ) {
                    finalListings.push(hotel);
                }
            }
        }

        res.json(finalListings);
    } catch (error) {
        console.log(error);
        // res.status(400).send("Something went wrong, try again.");
    }
};
