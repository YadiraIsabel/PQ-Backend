import mongoose, { Mongoose } from "mongoose";


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        default: 0.0,
        required: false
    },
    fecha: {
        type: String,
        default: "01-01-2023",
        required: false
    },
    store: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Store',
        required: true
    }

},
    
{
    timestamps: true
})

export default mongoose.model('Product', productSchema)