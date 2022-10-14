import express from "express";
const authController = require("../controllers/auth");

const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);

export default router;
