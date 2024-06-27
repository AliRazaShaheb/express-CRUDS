const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    resCode: 500,
    resMessage: "Internal Server Error",
    error: process.env.NODE_ENV === "production" ? null : err.message,
  });
};

export default errorHandler;
