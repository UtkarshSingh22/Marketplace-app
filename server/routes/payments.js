import express from "express";
import {
    connectPayouts,
    getBalance,
    paymentSuccess,
} from "../controllers/payments";
import { requireSignIn } from "../middlewares";

const router = express.Router();

router.post("/connect-payouts", requireSignIn, connectPayouts);
router.post("/payment-success", requireSignIn, paymentSuccess);
router.get("/get-balance", requireSignIn, getBalance);

export default router;
