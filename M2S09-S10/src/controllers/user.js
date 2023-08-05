const { User } = require("../models/user");
const { sign } = require("jsonwebtoken");
const { config } = require("dotenv");
const { Role } = require("../models/role");
const { Permission } = require("../models/permissions");
config();

class UserController {
  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
  async show(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
  async store(req, res) {
    try {
      const { traineeId, name, email, password } = req.body;
      const user = await User.create({ traineeId, name, email, password });
      return res.status(201).json(user);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
  async loginUser(request, response) {
    try {
      const { email, password } = request.body;

      console.log(`Tentando logar com o email ${email} e senha ${password}`);
      const user = await User.findOne({
        where: { email: email },
        include: [
          {
            model: Role,
            as: "roles",
            through: { attributes: [] },
            include: [
              {
                model: Permission,
                as: "permissions",
                through: { attributes: [] },
              },
            ],
          },
        ],
      });
      if (!user){ throw new Error('Usuário não encontrado')}
      if (user.password === password) {
        const payload = { email: user.email, roles: user.roles };

        const token = sign(payload, process.env.SECRET);
        return response.status(200).send({ token });
      } else {
        console.log("Senha Diferente");
        return response.status(400).send({ msg: "Senha Invalida" });
      }
    } catch (error) {
      return response.status(401).send({
        message: `Falha na autenticação para o usuário ${request.body.email}`,
        cause: error.message,
      });
    }
  }
}

module.exports = new UserController();
