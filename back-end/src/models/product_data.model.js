import { Decimal128 } from "mongodb";
import mongoose from "mongoose";

const productDataSchema = new mongoose.Schema({
    brand: { type: String },
    model: { type: String },
    gender: { type: String },
    img: { type: Array },
    description: { type: String },
    price: { type: Decimal128 },
    colours: { type: Array },
    sizes: { type: Array },
    inventory: { type: Array }
});

const ProductData = mongoose.model(`product_data`, productDataSchema);

export default ProductData;