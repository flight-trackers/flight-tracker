import axios from "axios";
import { FastifyPluginAsync } from "fastify";
import { IFlightData, IState } from "src/interfaces/IflightData";
import { apiData, stateData } from "src/interfaces/IapiData";
//import { Transform } from "stream";

//imports flights; the schema for the database colection
import { flights } from './schemaTemplate'



//this saves the flight data to our mongodb server
const saveToMongo = (flightData: IFlightData) => {


  var myData = new flights(flightData);
  myData.save().then(() => {
    console.log("saved to database")
  })
    .catch((err: string) => { throw err });

}

//converts json data from the Open Skies API into our format
const transformFlightData = (flightData: apiData): IFlightData => {
  let newFlightData: IFlightData = {
    time: flightData.time.toString(),
    states: []
  }

  flightData.states.map((state: stateData) => {
    let tempState: IState = {
      icao24: state[0],
      callsign: state[1],
      origin_country: state[2]
    }
    state[3] ? tempState.time_position = state[3] : {};
    state[4] ? tempState.last_contact = state[4] : {};
    state[5] ? tempState.longitude = state[5] : {};
    state[6] ? tempState.latitude = state[6] : {};
    state[7] ? tempState.baro_altitude = state[7] : {};
    state[8] ? tempState.on_ground = state[8] : {};
    state[9] ? tempState.velocity = state[9] : {};
    state[10] ? tempState.true_track = state[10] : {};
    state[11] ? tempState.vertical_rate = state[11] : {};
    state[12] ? tempState.sensors = state[12] : {};
    state[13] ? tempState.geo_altitude = state[13] : {};
    state[14] ? tempState.squawk = state[14] : {};
    state[15] ? tempState.spi = state[15] : {};
    state[16] ? tempState.position_source = state[16] : {};
    state[17] ? tempState.category = state[17] : {};

    newFlightData.states.push(tempState)
  })

  return newFlightData;
}


const allFlights: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  // const options = {
  //   auth: {
  //     username: process.env.USERNAME as string,
  //     password: process.env.PASSWORD as string,
  //   },
  // };
  fastify.get("/", async function (request, reply) {
    const resp = await axios.get(
      "https://opensky-network.org/api/states/all",
      //options
    );
    console.log("asdflkjsaldkjflsdkjflsjd CALLED")
    const data: IFlightData = transformFlightData(resp.data);
    //const data: IFlightData = transformFlightData(schemaTemplate)
    saveToMongo(data)

    return data;
  });
};

export default allFlights;
