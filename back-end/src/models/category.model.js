import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: { type: String, requred: true }
});

const Category = mongoose.model(`categories`, categorySchema);

export default Category;