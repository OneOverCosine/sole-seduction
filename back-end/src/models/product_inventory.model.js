import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const productInventorySchema = new mongoose.Schema({
    product: { type: ObjectId, required: true },
    count: { type: Number }
});

const ProductInventory = mongoose.model(`product_inventory`, productInventorySchema);

export default ProductInventory;