import Parceiros from "../model/Parceiros.js"
import asyncHandler from 'express-async-handler'
import booleanPointInPolygon from "@turf/boolean-point-in-polygon"
import distance from "@turf/distance"
import { point, multiPolygon } from "@turf/helpers"

// Buscar parceiro mais próximo
const buscarParceiro = asyncHandler(async (req, res) => {
    const userAddress = point(req.body.coord)
    const results = await Parceiros.find().select('id address.coordinates')
    const list = results.map(({address, id}) => {
        return [distance(point(address.coordinates), userAddress, {units: 'kilometers'}), id]
    })
    const closest = list.sort((a, b) => a[0] - b[0]).slice(0, 3).filter(d => d[0] < 20)

    if (closest) {

        let parceiroFinal = await Parceiros.find({id: closest[0][1]}).select('-_id')
        let coverage = parceiroFinal[0].coverageArea
        if (booleanPointInPolygon(userAddress, multiPolygon(coverage.coordinates))) {
            res.send(parceiroFinal)
        }

    } else {

        res.send('Desculpe, não há nenhum parceiro próximo à sua localização. :(')

    }
})

export { buscarParceiro }