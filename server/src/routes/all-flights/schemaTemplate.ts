import { apiData } from "src/interfaces/IapiData";


//let testvar: test = ["4b1816", "SWR20CZ ", "Switzerland", 1670348457, 1670348457, 13.9198, 46.2198, 11285.22, false, 249.38, 131.15, 0, null, 11186.16, "3051", false, 0]

const schemaTemplate: apiData = {
    time: 1012312, states: [
        ["4b1816", "SWR20CZ ", "Switzerland", 1670348457, 1670348457, 13.9198, 46.2198, 11285.22, false, 249.38, 131.15, 0, null, 11186.16, "3051", false, 0],
        ["ab1644", "UAL1587 ", "United States", 1670348456, 1670348456, -91.3317, 42.3573, 8229.6, false, 277.21, 65.67, 0, null, 8176.26, null, false, 0],
        ["e8027e", "LPE2123 ", "Chile", 1670348444, 1670348444, -76.6928, -12.4978, 5455.92, false, 188.16, 131.01, 9.1, null, 5326.38, null, false, 0],
        ["a57b26", "N452SM  ", "United States", 1670348454, 1670348454, -105.1014, 39.9028, null, true, 0, 199.69, null, null, null, null, false, 0],
        ["aa56db", "UAL2048 ", "United States", 1670348457, 1670348457, -89.6964, 41.1243, 7315.2, false, 243.99, 66.52, -0.33, null, 7322.82, null, false, 0],
        ["a7b08d", "LXJ595  ", "United States", 1670348456, 1670348456, -97.3356, 31.3004, 13106.4, false, 199.52, 286.94, -0.65, null, 13563.6, "6052", false, 0],
        ["a3feec", "N357BE  ", "United States", 1670348456, 1670348456, -103.204, 40.8941, 8229.6, false, 153.74, 246.95, -0.65, null, 8153.4, null, false, 0],
        ["4b1812", "SWR36A  ", "Switzerland", 1670348456, 1670348456, 2.5043, 49.8646, 11582.4, false, 215.76, 306.76, 0, null, 11483.34, "3027", false, 0],
        ["aa9321", "UAL7    ", "United States", 1670348451, 1670348451, -99.8266, 36.7127, 9753.6, false, 221.52, 318.2, 0, null, 9951.72, null, false, 0],
        ["4b1813", "SWR211G ", "Switzerland", 1670348457, 1670348457, 6.2443, 49.7608, 10363.2, false, 200.95, 340.41, -0.33, null, 10241.28, "1000", false, 0],
        ["ade18c", "AAL9785 ", "United States", 1670348457, 1670348457, -97.0258, 32.9548, 396.24, false, 64.82, 180.45, -2.93, null, 381, null, false, 0],
        ["ade191", "DAL2179 ", "United States", 1670348457, 1670348457, -97.1988, 35.5173, 2842.26, false, 170.43, 92.42, 10.73, null, 2880.36, null, false, 0],
        ["ab6fdd", "AAL1136 ", "United States", 1670348457, 1670348457, -68.3951, 19.8794, 11277.6, false, 251.84, 123.33, 0, null, 11788.14, null, false, 0],
        ["c07d20", "JZA7653 ", "Canada", 1670348455, 1670348456, -80.1171, 45.3025, 7315.2, false, 164.7, 345.53, -0.33, null, 7261.86, "4770", false, 0],
        ["a6fe22", "N55LX   ", "United States", 1670348456, 1670348456, -84.908, 27.8, 10058.4, false, 196.87, 109.38, 0, null, 10576.56, "2114", false, 0],
        ["aaf633", "UAL1433 ", "United States", 1670348454, 1670348455, -104.6485, 51.7897, 10980.42, false, 210.04, 287.68, -0.33, null, 10195.56, null, false, 0],
        ["880457", "AIQ120  ", "Thailand", 1670348456, 1670348456, 91.136, 19.5461, 10972.8, false, 230.58, 307.2, 0, null, 11689.08, "6123", false, 0],
        ["a305fd", "SKW3920 ", "United States", 1670348450, 1670348450, -100.7568, 46.7754, null, true, 0.45, 236.25, null, null, null, null, false, 0],
        ["e49405", "GLO1036 ", "Brazil", null, 1670348347, null, null, null, false, 162.23, 92.73, 15.93, null, null, null, false, 0],
        ["aa56d8", "UAL2326 ", "United States", 1670348456, 1670348456, -96.5415, 40.9561, 8534.4, false, 184.65, 257.94, 0, null, 8496.3, null, false, 0],
        ["a3f2ae", "N35325  ", "United States", 1670348457, 1670348457, -112.298, 33.4728, 1066.8, false, 46.06, 200.26, 0.65, null, 1074.42, null, false, 0],
        ["4b1805", "SWR4SP  ", "Switzerland", 1670348457, 1670348457, 7.4202, 51.4388, 2407.92, false, 135.04, 289.13, -8.13, null, 2415.54, "5712", false, 0],
        ["a90ea8", "DAL1037 ", "United States", 1670348373, 1670348398, -84.434, 33.6231, null, true, 8.23, 0, null, null, null, null, false, 0],
        ["4b1808", "SWR1BA  ", "Switzerland", 1670348456, 1670348456, 12.0988, 45.6441, 10972.8, false, 201.16, 300.76, 0, null, 10919.46, "2030", false, 0],
        ["a0e279", "TRF90   ", "United States", null, 1670348446, null, null, null, false, 51.45, 88.85, -1.95, null, null, null, false, 0],
        ["aaa6d0", "N786A   ", "United States", 1670348452, 1670348454, -73.099, 40.7761, 243.84, false, 50.28, 262.95, 0.33, null, 304.8, null, false, 0],
        ["a678ec", "N516NG  ", "United States", 1670348456, 1670348456, -118.355, 33.7006, 1371.6, false, 41.03, 262.07, -0.33, null, 1333.5, null, false, 0]
    ]
}

var mongoose = require("mongoose");
const generateSchema = require('generate-schema');

let flightSchema = generateSchema.mongoose(schemaTemplate);
let flights = mongoose.model("flight", flightSchema);

export { flights }
export { schemaTemplate };