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

// function read(estimateId){
//     return knex('estimate')
//         .select("*")
//         .where({estimate_id : estimateId})
//         .first();
// }
      
        module.exports = {
          list,
          create,
        //   read
      };