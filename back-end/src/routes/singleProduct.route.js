import express from "express";
import ProductData from "../models/product_data.model.js";

const router = express.Router();

router.get('/product/:id', async (req, res) => {
    try {
        const product = await ProductData.findById(req.params._id);
        if (!product) {
            return res.status(404).send('Product not found');
        }
        res.render('ProductPage', { product });
    } catch (err) {
        res.status(500).send(err.message);
    }

});

export { router as products };