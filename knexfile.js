const path = require("path");
require("dotenv").config();

const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL) {
  console.error("DATABASE_URL not set");
  process.exit(1);
}

module.exports = {
  development: {
    client: "postgresql",
    connection: DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, 'migrations')
    }
  },
  production: {
    client: "postgresql",
    connection: {
      connectionString: DATABASE_URL,
      ssl: {
        rejectUnauthorized: true, // Enable certificate validation
        ca: process.env.DATABASE_SSL_CA // Include the CA certificate
      },
    },
    migrations: {
      directory: path.join(__dirname, 'migrations')
    }
  },
};
