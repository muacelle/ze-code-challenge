import Parceiros from '../model/Parceiros.js'
import asyncHandler from 'express-async-handler'

// Carregar parceiro pelo id
const carregarParceiro = asyncHandler(async (req, res) => {
    const results = await Parceiros.findOne({ id: req.params.id })
    res.status(200).json(results)
})

export { carregarParceiro }