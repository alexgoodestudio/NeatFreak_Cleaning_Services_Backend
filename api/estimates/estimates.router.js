const router = require("express").Router();
const controller = require("./estimates.controller");
const methodNotAllowed = require("..methodNotAllowed/errors/")

router
    .route("/:estimate_id")
    .get(controller.read)
    .post(constroller.update)
    .all(methodNotAllowed)

router
    .route("/")
    .get(controller.list)
    .post(constroller.post)
    .all(methodNotAllowed)

    module.exports = router;