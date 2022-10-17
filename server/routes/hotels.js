import express from "express";
import { create, hotels } from "../controllers/hotels";
import formidable from "express-formidable";
import { requireSignIn } from "../middlewares";

const router = express.Router();

router.post("/create-hotel", requireSignIn, formidable(), create);
router.get('/hotels', hotels);

export default router;
