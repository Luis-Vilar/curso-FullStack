const { json } = require("express");
const fs = require("fs");
const databasePath = "src/database/user.json";

module.exports = {
  async fitrarUsuarios(requisição, resposta) {
    const { ageMin, ageMax, state, job } = requisição.query;
    const database = JSON.parse(fs.readFileSync(databasePath));
    let busqueda = [...database];

    if (ageMin) {
      busqueda = [...busqueda.filter((users) => users.age > ageMin)];
    }

    if (ageMax) {
      busqueda = [...busqueda.filter((users) => users.age < ageMax)];
    }

    if (job) {
      busqueda = [...busqueda.filter((users) => users.job == job)];
    }
    if (state) {
      busqueda = [...busqueda.filter((users) => users.state == state)];
    }

    if (!ageMin && !ageMax && !job && !state) {
      return resposta
        .status(400)
        .json("querys invalidas para a filtragem de usuários...");
    }
    if (busqueda.length > 0) {
      return resposta.status(200).json(busqueda);
    }
  },
  async atualizarUsuario(requisição, resposta) {
    const id = requisição.params.id;
    const { name, age, job, state } = requisição.body;
    const database = JSON.parse(fs.readFileSync(databasePath));
    let busca = [...database];
    let mudancas = [];

    busca.map((item) => {
      if (item.id == id) {
        if (name) {
          let nameAlterado = true;
          item.name != name ? (item.name = name) : (nameAlterado = false);
          nameAlterado && mudancas.push("Nome alterado");
        }
        if (age) {
          let ageAlterado = true;
          item.age != age ? (item.age = age) : (ageAlterado = false);
          ageAlterado && mudancas.push("Idade alterada");
        }
        if (job) {
          let jobAlterado = true;

          item.job != job ? (item.job = job) : (jobAlterado = false);
          jobAlterado && mudancas.push("Profissão alterada");
        }
        if (state) {
          let stateAlterado = true;
          item.state != state ? (item.state = state) : (stateAlterado = false);
          stateAlterado && mudancas.push("Estado alterado");
        }
        fs.writeFileSync(databasePath, JSON.stringify(busca));

        mudancas.length > 0
          ? resposta.status(200).json({ alterado: mudancas })
          : resposta.status(400).json("Não há nada para alterar!");
      }
    });
  },
  async deletarUsuario(requisição, resposta) {
    const id = requisição.params.id;
    const database = JSON.parse(fs.readFileSync(databasePath));
    let busca = [...database];
    let deletado = false;

    busca.map((item) => {
      if (item.id == id) {
        busca.splice(busca.indexOf(item), 1);
        fs.writeFileSync(databasePath, JSON.stringify(busca));
        deletado = true;
      }
    });
    deletado
      ? resposta.status(200).json("Usuário deletado com sucesso!")
      : resposta.status(400).json("Usuário não encontrado!");
  },
  async buscarUsuario(requisição, resposta) {
    const id = requisição.params.id;
    const database = JSON.parse(fs.readFileSync(databasePath));
    let busca = [...database];
    let encontrado = false;
    let nome = "";

    busca.map((item) => {
      if (item.id == id) {
        nome = item.name;
        encontrado = true;
      }
    });
    encontrado
      ? resposta.status(200).json(`O nome do usuário é ${nome}`)
      : resposta.status(400).json(`Usuário não encontrado no id ${id}`);
  },
};

