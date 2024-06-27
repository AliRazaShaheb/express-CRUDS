import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const connectionObj = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

const sequelize = new Sequelize(
  connectionObj.database,
  connectionObj.user,
  connectionObj.password,
  {
    host: connectionObj.host,
    port: connectionObj.port,
    dialect: "mysql",
  }
);

// Sync the database
sequelize
  .sync()
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

export default sequelize;
