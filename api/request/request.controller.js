const service = require("./request.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function create(req, res) {
    const data = await service.create(req.body.data);
    res.status(201).json({ data });
  }

  async function list(req, res) {
    const data = await service.list();
    res.status(200).json({ data }); 
  }
  
  
    module.exports = {
      create:[asyncErrorBoundary(create)],
      list: [asyncErrorBoundary(list)],

  };