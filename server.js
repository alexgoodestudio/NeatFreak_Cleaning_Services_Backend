require("dotenv").config();
const express = require("express");
const app = express();
const knex = require("./api/db/connection");
const requestRouter = require("./api/request/request.router");
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use("/request", requestRouter);

app.get('/', (req, res) => {
  res.redirect('/request/');
});

app.use((req, res, next) => {
  next({ status: 404, message: `Not found: ${request.originalUrl}` });
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message });
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





  