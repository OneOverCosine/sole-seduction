import express from "express";

const router = express.Router();

/* basic search page for all products
also used to filter products by brand and all that*/

router.route(`/`).get(async (req, res) => {

});

export { router as categories };