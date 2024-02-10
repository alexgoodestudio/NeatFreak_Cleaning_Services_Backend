const knex = require("../db/connection")

function list() {
  return knex('estimate')
    .select("*")
}

function create(newEstimate) {
  return knex('estimate')
    .insert(newEstimate)
    .returning("*")
    .then((data) => data[0]);
}

function read(id) {
  return knex('estimate')
    .select("*")
    .where({ estimate_id: id }) 
    .first();
}
function readEmail(email) {
  return knex('estimate')
    .select("*")
    .where({ email_address: email }) 
    .first();
}

function destroy(id) {
  return knex('estimate')
    .where({ estimate_id: id }) 
    .del();
}

module.exports = {
  list,
  create,
  read,
  readEmail,
  destroy,
};