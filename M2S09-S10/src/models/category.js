const  connection  = require('../database/connection');
const { STRING, DATE, INTEGER } = require('sequelize');
const Category = connection.define("categories", {
  id: { type: INTEGER, primaryKey: true },
  name: STRING,
  created_at: DATE,
  updated_at: DATE,
},{
  underscored : true,
  timestamps : false,
});
module.exports = Category ;
