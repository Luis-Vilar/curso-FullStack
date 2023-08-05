const Category = require("../models/category");

module.exports = {
  async index(req, res) {
    const categories = await Category.findAll();

    return res.json(categories);
  },
  async store(req, res) {
    try {
      const { name, created_at } = req.body;

      const category = await Category.create({
        name,
        created_at,
        updated_at: Date.now(),
      });

      return res
        .status(201)
        .send({ message: "Categoria adiccionada corretamente", category });
    } catch (error) {
      return res.status(400).json({ error: "Erro ao cadastrar categoria" });
    }
  },
};
