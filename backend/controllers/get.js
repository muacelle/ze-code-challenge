import Parceiros from "../model/parceiros"

const getFunction = async (req, res) => {
    res.json({ message: 'Get something'})
}

const setFunction = async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
}

const updateFunction = async (req, res) => {
    res.json({ message: `Update something by ID ${req.params.id}`})
}

const deleteFunction = async (req, res) => {
    res.json({ message: `Delete something by ID ${req.params.id}`})
}

export { getFunction, setFunction, updateFunction, deleteFunction }