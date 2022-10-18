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
    // lista todas as distâncias entre o usuário e as lojas parceiras

    const maxDistanceAllowed = 20
    const closest = list
        .sort((a, b) => a[0] - b[0])
        .slice(0, 3)
        .filter(d => d[0] < maxDistanceAllowed) 
    // ordena e seleciona as 3 mais próximas, dentro do limite de 20km

    if (!closest.length) { res.send('Não há nenhum parceiro próximo à sua localização.') }
    // se houver pelo menos um parceiro próximo, verifica se sua área de cobertura atende o usuário
    else {

        let isCovered = false;
        for (let i = 0; i < closest.length; i++) {
            let parceiroFinal = await Parceiros.find({id: closest[i][1]}).select('-_id')
            let coverage = parceiroFinal[0].coverageArea
            isCovered = booleanPointInPolygon(userAddress, multiPolygon(coverage.coordinates))
            if (isCovered) {
                res.send(parceiroFinal)
                break
            }
        }
        if (!isCovered) { res.send('Localização fora da área de cobertura.') }

    }
})

export { buscarParceiro }