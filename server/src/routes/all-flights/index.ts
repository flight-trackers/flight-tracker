import axios from "axios";
import { FastifyPluginAsync } from "fastify";

const allFlights: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  const options = {
    auth: {
      username: process.env.USERNAME as string,
      password: process.env.PASSWORD as string
  }
}
  fastify.get("/", async function (request, reply) {
    const resp = await axios.get("https://opensky-network.org/api/states/all", options);

    const data = resp.data;

    return data;
  });
};

export default allFlights;
