import express from "express";
import { create, hotels, image } from "../controllers/hotels";
import formidable from "express-formidable";
import { requireSignIn } from "../middlewares";

const router = express.Router();

router.post("/create-hotel", requireSignIn, formidable(), create);
router.get('/hotels', hotels);
router.get('/hotel/image/:hotelId', image)

export default router;
