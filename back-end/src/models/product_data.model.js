import { Decimal128 } from "mongodb";
import mongoose from "mongoose";

const inventorySchema = new mongoose.Schema(
    {
        size: String,
        colour: String
    }
);

const productDataSchema = new mongoose.Schema({
    brand: { type: String },
    model: { type: String },
    gender: { type: String },
    img: { type: Array },
    description: { type: String },
    price: { type: Decimal128 },
    colours: { type: Array },
    sizes: { type: Array },
    inventory: [inventorySchema]
});

const ProductData = mongoose.model(`product_data`, productDataSchema);

export default ProductData;