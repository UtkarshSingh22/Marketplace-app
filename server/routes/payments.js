import express from "express";
import {connectPayouts} from "../controllers/payments";

const router = express.Router();

router.post("/connect-payouts", connectPayouts);

export default router;
