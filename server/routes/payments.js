import express from "express";
import paymentsController from "../controllers/payments";

const router = express.Router();

router.post("/connect-payouts", paymentsController.connectPayouts);

export default router;
