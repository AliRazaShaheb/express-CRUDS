import db from "../config/db.js";

// GET ALL
const getAll = async (req, res, next) => {
  try {
    const q = "SELECT * FROM tasks";
    const [rows] = await db.query(q);
    res.json(rows);
  } catch (error) {
    next(error);
  }
};

// GET :ID
const getById = async (req, res, next) => {
  const id = parseInt(req.params.id);
  try {
    const q = "SELECT * FROM tasks WHERE id = ?";
    const [rows] = await db.query(q, [id]);
    res.json(rows);
  } catch (error) {
    next(error);
  }
};

// CREATE
const create = async (req, res, next) => {
  const { task_name } = req.body;
  try {
    const q = "INSERT INTO tasks(task_name) VALUES(?)";
    const value = [task_name];
    const [rows] = await db.query(q, [value]);
    if (rows.affectedRows > 0) {
      res.status(201).json({
        resCode: 201,
        resMessage: "Successfully added",
        insertId: rows.insertId,
      });
    } else {
      res.status(500).json({
        resCode: 500,
        resMessage: "Failed to add task",
      });
    }
  } catch (error) {
    next(error);
  }
};

// UPDATE :ID

const updateById = async (req, res, next) => {
  const id = parseInt(req.params.id);
  const { task_name } = req.body;
  try {
    const q = "UPDATE tasks SET task_name=? WHERE id=?";
    const value = [task_name, id];
    const [rows] = await db.query(q, [task_name, id]);
    if (rows.affectedRows > 0) {
      res.status(200).json({
        resCode: 200,
        resMessage: "Successfully updated",
        changedRows: rows.changedRows,
      });
    } else {
      res.status(404).json({
        resCode: 404,
        resMessage: "Task not found",
      });
    }
  } catch (error) {
    next(error);
  }
};

// DELETE :ID

const deleteById = async (req, res, next) => {
  const id = parseInt(req.params.id);
  try {
    const q = "DELETE FROM tasks WHERE id=?";
    const [rows] = await db.query(q, [id]);
    if (rows.affectedRows > 0) {
      res.status(200).json({
        resCode: 200,
        resMessage: "Successfully deleted",
      });
    } else {
      res.status(404).json({
        resCode: 404,
        resMessage: "Task not found",
      });
    }
  } catch (error) {
    next(error);
  }
};

//export
export { getAll, getById, create, updateById, deleteById };
