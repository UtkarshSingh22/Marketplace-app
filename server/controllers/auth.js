import User from "../models/user";

exports.register = async (req, res, next) => {
    const { name, email, password } = req.body;

    if (!name) {
        return res.status(400).send("Name is required");
    }
    if (!password || password.length < 6 || password.length > 64) {
        return res
            .status(400)
            .send(
                "Password is required and should be of min 6 and max 64 characters"
            );
    }
    let userExist = await User.findOne({ email }).exec();
    if (userExist) {
        return res.status(400).send("Email is already taken");
    }

    //registering
    const user = new User(req.body);

    try {
        await user.save();
        console.log("User registered!");
        return res.json({ ok: true });
    } catch (err) {
        console.log("Create user failed", err);
        return res.status(400).send("Error. Try again.");
    }
};
