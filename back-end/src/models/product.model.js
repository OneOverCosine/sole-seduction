import { Decimal128 } from "mongodb";
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, requred: true },
    size: { type: Number, required: true },
    price: { type: Decimal128 },
    colour: { type: String }
});

const Product = mongoose.model(`products`, productSchema);

export default Product;