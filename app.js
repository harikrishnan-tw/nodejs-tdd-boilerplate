const express = require("express");
const todoRoutes = require("./routes/todo.routes");

const app = express();

app.use(express.json());

app.use("/todos", todoRoutes);

app.use((error, req, res, next) => {
  // this is hit when we receive any error from any api
  res.status(500).json({
    message: error.message,
  });
});

module.exports = app;
