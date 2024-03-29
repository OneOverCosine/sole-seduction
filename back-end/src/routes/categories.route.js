import express from "express";
import ProductData from "../models/product_data.model.js";
import Categories from "../models/categories.model.js";

const router = express.Router();

router.route(`/`).get(async (req, res) => {
    let results = {};

    try {
        ProductData.find({})
            .then(products => {
                results["products"] = products;
                Categories.find({}).then(categories => {
                    results["categories"] = categories;

                    res.send(results);
                }).catch(err => console.log(err))
            }).catch(err => console.error(err))
    }
    catch (err) {
        console.error(err);
    }
});

router.route('/:filter').get(
    async (req, res) => {
        const params = req.params.filter.split(/[=&]/);
        let results = {};
        let filters = params[1].split(",");

        for (let i = 0; i < filters.length; i++) {
            filters[i] = filters[i].replaceAll("+", " ");
        }

        const query = { [params[0]]: { $in: filters } };

        ProductData.find(query)
            .then(products => {
                results["products"] = products;

                Categories.find({}).then(categories => {
                    results["categories"] = categories;
                    res.send(results);
                }).catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    });

export { router as categories };