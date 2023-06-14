import bodyParser from 'body-parser';
import cors from 'cors';
import dbConnect from './src/dbConnect.js';
import environmentConfig from './src/environmentConfig.js';
import express from 'express';

import { categories } from './src/routes/categories.route.js';
import { products } from './src/routes/singleProduct.route.js';

const app = express();
environmentConfig;

app.use((cors()));
app.use(bodyParser.json());

dbConnect();


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
});

app.use("/categories", categories);
app.use("/products", products);

app.listen(process.env.PORT, () => {
    console.log(`Connected to backend on port ${process.env.PORT}`);
});