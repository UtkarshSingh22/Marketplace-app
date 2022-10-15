import mongoose from "mongoose";
import bcrypt from "bcrypt";

const { Schema } = mongoose;

const userSchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
            required: "Name is required",
        },
        email: {
            type: String,
            trim: true,
            required: "Email is required",
            unique: true,
        },
        password: {
            type: String,
            min: 6,
            max: 64,
            required: true,
        },
        isConnectedForPayouts: false,
        accountNumber: {
            type: String,
            trim: true,
        },
        ifscCode: {
            type: String,
            trim: true,
        },
    },
    { timeseries: true }
);

userSchema.pre("save", function (next) {
    let user = this;

    if (user.isModified("password")) {
        return bcrypt.hash(user.password, 12, function (err, hash) {
            if (err) {
                console.log("Bcrypt hash err", err);
                return next(err);
            }
            user.password = hash;
            return next();
        });
    } else {
        return next();
    }
});

userSchema.methods.comparePassword = function (password, next) {
    bcrypt.compare(password, this.password, function (err, match) {
        if (err) {
            return next(err, false);
        }
        return next(null, match);
    });
};

export default mongoose.model("User", userSchema);
