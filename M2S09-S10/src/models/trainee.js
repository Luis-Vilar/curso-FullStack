const connection = require("../database/connection");
const { STRING, DATE, BOOLEAN, INTEGER } = require("sequelize");


const Trainee = connection.define(
  "trainees",
  {

    name: STRING,
    email: STRING,
    rg: {
      type: STRING,
      validate: {
        len: {
          args: [7, 20],
          msg: "O Rg deve ter no mínimo 7 dígitos",
        },
      },
      unique: {
        msg: "Este campo já está na aplicação",
      },
    },
    cpf: {
      type: STRING,
      validate: {
        len: {
          args: [11, 11],
          msg: "Este campo deve ter exatamente 11 caracteres.",
        },
      },
      unique: {
        msg: "Este campo já está na aplicação",
      },
    },
    primary_phone_contact: STRING,
    secondary_phone_contact: STRING,
    date_birth: DATE,
    father_name: STRING,
    mother_name: STRING,
    have_special_needs: BOOLEAN,
    create_at: DATE,
    updated_at: DATE,
  },
  {
    underscored: true,
    timestamps: false,
  }
);
module.exports = Trainee;
