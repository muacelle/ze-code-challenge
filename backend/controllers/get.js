import asyncHandler from 'express-async-handler'

// Retornar todos os parceiros na db
const buscarParceiro = asyncHandler(async (req, res) => {
    const results = await Parceiros.find()
    res.status(200).json(results)
})

export { buscarParceiro }