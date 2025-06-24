import mongoose from "mongoose";
import { type } from "os";

const meatSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    animal: {
        type: String
    },
    months_to_mature:{
        type: Number
    }

})

export default mongoose.model('Meat', meatSchema, 'meats')