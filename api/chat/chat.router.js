const router = require("express").Router();
const controller = require("./chat.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.use((req, res, next) => {
    console.log(`(At Router)Incoming request: ${req.method} ${req.path}`);
    next();
  });

router.route("/") 
    .post(controller.listResponse)
    .all(methodNotAllowed);

module.exports = router;


