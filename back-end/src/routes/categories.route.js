import express from "express";
import Category from "../models/category.model.js";

const router = express.Router();

router.route(`/`).get(async (req, res) => {
    try {
        Category.find({})
            .then((categories) => {
                console.log(categories);
                res.send(categories);
            })
            .catch(err => {
                console.error(err);
            })
    }
    catch (err) {
        console.error(err);
    }
});

export { router as categories };