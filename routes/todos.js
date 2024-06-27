import express from "express";
import {
  createTodos,
  geTodosById,
  getAllTodos,
  updateTodosById,
  deleteTodosById,
} from "../controllers/todos.js";

const todosRouter = express.Router();

todosRouter.get("/", getAllTodos);
todosRouter.get("/:id", geTodosById);
todosRouter.post("/", createTodos);
todosRouter.put("/:id", updateTodosById);
todosRouter.delete("/:id", deleteTodosById);

export default todosRouter;
