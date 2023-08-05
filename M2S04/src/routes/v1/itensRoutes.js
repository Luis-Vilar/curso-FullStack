const itensRoutes = require("express").Router();
const {createItem} = require("../../controllers/itensController");

itensRoutes.post('/itens', createItem);

  module.exports = itensRoutes;
