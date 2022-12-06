import axios from "axios";
import { FastifyPluginAsync } from "fastify";

const allFlights: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get("/", async function (request, reply) {
    const resp = await axios.get("https://opensky-network.org/api/states/all");

    const data = resp.data;

    return data;
  });
};

export default allFlights;
