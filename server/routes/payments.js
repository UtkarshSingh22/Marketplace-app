import express from "express";
import { connectPayouts, paymentSuccess } from "../controllers/payments";
import { requireSignIn } from "../middlewares";

const router = express.Router();

router.post("/connect-payouts", requireSignIn, connectPayouts);
router.post("/payment-succes", requireSignIn, paymentSuccess);

export default router;
