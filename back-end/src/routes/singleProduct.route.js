import express from "express";
import Product from "../models/product.model.js";

const router = express.Router();

router.route(`/`).get(async (req, res) => {


});

export { router as products };