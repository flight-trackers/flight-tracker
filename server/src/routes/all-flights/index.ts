import axios from "axios";
import { FastifyPluginAsync } from "fastify";
//import { Transform } from "stream";

var mongoose = require("mongoose");
const generateSchema = require('generate-schema');






//this saves the flight data to our mongodb server
const saveToMongo = (flightData: any) => {

  let flightSchema = generateSchema.mongoose(flightData);
  let flights = mongoose.model("flight", flightSchema);

  var myData = new flights(flightData);
  myData.save().then((item: any) => {
    console.log("saved to database")
  })
    .catch((err: any) => { throw err });

}

//converts json data from the Open Skies API into our format
const transformFlightData = (flightData: any): any => {
  let newFlightData: { time: number, states: any } = {
    time: flightData.time,
    states: []
  }

  flightData.states.map((state: any) => {
    newFlightData.states.push({
      icao24: state[0],
      callsign: state[1],
      origin_country: state[2],
      time_position: state[3],
      last_contact: state[4],
      longitude: state[5],
      latitude: state[6],
      baro_altitude: state[7],
      on_ground: state[8],
      velocity: state[9],
      true_track: state[10],
      vertical_rate: state[11],
      sensors: state[12],
      geo_altitude: state[13],
      squawk: state[14],
      spi: state[15],
      position_source: state[16],
      category: state[17]
    })
  })

  return newFlightData;
}

//import test from './asdf'

const allFlights: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get("/", async function (request, reply) {
    const resp = await axios.get("https://opensky-network.org/api/states/all");

    const data = resp.data;
    //const data = test
    saveToMongo(transformFlightData(data))

    return transformFlightData(data);
  });
};

export default allFlights;
