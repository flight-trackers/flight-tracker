import axios, { AxiosRequestConfig } from "axios";
import { FastifyPluginAsync } from "fastify";

const allFlights: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get("/", async function (request, reply) {
    const options: AxiosRequestConfig = {
      auth: {
        username: "example",
        password: "pass",
      },
    };

    const data = await axios.get(
      "https://opensky-network.org/api/states/all",
      options
    );

    return data;
  });
};

export default allFlights;
