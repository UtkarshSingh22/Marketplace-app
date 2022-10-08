import express from "express";
const authController = require("../controllers/auth");

const router = express.Router();

router.post("/register", authController.register);

export default router;
