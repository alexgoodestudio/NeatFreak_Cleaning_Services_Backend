const service = require("./chat.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const findBestResponse = require("../middleware/findBestResponse.js")
const emptyChatbot = require("../middleware/emptyChatbot.js")

async function listResponse(req, res, next) {
  console.log("(Chat Controller)Received request at /responses");
  const responseId = req.match; 
  const data = await service.listResponse(responseId);
  console.log("ChatController after AWAIT",data)
  res.status(200).json({ data });
}

module.exports = {
  listResponse: [emptyChatbot, findBestResponse, asyncErrorBoundary(listResponse)],
};