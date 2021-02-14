const express = require("express");
const app = express();

const chalk = require("chalk");
const compression = require("compression");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");

// Database Connection
const connectDB = require("./connect");
connectDB();

// Middlewares
app.use(express.json());
app.use(compression());
app.use(cors());

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "client/build")));
// Index Router
app.use("/", require("./routes"));
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});
// Error Handler
app.use((error, req, res, next) => {
  console.error(chalk.red(error.message));
  res.status(error.statusCode || 500).json({
    error: true,
    name: error.name || "ServerError",
    message: error.message || "An Error Occured",
    route: req.url,
  });
});

module.exports = app;
