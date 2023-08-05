const { DATE } = require("sequelize");
const Contract = require("../models/contracts");

// Ao desativar um contrato, não é permitido ativar novamente FALTA.

function validateBody(res, body) {
  const {
    trainee_id,
    category_id,
    company_id,
    start_validity,
    end_validity,
    remuneration,
    extra,
  } = body;
  if (
    !trainee_id ||
    !category_id ||
    !company_id ||
    !start_validity ||
    !end_validity ||
    !remuneration ||
    !extra
  ) {
    return res
      .status(400)
      .json({ error: "Preencha todos os dados corretamente..." });
  }
}

module.exports = {
  async index(req, res) {
    const contracts = await Contract.findAll({
      attributes: [
        "id",
        "start_validity",
        "end_validity",
        "status",
        "remuneration",
        "extra",
        "created_at",
        "updated_at",
      ],
      include: [
        {
          association: "trainee",
          attributes: ["name", "email", "cpf", "rg"],
        },
        {
          association: "category",
          attributes: ["name"],
        },
        {
          association: "company",
          attributes: ["company_name", "cnpj", "contact"],
        },
      ],
    });
    res.json(contracts);
  },

  async show(req, res) {
    const { id } = req.params;
    const contract = await Contract.findOne({
      where: {
        id,
      },
      attributes: [
        "id",
        "start_validity",
        "end_validity",
        "status",
        "remuneration",
        "extra",
        "created_at",
        "updated_at",
      ],
      include: [
        {
          association: "trainee",
          attributes: ["name", "email", "cpf", "rg"],
        },
        {
          association: "category",
          attributes: ["name"],
        },
        {
          association: "company",
          attributes: ["company_name", "cnpj", "contact"],
        },
      ],
    });
    res.json(contract);
  },

  async store(req, res) {
    validateBody(res, req.body);
    const {
      trainee_id,
      category_id,
      company_id,
      start_validity,
      end_validity,
      remuneration,
      extra,
    } = req.body;
    const contract = await Contract.create({
      trainee_id,
      category_id,
      company_id,
      start_validity,
      end_validity,
      status: true,
      remuneration,
      extra,
      created_at: Date.now(),
      updated_at: Date.now(),
    });
    res.json(contract);
  },

  async deactivate(req, res) {
    const { id } = req.params;
    const { status } = req.body;

    const validateContractStatus = await Contract.findOne({
      where: {
        id,
      },
    });
    if (validateContractStatus.status === false && status === true) {
      return res.status(400).json({
        error: "Não é possível ativar novamente  um contrato desativado",
      });
    }
    const contract = await Contract.update(
      {
        status,
      },
      {
        where: {
          id,
        },
      }
    );
    res
      .status(200)
      .send({ message: `Contrato com  id : ${id} foi desativado` });
  },

  async del(req, res) {
    const { id } = req.params;
    const contract = await Contract.destroy({
      where: {
        id,
      },
    });
    res.json(contract);
  },
};
