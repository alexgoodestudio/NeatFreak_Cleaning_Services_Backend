require("dotenv").config();
const express = require("express");
const path = require('path'); // Add this line
const app = express();
const knex = require("./api/db/connection");
const requestRouter = require("./api/request/request.router");
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use("/request", requestRouter);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build'))); // Add this line

// All non-API requests to index.html
app.get('*', (req, res) => { // Add this route
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use((request, _response, next) => {
  next({ status: 404, message: `Not found: ${request.originalUrl}` });
});

app.use((error, _request, response, _next) => {
  console.error(error);
  const { status = 500, message = "Something went wrong!" } = error;
  response.status(status).json({ errors: [message] });
});

const PORT = process.env.PORT || 5001;
knex.migrate.latest()
  .then((migrations) => {
    console.log("migrations", migrations);
    app.listen(PORT, () => {
      console.log(`${PORT}!`);
    });
  })
  .catch((error) => {
    console.error(error);
    knex.destroy();
  });
