import express from "express";
import ProductData from "../models/product_data.model.js";

const router = express.Router();

router.get('/product/:id', async (req, res) => {
    try {
        const product = await ProductData.findById(req.params.id);
        if (!product) {
            return res.status(404).send('Product not found');
        }
        res.send(product);
    } catch (err) {
        res.status(500).send(err.message);
    }

});

router.route(`/`).get(async (req, res) => {
    try {
        ProductData.find({}).then((products) => {
            res.send(products);
        }).catch(err => {
            console.error(err);
        })
    }
    catch (err) {
        console.error(err);
    }
});

export { router as products };