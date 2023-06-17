import mongoose from "mongoose";

const categoriesSchema = new mongoose.Schema({
    name: String,
    type: String
});

const Categories = mongoose.model(`categories`, categoriesSchema);

export default Categories;