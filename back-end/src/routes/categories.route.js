import express from "express";
import ProductData from "../models/product_data.model.js";
import Categories from "../models/categories.model.js";

const router = express.Router();

router.route(`/`).get(async (req, res) => {
  let results = {};

  try {
    ProductData.find({})
      .then((products) => {
        results["products"] = products;
        Categories.find({})
          .then((categories) => {
            results["categories"] = categories;

            res.send(results);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.error(err));
  } catch (err) {
    console.error(err);
  }
});

router.route("/:filter").get(async (req, res) => {
  const params = req.params.filter.split(/[=&]/); // replace characters?
  let results = {};
  let filters = [[], [], []];

  for (let i = 0; i < params.length; i++) {
    params[i] = params[i].replaceAll("+", " ");
  }

  for (let i = 0; i < params.length; i += 2) {
    if (params[i] === "gender") filters[0].push(params[i + 1]);
    if (params[i] === "brand") filters[1].push(params[i + 1]);
    if (params[i] === "colours") filters[2].push(params[i + 1]);
  }

  const query = {};
  // Adds filters to the object by checking if present in the array
  if (filters[0].length > 0) query.gender = { $in: filters[0] };
  if (filters[1].length > 0) query.brand = { $in: filters[1] };
  if (filters[2].length > 0) query.colours = { $in: filters[2] };

  ProductData.find(query)
    .then((products) => {
      results["products"] = products;

      Categories.find({})
        .then((categories) => {
          results["categories"] = categories;
          res.send(results);
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
});

export { router as categories };
