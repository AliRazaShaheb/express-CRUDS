import express from "express";

const authRouter = express.Router();

authRouter.post("/register", (req, res) => {
  res.status(201).json({
    resCode: 201,
    resMessage: "user has been created",
  });
});

export default authRouter;
