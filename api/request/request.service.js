const knex = require("../db/connection")

function list(){
    return knex('estimate')
        .select("*")
}

function create(newEstimate) {
    return knex('estimate')
        .insert(newEstimate)
        .returning("*")
        .then((data) => data[0]);
    }
      
        module.exports = {
          list,
          create,
      };