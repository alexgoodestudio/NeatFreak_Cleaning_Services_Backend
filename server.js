require("dotenv").config();
const express = require("express");
const app = express();
const knex = require("./api/db/connection");
const requestRouter = require("./api/request/request.router");
const cors = require('cors');
app.use(cors());

app.use(express.json());

app.use("/request", requestRouter);

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
      console.log(`Listening on Port ${PORT}!`);
    });
  })
  .catch((error) => {
    console.error(error);
    knex.destroy();
  });





  