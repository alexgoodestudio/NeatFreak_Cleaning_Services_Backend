// const env = process.env.NODE_ENV || "development";
// const config = require("../../knexfile")[env];
// const knex = require("knex")(config);


// module.exports = knex;

const config = require('../../knexfile')[process.env.NODE_ENV || 'development'];
const knex = require('knex')(config);

module.exports = knex;

