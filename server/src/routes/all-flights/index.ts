import axios from "axios";
import { FastifyPluginAsync } from "fastify";
import { IFlightData } from "src/interfaces/IflightData";
//import { Transform } from "stream";

//imports flights; the schema for the database colection
import { flights } from './schemaTemplate'



//this saves the flight data to our mongodb server
const saveToMongo = (flightData: any) => {


  var myData = new flights(flightData);
  myData.save().then((item: any) => {
    console.log("saved to database")
  })
    .catch((err: any) => { throw err });

}

//converts json data from the Open Skies API into our format
const transformFlightData = (flightData: any): IFlightData => {
  let newFlightData: IFlightData = {
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


const allFlights: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  const options = {
    auth: {
      username: process.env.USERNAME as string,
      password: process.env.PASSWORD as string,
    },
  };
  fastify.get("/", async function (request, reply) {
    const resp = await axios.get(
      "https://opensky-network.org/api/states/all",
      options
    );
    console.log("asdflkjsaldkjflsdkjflsjd CALLED")
    const data: IFlightData = transformFlightData(resp.data);
    //const data: IFlightData = transformFlightData(schemaTemplate)
    saveToMongo(data)

    return data;
  });
};

export default allFlights;
