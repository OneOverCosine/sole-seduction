import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    }, 
    gender: {
        type: String,
        required:true
    },
    img: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    colour: {
        type: String,
        required: true
    },
    sizes: {
        type: Number,
        required: true
    },
     inventory: [{
        color: String,
        sizes: [{
            size: Number,
            quantity: Number
        }]
    }] 

});

const Product = mongoose.model(`products`, productSchema);

export default Product;