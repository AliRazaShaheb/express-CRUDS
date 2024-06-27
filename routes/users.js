import express from "express";
import {
  getAll,
  create,
  deleteById,
  getById,
  updateById,
} from "../controllers/users.js";
import { validate } from "../middlewares/validate.js";
import { createUserSchema } from "../schema/users.schema.js";

const router = express.Router();

// prettier-ignore
router.route("/")
    .get(getAll)
.post(validate(createUserSchema),create);

// prettier-ignore
router.route("/:id")
    .get(getById)
    .put(updateById)
    .delete(deleteById);

export default router;
