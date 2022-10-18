import Hotel from "../models/hotel";
import fs from "fs";

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
