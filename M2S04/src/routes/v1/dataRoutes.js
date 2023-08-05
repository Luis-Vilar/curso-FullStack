const dataRoutes = require("express").Router();
const { getDaysInMonth } = require("../../controllers/dataController");

dataRoutes.get("/data/:mes/:ano",getDaysInMonth);

module.exports = dataRoutes;
