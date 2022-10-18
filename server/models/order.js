import mongoose from "mongoose";

const { Schema } = mongoose;

const orderSchema = new Schema(
    {
        hotelId: {
            type: Schema.Types.ObjectId,
            ref: "Hotel",
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    },
    { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
