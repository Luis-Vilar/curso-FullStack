const stringConverterRoutes = require("express").Router();
const {stringConverter} = require("../../controllers/stringConverterController.js");

stringConverterRoutes.post("/stringConverter", stringConverter);

module.exports = stringConverterRoutes;
