const mongoose = require("mongoose");
const validator = require("validator");

// mongoose.connect("mongodb://127.0.0.1:27017/signUp");

const signSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
        minlength: 2,
    },
    number: {
        type: Number,
        required: true,
        min: 5,
        max: 11,
    },
    email: {
        required: true,
        type: String,
        validate(value) {
            if (!isEmail.validator(value)) {
                throw new Error("invalid id validation!!!");
            }
        }
    },
    password: {
        required: true,
        type: String,


    },
    submit: {
        required: true,
        type: Number,
    }
});

// model declare
const User = new mongoose.model("User", signSchema);

// export here
module.exports = User;