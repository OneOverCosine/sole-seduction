import { Decimal128 } from "mongodb";
import mongoose from "mongoose";

const inventorySchema = new mongoose.Schema(
    {
        size: Number,
        colour: String,
        quantity: Number
    }
);

const productDataSchema = new mongoose.Schema({
    brand: String,
    model: String,
    gender: String,
    img: Array,
    description: String,
    price: Decimal128,
    colours: Array,
    sizes: Array,
    inventory: [inventorySchema]
}, { collection: 'product_data' });

const ProductData = mongoose.model(`product_data`, productDataSchema);

export default ProductData;