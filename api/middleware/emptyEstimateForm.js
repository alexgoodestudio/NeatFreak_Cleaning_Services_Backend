
function emptyEstimateForm(req, res, next) {
    const email = req.body.data.email_address;
    const name = req.body.data.name;
    const address = req.body.data.address;
    console.log(email, name, address)
    res.locals.email_address = email;
    if (!email || !name || !address ) {
      return next({
        status: 400,
        message: "Input value cannot be empty",
      });
    }
    next();
  }
  
  module.exports = emptyEstimateForm;
  