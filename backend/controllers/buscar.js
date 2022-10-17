import Parceiros from "../model/Parceiros.js"
import asyncHandler from 'express-async-handler'

// Buscar parceiro mais próximo
const buscarParceiro = asyncHandler(async (req, res) => {
    const coord = req.body.coord
    const results = await Parceiros.find({
        "coordinates": { $in: [coord] }
    })
    res.send(results)
})

export { buscarParceiro }