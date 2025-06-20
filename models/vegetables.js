import mongoose from "mongoose";
import { type } from "os";

const vegetableSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    variety_amount: {
        type: Number
    },
    days_to_grow: {
        type: Number
    }
})

export default mongoose.model('Vegetable', vegetableSchema, "vegetables")