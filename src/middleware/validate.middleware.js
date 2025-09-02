export const validate = (schemas) => {
  return (req, res, next) => {
    const validationTargets = ["body", "query", "params"];

    for (const target of validationTargets) {
      if (schemas[target]) {
        const { error } = schemas[target].validate(req[target], {
          abortEarly: false,
        });

        if (error) {
          return res.status(400).json({
            status: "fail",
            message: "Validation error",
            details: error.details.map((d) => d.message),
          });
        }
      }
    }

    next();
  };
};
