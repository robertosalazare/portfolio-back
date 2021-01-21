function validateSchema(validate) {
  return (req, res, next) => {
    const isValid = validate(req.body);

    if(isValid) {
      return next();
    }

    res.status(400).json({
      message: "Bad request, please provide the required fields."
    });
  }
}

module.exports = validateSchema;