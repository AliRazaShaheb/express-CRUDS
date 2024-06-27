import { resData, resData1 } from "../data/index.js";

// GET
const getAllTodos = (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  const startIndex = (page - 1) * limit; //0
  const endIndex = page * limit; //10

  const paginatedData = resData
    .filter((each) => each.delete !== "1")
    .slice(startIndex, endIndex);
  const totalEntry = resData.length;
  const totalPages = Math.ceil(totalEntry / limit);
  const response = {
    total: totalEntry,
    data: paginatedData,
    page,
    limit,
    totalPages,
  };

  if (page > totalPages) {
    return res.status(400).json({
      resStatus: 400,
      resMessage: "Failed! Page does not exist",
    });
  }

  return res.status(200).json({
    resStatus: 200,
    resMessage: "Success",
    ...response,
  });
};

// GET:id
const geTodosById = (req, res) => {
  const id = req.params.id;
  const found = resData.find((each) => each.id === id);
  if (!found) {
    return res.status(400).json({
      resStatus: 400,
      resMessage: "Failed! Data does not exist",
    });
  }

  return res.status(200).json({
    resStatus: 200,
    resMessage: "Success",
    data: found,
  });
};

//CREATE
const createTodos = (req, res) => {
  const { label, value } = req.body;
  if (!label || !value) {
    return res.status(400).json({
      resStatus: 400,
      resMessage: "Label and Value is mandatory",
    });
  }
  resData.push({
    id: `${resData.length + 1}`,
    label,
    value,
  });
  return res.status(200).json({
    resStatus: 200,
    resMessage: "Todos added successfully",
  });
};

//UPDATE:ID
const updateTodosById = (req, res) => {
  const id = req.params.id;
  const { label, value } = req.body;
  const found = resData.find((each) => each.id === id);

  if (!found) {
    return res.status(400).json({
      resStatus: 400,
      resMessage: "Failed! Data does not exist",
    });
  }

  if (label) {
    found.label = label;
  }
  if (value) {
    found.value = value;
  }

  return res.status(200).json({
    resStatus: 200,
    resMessage: "Todos update successfully",
    data: found,
  });
};
const deleteTodosById = (req, res) => {
  const id = req.params.id;
  const found = resData.find((each) => each.id === id);

  if (!found) {
    return res.status(400).json({
      resStatus: 400,
      resMessage: "Failed! Data does not exist",
    });
  }

  found.delete = "1";

  return res.status(200).json({
    resStatus: 200,
    resMessage: "Todos deleted successfully",
  });
};

//DELETE:ID

export {
  getAllTodos,
  geTodosById,
  createTodos,
  updateTodosById,
  deleteTodosById,
};
