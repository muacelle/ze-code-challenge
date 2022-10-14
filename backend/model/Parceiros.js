import mongoose from "mongoose"
const { Schema, model } = mongoose

const parceirosSchema = new Schema({
    id: { type: Number, required: true, min: 1, unique: true },
    tradingName: { type: String, required: true },
    ownerName: { type: String, required: true },
    document: { type: String, required: true },
    coverageArea: { 
        type: { type: String, required: true },
        coordinates: { type: Array, required: true }
    },
    address: {
        type: { type: String, required: true },
        coordinates: { type: Array, required: true }
    }
})

// Pq 'unique: true' funciona pra id mas não funciona pra document?

const Parceiros = model('parceiros', parceirosSchema)
export default Parceiros