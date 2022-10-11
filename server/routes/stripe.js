import express from "express";
import { requireSignIn } from "../middlewares";
const stripeController = require("../controllers/stripe");
const router = express.Router();

router.post(
    "/create-connect-account",
    requireSignIn,
    stripeController.createConnectAccount
);

export default router;
