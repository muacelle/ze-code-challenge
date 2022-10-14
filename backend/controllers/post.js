import asyncHandler from 'express-async-handler'
import Parceiros from "../model/Parceiros.js"

// Criar novo parceiro
const novoParceiro = asyncHandler(async (req, res) => {
    const uniqueDocument = await Parceiros.findOne({document: req.body.document})
    if (uniqueDocument) {res.status(400).send('Duplicate document.')}

    const results = await Parceiros.create({
        id: req.body.id,
        tradingName: req.body.tradingName,
        ownerName: req.body.ownerName,
        document: req.body.document,
        coverageArea: req.body.coverageArea,
        address: req.body.address
    })

    res.status(200).json(results)
})

export { novoParceiro }