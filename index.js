import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import todosRouter from "./routes/todos.js";
import errorHandler from "./middlewares/errorHandler.js";
import tasksRouter from "./routes/tasks.js";
import usersRouter from "./routes/users.js";
import sequelize from "./config/db-mysql-sequelize.js";

//dotenv parser
dotenv.config();

const PORT = process.env.PORT || 8000;

// initialize app
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use("/todos", todosRouter);
app.use("/tasks", tasksRouter);
app.use("/users", usersRouter);

app.use(errorHandler);

// test endpoints
app.get("/", (req, res) => {
  return res.status(200).json({
    resCode: "200",
    message: "hello world",
  });
});

// app is listening
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
