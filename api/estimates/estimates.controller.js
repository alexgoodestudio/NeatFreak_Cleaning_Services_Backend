const service = require("./estimates.service")
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");


async function read(req, res) {

}

async function update(req, res) {

}

async function list(req, res) {
    const data = await service.list();
    res.status(201).json({ data });
}

async function post(req, res) {

}

module.exports = {
    read, update, list, post
}