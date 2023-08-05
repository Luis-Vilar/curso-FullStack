const traineeRoutes = require("express").Router();
const {index, show, store, update} = require("../../controllers/trainee.js");

traineeRoutes.post("/trainees", store);
traineeRoutes.get("/trainees", index);
traineeRoutes.get("/trainees/:id", show);
traineeRoutes.put("/trainees/:id", update);

module.exports = traineeRoutes;


