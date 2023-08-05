// dependencias
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

// classe server
class Server {
  // constructor de classe
  constructor(app = express()) {
    this.middlewares(app);
    this.routes(app);
    this.database();
    this.startServer(app);
  }
  // middlewares
  async middlewares(app) {
    app.use(cors());
    app.use(express.json());
    app.use(morgan("combined"));
  }
  // connect database
  async database() {
    const connection = require("./database/connection");
    try {
      await connection.authenticate();
      console.log("Conexão com o banco de dados estabelecida com sucesso!");
    } catch (error) {
      console.error(
        "Não foi possível conectar com o banco de dados:",
        error.message
      );
    }
  }
  // initialize server
  async startServer(app) {
    const PORT = 3334;
    app.listen(PORT, () => console.log(`Servidor executando na porta ${PORT}`));
  }
  async routes(app) {
    const routes = require("./routes");
    app.use(routes);
  }
}

module.exports = { Server };
