import User from "../modals/users.js";
// GET ALL
const getAll = async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    next(error);
  }
};

// GET :ID
const getById = async (req, res, next) => {
  const id = parseInt(req.params.id);
  try {
    const foundUser = await User.findByPk(id);
    if (!foundUser) {
      res.status(404).json({
        resCode: 404,
        resMessage: "User not found",
      });
    } else {
      res.status(200).json({
        resCode: 200,
        resMessage: "Success",
        data: foundUser,
      });
    }
  } catch (error) {
    next(error);
  }
};

// CREATE
const create = async (req, res, next) => {
  const { name, email } = req.body;
  try {
    const addedUser = await User.create({
      name: name,
      email: email,
    });
    res.status(201).json(addedUser);
  } catch (error) {
    next(error);
  }
};

// UPDATE :ID
const updateById = async (req, res, next) => {
  const id = parseInt(req.params.id);
  const { name, email } = req.body;
  try {
    const foundUser = await User.findByPk(id);
    if (!foundUser) {
      res.status(404).json({
        resCode: 404,
        resMessage: "User not found",
      });
    } else {
      await foundUser.update({
        name,
        email,
      });
      res.status(200).json({
        resCode: 200,
        resMessage: "Success",
        data: foundUser,
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
    const foundUser = await User.findByPk(id);
    if (!foundUser) {
      res.status(404).json({
        resCode: 404,
        resMessage: "User not found",
      });
    } else {
      await foundUser.destroy();
      res.status(200).json({
        resCode: 200,
        resMessage: "User deleted successfully",
        data: foundUser,
      });
    }
  } catch (error) {
    next(error);
  }
};

//export
export { getAll, getById, create, updateById, deleteById };
