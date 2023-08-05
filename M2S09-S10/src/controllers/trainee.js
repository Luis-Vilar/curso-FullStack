const Trainee = require("../models/trainee");

async function validateBody(body, res) {
  const {
    name,
    email,
    rg,
    cpf,
    primary_phone_contact,
    secondary_phone_contact,
    date_birth,
    father_name,
    mother_name,
    have_special_needs,
  } = body;

  if (
    !name ||
    !email ||
    !rg ||
    !cpf ||
    !primary_phone_contact ||
    !secondary_phone_contact ||
    !date_birth ||
    !father_name ||
    !mother_name ||
    have_special_needs === null ||
    have_special_needs === undefined
  ) {
    res.status(400)
    throw new Error("Campos obrigatórios não preenchidos");

  }
}

async function validateCpfAndRg(cpf, rg, res) {
  const cpfExist = await Trainee.findOne({
    where: {
      cpf,
    },
  });
  const rgExist = await Trainee.findOne({
    where: {
      rg,
    },
  });

  if (cpfExist || rgExist) {
     res.status(400);
    throw new Error("Cpf ou Rg já cadastrado");
  }
}

module.exports = {
  async index(req, res) {
    const trainee = await Trainee.findAll();
    res.json(trainee);
  },
  async show(req, res) {
    const { id } = req.params;
    const trainee = await Trainee.findByPk(id);
    res.json(trainee);
  },
  async store(req, res) {
    const body = req.body;

    try {
      await validateBody(body, res);

      const {
        name,
        email,
        rg,
        cpf,
        primary_phone_contact,
        secondary_phone_contact,
        date_birth,
        father_name,
        mother_name,
        have_special_needs,
      } = req.body;

      await validateCpfAndRg(cpf, rg, res);
      const trainee = await Trainee.create({
        name,
        email,
        rg,
        cpf,
        primary_phone_contact,
        secondary_phone_contact,
        date_birth,
        father_name,
        mother_name,
        have_special_needs,
        create_at: Date.now(),
        updated_at: Date.now(),
      });
      return res
        .status(201)
        .send({ message: "Usuario cadastrado ..", trainee });
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params;
      const {
        name,
        email,
        rg,
        cpf,
        primary_phone_contact,
        secondary_phone_contact,
        date_birth,
        father_name,
        mother_name,
        have_special_needs,
      } = req.body;

      const trainee = await Trainee.update(
        {
          name,
          email,
          rg,
          cpf,
          primary_phone_contact,
          secondary_phone_contact,
          date_birth,
          father_name,
          mother_name,
          have_special_needs,
          updated_at: new Date(Date.now()),
        },
        {
          where: {
            id,
          },
        }
      );
      res.status(200).send({ message: "Usuario atualizado .." });
    } catch (error) {
      res.status(400).json({ error: "Erro ao atualizar estagiário" });
    }
  },
};
