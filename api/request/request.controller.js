const service = require("./request.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");


async function list(req, res) {
  const data = await service.list();
  res.status(200).json({ data }); 
}

async function create(req, res) {
    const data = await service.create(req.body.data);
    res.status(201).json({ data });
  }

  
  
    module.exports = {
      list: [asyncErrorBoundary(list)],
      create:[asyncErrorBoundary(create)],

  };