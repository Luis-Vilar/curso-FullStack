const { Router } = require("express");
const router = Router();

const traineeRoutes = require("./v1/trainee.js");
const companiesRoutes = require("./v1/companies.js");
const contractRoutes = require("./v1/contract.js");
const categoriesRoutes = require("./v1/categories.js");

router.use([traineeRoutes, companiesRoutes, contractRoutes, categoriesRoutes]);

module.exports =  router ;
