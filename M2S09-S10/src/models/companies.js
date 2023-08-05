const connection = require("../database/connection");
const { STRING, DATE } = require("sequelize");
const Companies = connection.define(
  "companies",
  {
    id: { type: STRING, primaryKey: true },
    cnpj: STRING,
    company_name: STRING,
    contact: STRING,
    cep: STRING,
    address: STRING,
    neighborhood: STRING,
    city: STRING,
    state: STRING,
    number: STRING,
    complement: { type: STRING, allowNull: true },
    rh_analyst_name: STRING,
    supervisor_name: STRING,
    created_at: DATE,
    updated_at: DATE,
  },
  {
    underscored: true,
    timestamps: false,
  }
);
module.exports = Companies;
