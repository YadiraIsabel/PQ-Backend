import mongoose, { Mongoose } from "mongoose";


const countSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    totalin: {
        type: Number,
        default: 0.0,
        required: false
    },
    date: {
        type: String,
        default: "2023-11-12",
        required: false
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }

},
    
{
    timestamps: true
})

export default mongoose.model('Count', countSchema)