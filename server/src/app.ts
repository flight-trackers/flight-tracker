import { join } from "path";
import AutoLoad, { AutoloadPluginOptions } from "@fastify/autoload";
import {
  FastifyBaseLogger,
  FastifyInstance,
  FastifyPluginAsync,
  FastifyTypeProvider,
  RawServerDefault,
} from "fastify";
import { IncomingMessage, ServerResponse } from "http";
const mongoose = require("mongoose");

export type AppOptions = {
  // Place your custom options for app below here.
} & Partial<AutoloadPluginOptions>;

// Pass --options via CLI arguments in command to enable these options.
const options: AppOptions = {};

const app: FastifyPluginAsync<AppOptions> = async (
  fastify,
  opts
): Promise<void> => {
  // Place here your custom code!
  mongoose
    .connect(
      "mongodb+srv://flight-tracker:pass-tracker@cluster0.8kafrq7.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("connected to db");
    })
    .catch(() => {
      console.log("err did not connect");
    });

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  await fastify.register(cors, {
    origin: (origin, cb) => {
      const hostname = new URL(origin).hostname;
      if (hostname === "127.0.0.1") {
        // Request from localhost will pass
        cb(null, true);
        return;
      }
      // Generate an error on other origins, disabling access
      cb(new Error("Not allowed"), false);
    },
  });

  void fastify.register(AutoLoad, {
    dir: join(__dirname, "plugins"),
    options: opts,
  });

  // This loads all plugins defined in routes
  // define your routes in one of these
  void fastify.register(AutoLoad, {
    dir: join(__dirname, "routes"),
    options: opts,
  });
};

export default app;
export { app, options };
function cors(
  instance: FastifyInstance<
    RawServerDefault,
    IncomingMessage,
    ServerResponse<IncomingMessage>,
    FastifyBaseLogger,
    FastifyTypeProvider
  >,
  opts: { origin: (origin: any, cb: any) => void },
  done: (err?: Error | undefined) => void
): void {
  throw new Error("Function not implemented.");
}
