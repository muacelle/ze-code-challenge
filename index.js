import mongoose from 'mongoose'
import Parceiros from './model/parceiros.js'
import * as dotenv from 'dotenv'
dotenv.config()

mongoose.connect(process.env.CONNECTIONSTRING)

// Instanciando um novo objeto e posteriormente salvando 

/* const novoParceiro = new Parceiros({
    "id": 2, 
    "tradingName": "Adega da Cerveja - Pinheiros",
    "ownerName": "Zé da Silva",
    "document": "1432132123891/0001",
    "coverageArea": { 
        "type": "MultiPolygon", 
        "coordinates": [
        [[[30, 20], [45, 40], [10, 40], [30, 20]]], 
        [[[15, 5], [40, 10], [10, 20], [5, 10], [15, 5]]]]
    },
    "address": { 
        "type": "Point",
        "coordinates": [-46.57421, -21.785741]
    }
})

await novoParceiro.save() */

// Criando e salvando ao mesmo tempo

/* const outroParceiro = await Parceiros.create({
    "id": 3, 
    "tradingName": "Adega da Cerveja - Pinheiros",
    "ownerName": "Zé da Silva",
    "document": "1432132123891/0001",
    "coverageArea": { 
        "type": "MultiPolygon", 
        "coordinates": [
        [[[30, 20], [45, 40], [10, 40], [30, 20]]], 
        [[[15, 5], [40, 10], [10, 20], [5, 10], [15, 5]]]]
    },
    "address": { 
        "type": "Point",
        "coordinates": [-46.57421, -21.785741]
    }
}) */

const deleted = await Parceiros.deleteMany({id: 2})

// const result = await Parceiros.find()
console.log(deleted)