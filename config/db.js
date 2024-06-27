import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const connectionObj = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

const pool = mysql.createPool(connectionObj);

const promisePool = pool.promise();

export default promisePool;
