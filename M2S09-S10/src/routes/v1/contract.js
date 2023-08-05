const contractRoutes = require("express").Router();
const {del, index, show, store,  deactivate } = require("../../controllers/contract.js");

contractRoutes.get("/contracts", index);
contractRoutes.get("/contracts/:id", show);
contractRoutes.post("/contracts", store);
contractRoutes.patch("/contracts/:id", deactivate);
contractRoutes.delete("/contracts/:id", del);


module.exports = contractRoutes;

