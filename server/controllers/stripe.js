import User from "../models/user";
require("dotenv").config();
const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_SECRET);

exports.createConnectAccount = async (req, res, next) => {
    // req.auth._id,
    // console.log(req.headers.Authorization);
    const user = await User.findById(req.auth._id).exec();

    const account = await stripe.accounts.create({ type: "express" });

    console.log(account);
};
