const knex = require("../db/connection")

function list(){
    return knex('estimates')
    .select("*")
}

module.exports ={
    list,
}