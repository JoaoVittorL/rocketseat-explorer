require("express-async-errors");
const migrationRun = require("./database/sqlite/migrations");
const AppError = require("./utils/AppError");

const express = require("express");
const routes = require("./routes");

migrationRun();

const app = express();

const port = 3000;
app.use(express.json());

app.use(routes);

app.use((error, req, res, next) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: "error",
      message: error.message,
    });
  }

  console.error(error);
  return express.response.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
