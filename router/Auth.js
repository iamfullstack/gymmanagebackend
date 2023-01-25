import express from "express";
import AuthController from "../controller/admin/AuthController.js";
const router = express.Router();

// router.get("/", AuthController.index);
router.post("/login", AuthController.login);
router.get("/logout", AuthController.logout);
router.get("/forgot_password", AuthController.forgotPassword);
router.post("/sent_otp", AuthController.sentOtp);
router.post("/verify_otp", AuthController.verifyOtp);
router.post("/update_password", AuthController.updatePassword);

export default router;
