const empty = require("../middleware/emptySubscribeForm");
const service = require("./request.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const emailExists = require("../middleware/emailExists");

async function list(req, res) {
  const data = await service.list();
  res.status(200).json({ data });
}

async function create(req, res) {
  const data = await service.create(req.body.data);
  res.status(201).json({ data });
}

async function read(req, res, next) {
  const { estimate_id } = req.params;
  try {
    const data = await service.read(estimate_id);
    if (data) {
      res.json({ data });
    } else {
      res.status(404).json({ error: "Estimate not found" });
    }
  } catch (error) {
    next(error);
  }
}


async function destroy(req, res) {
  const { estimate_id } = req.params;
  await service.destroy(estimate_id); 
  res.status(204).end(); 
}

module.exports = {
  list: asyncErrorBoundary(list),
  create: [empty, emailExists, asyncErrorBoundary(create)],
  read: asyncErrorBoundary(read),
  destroy: asyncErrorBoundary(destroy)
};