import express from "express";
import ProductData from "../models/product_data.model.js";
const router = express.Router();

/* basic search page for all products
also used to filter products by brand and all that*/

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

router.route('/:filter').get(
    async (req, res) => {
        ProductData.find({ $or: [{ brand: req.params.filter }, { gender: req.params.filter }] })
            .then(
                products => res.send(products)
            )
            .catch(
                err => console.log(err)
            )
    });

export { router as categories };