import Hotel from "../models/hotel";
import fs from "fs";

export const create = async (req, res) => {
    try {
        let fields = req.fields;
        let files = req.files;

        let hotel = new Hotel(fields);

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
        res.status(400).send("Error in saving, Try again.");
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
    let all = await Hotel.find({ postedBy: req.user._id })
        .select("-imageData")
        .populate("postedBy", "_id name")
        .exec();

    res.send(all);
};
