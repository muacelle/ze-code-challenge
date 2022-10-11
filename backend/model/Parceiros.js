import mongoose from "mongoose"
const { Schema, model } = mongoose

const parceirosSchema = new Schema({
    id: Number,
    tradingName: String,
    ownerName: String,
    document: String,
    coverageArea: Object,
    address: Object
})

const Parceiros = mongoose.model('parceiros', parceirosSchema)
export default Parceiros