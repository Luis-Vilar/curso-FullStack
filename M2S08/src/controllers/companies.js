const Companies = require("../models/companies");

async function validateCnpj(res, cnpj) {
  const company = await Companies.findOne({
    where: {
      cnpj,
    },
  });
  if (company) {
    return res.status(400).json({ error: "CNPJ já cadastrado" });
  }
}

function validateBody(res, body) {
  const {
    cnpj,
    company_name,
    contact,
    cep,
    address,
    neighborhood,
    city,
    state,
    number,
    complement,
    rh_analyst_name,
    supervisor_name,
  } = body;
  if (
    !cnpj ||
    !company_name ||
    !contact ||
    !cep ||
    !address ||
    !neighborhood ||
    !city ||
    !state ||
    !number ||
    !complement ||
    !rh_analyst_name ||
    !supervisor_name
  ) {
    return res
      .status(400)
      .json({ error: "Dados Preencha todos os dados corretamente..." });
  }
}
module.exports = {
  async index(req, res) {
    const companies = await Companies.findAll();
    res.status(200).send(companies);
  },
  async show(req, res) {
    const { id } = req.params;
    const company = await Companies.findByPk(id);
    res.status(200).send(company);
  },
  async store(req, res) {
    validateBody(res, req.body);
    validateCnpj(res, req.body.cnpj);
    const {
      cnpj,
      company_name,
      contact,
      cep,
      address,
      neighborhood,
      city,
      state,
      number,
      complement,
      rh_analyst_name,
      supervisor_name,
    } = req.body;
    try {
      const company = await Companies.create({
        cnpj,
        company_name,
        contact,
        cep,
        address,
        neighborhood,
        city,
        state,
        number,
        complement,
        rh_analyst_name,
        supervisor_name,
      });
      res
        .status(201)
        .send({ message: "Compania addicionada corretamente", company });
    } catch (error) {
      res.status(400).json({ error: "Erro ao cadastrar compania" });
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params;
      const {
        cnpj,
        company_name,
        contact,
        cep,
        address,
        neighborhood,
        city,
        state,
        number,
        complement,
        rh_analyst_name,
        supervisor_name,
      } = req.body;
      const company = await Companies.update(
        {
          cnpj,
          company_name,
          contact,
          cep,
          address,
          neighborhood,
          city,
          state,
          number,
          complement,
          rh_analyst_name,
          supervisor_name,
        },
        {
          where: {
            id,
          },
        }
      );
      res.status(200)({
        message: "Companhia atualizada corretamente ...",
        company,
      });
    } catch (error) {
      res.status(400).json({ error: "Erro ao atualizar companhia" });
    }
  },
};
