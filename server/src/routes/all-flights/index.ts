import { IFlightData } from 'src/interfaces/IflightData';
import { IState } from 'src/interfaces/IflightData';
import axios from "axios";
import { FastifyPluginAsync } from "fastify";

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


    const mapData:IState[] = resp.data.states.map((flight:any[]) => {
      return ({
        icao24: flight[0],
        callsign: flight[1],
        origin_country: flight[2],
        time_position: flight[3],
        last_contact: flight[4],
        longitude: flight[5] ?? 'unknown',
        latitude: flight[6] ?? 'unknown',
        baro_altitude: flight[7] ?? 'unknown',
        on_ground: flight[8],
        velocity: flight[9] ?? 'unknown',
        true_track: flight[10] ?? 'unknown',
        vertical_rate: flight[11] ?? 'unknown',
        sensors: flight[12] ?? 'unknown',
        geo_altitude: flight[13] ?? 'unknown',
        squawk: flight[14] ?? 'unknown',
        spi: flight[15],
        position_source: flight[16],
        category: flight[17] ?? 'unknown'
      })
    })

    const allFlightData:IFlightData = {
      time: resp.data.time,
      states: [...mapData]
    }

    return allFlightData;
  });
};

export default allFlights;
