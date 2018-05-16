const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");

module.exports = function(server) {
  server.use(helmet());
  server.use(morgan("dev"));
  server.use(express.json());
  server.use(cors());
};
