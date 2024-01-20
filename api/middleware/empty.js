function empty(req, res, next) {
  const body = req.body.data.email_address;
  if (!body) {
    return next({
      status: 400,
      message: "Value cannot be empty",
    });
  }
  next();
}

module.exports = empty;
