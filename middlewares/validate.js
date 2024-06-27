export const validate = (schema) => {
  return (req, res, next) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      next();
    } catch (err) {
      console.error(err);
      if (err.name === "ZodError") {
        const zodMessage = err.issues.map((each) => each.message).join(", ");
        res.status(400).json({
          message: zodMessage,
        });
      } else {
        res.status(500).json({
          message: "Internal server error",
        });
      }
    }
  };
};
