import mongoose from "mongoose";
import { type } from "os";

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    variety_amount: {
        type: Number,
    },
    days_to_ripe: {
        type: String
    }
})

export default mongoose.model('Fruit', fruitSchema, 'fruits')