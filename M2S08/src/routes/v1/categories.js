const categoriesRoutes = require("express").Router();
const { index, store } = require("../../controllers/category");

categoriesRoutes.get("/categories", index);
categoriesRoutes.post("/categories", store);

module.exports = categoriesRoutes;
