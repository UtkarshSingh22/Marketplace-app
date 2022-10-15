import User from "../models/user";

exports.connectPayouts = (req, res, next) => {
    const user = User.findById();
};
