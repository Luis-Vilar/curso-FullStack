const userJsonRoutes = require("express").Router();
const {  fitrarUsuarios, atualizarUsuario , deletarUsuario, buscarUsuario} = require("../../controllers/userJsonController");

userJsonRoutes.get("/filtrarUsuarios", fitrarUsuarios);
userJsonRoutes.put("/atualizarUsuarios/:id", atualizarUsuario);
userJsonRoutes.delete("/deletarUsuarios/:id", deletarUsuario);
userJsonRoutes.get("/buscarUsuario/:id", buscarUsuario);



module.exports = userJsonRoutes;


