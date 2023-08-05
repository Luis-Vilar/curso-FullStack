const companyRoutes = require("express").Router();
const CompanyController = require("../../controllers/companies.js");

companyRoutes.get("/companies", CompanyController.index);
companyRoutes.get("/companies/:id", CompanyController.show);
companyRoutes.post("/companies", CompanyController.store);
companyRoutes.put("/companies/:id", CompanyController.update);

module.exports = companyRoutes;
/**
 * /companies - POST - Cadastrar uma nova empresa no banco de dados
/companies - GET - Listar todas as empresas do banco de dados
/companies/:id - GET - Exibe as informações especificas de uma empresa
/companies/:id - PUT - Atualiza as informações de um empresa especifica
 */