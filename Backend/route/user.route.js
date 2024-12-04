import express from "express";
import { signup, login, getUser } from "../controller/user.controller.js";
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/getUser",getUser);

export default router;