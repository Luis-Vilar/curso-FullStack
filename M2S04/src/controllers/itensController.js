const fs = require("fs/promises");
const databasePath = "src/database/itens.json";

async function createItem(req, res) {
  const { item, valor } = req.body;
  const post = { item, valor };
  const database = JSON.parse(await fs.readFile(databasePath));
  const listaDeItens = [...database];
  listaDeItens.push(post);

  try {
    await fs.writeFile(databasePath, JSON.stringify(listaDeItens));
    return res
      .status(201)
      .json({ message: "Item criado com sucesso!", item: post });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
}

module.exports = {
  createItem,
};
