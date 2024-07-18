import express from "express";
import UserController from "../src/controllers/user.controller.js";

const router = express.Router();

const userController = new UserController();

router.post("/register-user", userController.registerUser);
router.post("/auth-user", userController.authUser);
router.get("/get-all-users", userController.getAllUsers);

export default router;