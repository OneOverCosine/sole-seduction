import express from "express";
import Product from "../models/product.model.js";

const router = express.Router();

router.route(`/`).get(async (req, res) => {
    /* will need to pass filters and create a query based off that. The filters will be the selected categories... */

    try {
        Product.find({})
            .then((products) => {
                console.log(products);
                res.send(products);
            })
            .catch(err => {
                console.error(err);
            });
    }
    catch (err) {
        console.error(err);
    }
});

export { router as products };