import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        required: [true, "Please enter your email"],
        unique: [true, "This email has already been registered"]
    },
    password: {
        type: String,
        required: [true, "You must enter a password"]
    }
});

const User = mongoose.model(`users`, userSchema);

export default User;