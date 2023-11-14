import mongoose, { Mongoose } from "mongoose";


const storeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        default: 2023,
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

export default mongoose.model('Store', storeSchema)