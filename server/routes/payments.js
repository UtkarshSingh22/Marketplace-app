import express from "express";
import { connectPayouts } from "../controllers/payments";
import { requireSignIn } from "../middlewares";

const router = express.Router();

router.post("/connect-payouts", requireSignIn, connectPayouts);

export default router;
