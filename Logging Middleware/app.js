const express = require("express");
const Log = require("./logger");

const app = express();
app.use(express.json());

// Middleware logging
app.use((req, res, next) => {
  Log("backend", "info", "middleware", `${req.method} ${req.url}`);
  next();
});

// Sample route
app.get("/", async (req, res) => {
  try {
    Log("backend", "info", "route", "Root route hit");

    res.send("Hello World");

  } catch (err) {
    Log("backend", "error", "route", err.message);
    res.status(500).send("Error");
  }
});

module.exports = app;