import express from "express"
const router = express.Router();
import Hotel from "../models/Hotel.js";
import { createHotel, updateHotel, deleteHotel, getAllHotels, getHotel } from "../controllers/hotel.js";
import { createError } from "../utils/error.js";
import { verifyAdmin } from "../utils/verifyToken.js";
router.post("/", verifyAdmin, createHotel);
router.put("/:id", verifyAdmin, updateHotel)
router.delete("/:id", verifyAdmin, deleteHotel)
router.get("/single/:id", getHotel)
router.get("/", getAllHotels)


export default router