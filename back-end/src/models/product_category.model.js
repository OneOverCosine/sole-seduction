import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const productCategorySchema = new mongoose.Schema({
    category: { type: ObjectId, required: true },
    product: { type: ObjectId, required: true }
});

const ProductCategory = mongoose.model(`product_categories`, productCategorySchema);

export default ProductCategory;