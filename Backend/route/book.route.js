import express from "express";
import { bookUpload, getBook } from "../controller/book.controller.js";

const router = express.Router();

router.get("/getBook", getBook);
router.post("/bookUpload",bookUpload);

export default router;