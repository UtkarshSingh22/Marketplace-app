import User from "../models/user";

export const connectPayouts = async (req, res, next) => {
    const { email, accountNumber, ifscCode } = req.body;

    if (!accountNumber || accountNumber.length != 12) {
        return res
            .status(400)
            .send("Account Number is required and it should be of 12 digits");
    }

    if (!ifscCode) {
        return res.status(400).send("IFSC Code is required.");
    }
    try {
        let user = await User.findOne({ email: email }).exec();
        user.isConnectedForPayouts = true;
        user.accountNumber = accountNumber;
        user.ifscCode = ifscCode;

        user.save();

        return res.json({
            ok: true,
        });
    } catch (err) {
        return res.status(400).send("Something went wrong, Please try again.");
    }
};
