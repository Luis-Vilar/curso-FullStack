const userRoutes = require("express").Router();
const { resolver } = require("../../controllers/userController");

userRoutes.patch("/users", resolver);

module.exports = userRoutes;
