import mongoose from "mongoose"
const { Schema, model } = mongoose

const parceirosSchema = new Schema({
    id: { type: Number, required: true, min: 1, index: true, unique: true },
    tradingName: String,
})

const Parceiros = model('parceiros', parceirosSchema)
export default Parceiros