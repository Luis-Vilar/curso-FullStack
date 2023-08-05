const { INTEGER, STRING, DATE } = require('sequelize')
const connection  = require('../database/connection')


const User = connection.define("users", {
    traineeId: {
        type: INTEGER,
        references: {
            model: {
                tablename: 'trainee',
            },
            key: 'id'
        },
        allowNull: true
    },
    name: STRING,
    email: {
        type: STRING,
        validate:{
            isEmail: {msg: "Email Invalido"}
        },
        unique: {msg: "Email já existe"}
    },
    password: {
        type: STRING,
        validate:{
            len:{args:[1,100], msg: "Senha precisa ter entre 5 a 10 char."}
        
        }
    },
    createdAt: DATE,
    updatedAt: DATE
},{underscored: false})

module.exports = { User }