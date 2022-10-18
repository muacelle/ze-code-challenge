import booleanPointInPolygon from "@turf/boolean-point-in-polygon"
import distance from "@turf/distance"
import { point, multiPolygon } from "@turf/helpers"

const userAddress = point([-12.98451580, -38.46081287])
const partner1 = point([-12.978236, -38.4546116])
const partner2 = point([-12.996709, -38.4634832])
const partner3 = point([-12.981572, -38.4649925])

// qual o parceiro mais próximo?

const distance1 = distance(userAddress, partner1, {units: 'kilometers'})
const distance2 = distance(userAddress, partner2, {units: 'kilometers'})
const distance3 = distance(userAddress, partner3, {units: 'kilometers'})

let maisProximo = Math.min(distance1, distance2, distance3)
console.log(maisProximo)

// o usuário está dentro da coverageArea do parceiro mais próximo?

const coverageArea = multiPolygon([
    [
        [
            [-43.36556, -22.99669],
            [-43.36539, -23.01928],
            [-43.26583, -23.01802],
            [-43.25724, -23.00649],
            [-43.23355, -23.00127],
            [-43.2381, -22.99716],
            [-43.23866, -22.99649],
            [-43.24063, -22.99756],
            [-43.24634, -22.99736],
            [-43.24677, -22.99606],
            [-43.24067, -22.99381],
            [-43.24886, -22.99121],
            [-43.25617, -22.99456],
            [-43.25625, -22.99203],
            [-43.25346, -22.99065],
            [-43.29599, -22.98283],
            [-43.3262, -22.96481],
            [-43.33427, -22.96402],
            [-43.33616, -22.96829],
            [-43.342, -22.98157],
            [-43.34817, -22.97967],
            [-43.35142, -22.98062],
            [-43.3573, -22.98084],
            [-43.36522, -22.98032],
            [-43.36696, -22.98422],
            [-43.36717, -22.98855],
            [-43.36636, -22.99351],
            [-43.36556, -22.99669]
        ]
    ]
])

const userAddress2 = point([-43.328393, -22.97088])
const result = booleanPointInPolygon(userAddress2, coverageArea)
// console.log(result)