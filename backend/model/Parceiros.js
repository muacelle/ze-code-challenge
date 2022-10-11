import mongoose from "mongoose"
const { Schema, model } = mongoose

const parceirosSchema = new Schema({
    id: Number,
    tradingName: String
})

const Parceiros = model('parceiros', parceirosSchema)
export default Parceiros