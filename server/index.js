import config from "./config.js";
import logger from "./logger.js";
import ExpressServer from "./expressServer.js";
import mongoDB from "./db/db.js";
import dotenv from "dotenv";

dotenv.config();

const launchServer = async () => {
  try {
    await mongoDB();
    const expressServer = new ExpressServer(
      config.URL_PORT,
      config.OPENAPI_YAML
    );
    expressServer.launch();
    logger.info("Express server running");
  } catch (error) {
    console.error("Express Server failure", error);
    logger.error("Express Server failure", { error });
  }
};

launchServer().catch((e) => logger.error(e));
