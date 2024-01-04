const path = require("path");
require("dotenv").config();


const {
  DATABASE_URL = "postgres://kwjpntag:6_8ATAh8a94TKpAyNrZeDpHBdjFIvjyR@castor.db.elephantsql.com/kwjpntag",
} = process.env;

module.exports = {
  development: {
    client: "postgresql",
    connection: DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, 'migrations') 
    }
  },
};