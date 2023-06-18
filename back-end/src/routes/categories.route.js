import express from "express";
import ProductData from "../models/product_data.model.js";
import Categories from "../models/categories.model.js";

const router = express.Router();

/* basic search page for all products
also used to filter products by brand and all that*/

router.route(`/`).get(async (req, res) => {
    let results = {};

    try {
        ProductData.find({})
            .then(products => {
                // products => res.send(products)
                results["products"] = products;
                Categories.find({}).then(categories => {
                    results["categories"] = categories;
                    // console.log(`Results: ${JSON.stringify(results, null, 2)}`);
                    res.send(results);
                }).catch(err => console.log(err))
            }).catch(
                err => console.error(err)
            )
    }
    catch (err) {
        console.error(err);
    }
});

// router.route(`/`).get(async (req, res) => {
//     try {
//         ProductData.find({})
//             .then(
//                 products => res.send(products)
//             ).catch(
//                 err => console.error(err)
//             )
//     }
//     catch (err) {
//         console.error(err);
//     }
// });

router.route('/:filter').get(
    async (req, res) => {
        let params = req.params.filter.split(/[=&]/);
        let filters = params[1].split(",");

        const query = { [params[0]]: { $in: filters } };
        console.log(query);

        ProductData.find(query)
            .then(
                products => res.send(products)
            )
            .catch(
                err => console.log(err)
            )
    });

export { router as categories };