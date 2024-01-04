const knex = require("../../knexfile")

function create(newEstimate) {
    return knex('estimate')
        .insert(newEstimate)
        .returning("*")
        .then((data) => data[0]);
    }

    async function list(req, res) {
        const data = await service.list();
        res.status(200).json({ data }); 
      }
      
      
        module.exports = {
          create,
          list
  
      };