import express from "express";
import {
  create,
  deleteById,
  getAll,
  getById,
  updateById,
} from "../controllers/tasks.js";

const tasksRouter = express.Router();

// prettier-ignore
tasksRouter.route("/")
    .get(getAll)
    .post(create);

// prettier-ignore
tasksRouter.route("/:id")
    .get(getById)
    .put(updateById)
    .delete(deleteById);

export default tasksRouter;
