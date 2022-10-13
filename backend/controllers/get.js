import asyncHandler from 'express-async-handler'
import Parceiros from "../model/Parceiros.js"

// Retornar todos os parceiros na db
const getFunction = asyncHandler(async (req, res) => {
    const results = await Parceiros.find()
    res.status(200).json(results)
})

// Criar novo parceiro
const setFunction = asyncHandler(async (req, res) => {
    const uniqueDocument = await Parceiros.findOne({document: req.body.document})
    if (uniqueDocument) {res.status(400).send('Duplicate document.')}

    const results = await Parceiros.create({
        id: req.body.id,
        tradingName: req.body.tradingName,
        ownerName: req.body.ownerName,
        document: req.body.document
    })

    res.status(200).json(results)
})

// Editar parceiro
const updateFunction = async (req, res) => {
    res.json({ message: `Update something by ID ${req.params.id}`})
}

// Deletar parceiro
const deleteFunction = async (req, res) => {
    res.json({ message: `Delete something by ID ${req.params.id}`})
}

export { getFunction, setFunction, updateFunction, deleteFunction }