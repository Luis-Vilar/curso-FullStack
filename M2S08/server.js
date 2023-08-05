// dependencias
const express = require("express");
const cors = require("cors");

// classe server
class Server {
  // constructor de classe
  constructor(app = express()) {
    this.routes(app);
    this.middlewares(app);
    this.database();
    this.initializeServer(app);
  }
  // middlewares
  async middlewares(app) {
 
    app.use(cors());
    app.use(express.json());
  }
  // connect database
  async database() {
    const connection = require("./database/connection");
    try {
      await connection.authenticate();
      console.log("Conexão com o banco de dados estabelecida com sucesso!");
    } catch (error) {
      console.error("Não foi possível conectar com o banco de dados:", error.message);
    }
  }
  // start server
  async initializeServer(app) {
    const PORT = 3334;
    app.listen(PORT, () => console.log(`Servidor executando na porta ${PORT}`));
  }
  async routes(app) {
    const routes = require("./routes");
    app.use(routes);
  }
}

module.exports = { Server };
