const  connection  = require('../database/connection');
const { STRING, DATE } = require('sequelize')
const { PermissionRole } = require('./permissionRole')
const { Role } = require('./role')

const Permission = connection.define("permission", {
    description: {
        type:STRING,
        validate:{
            len:{args:[1,100]}
        },
    },
    createdAt:DATE, 
    updatedAt:DATE
},
{ underscored: false, paranoid: true })

Permission.belongsToMany(Role, { through: PermissionRole });
Role.belongsToMany(Permission, { through: PermissionRole });
PermissionRole.hasMany(Permission, {foreignKey: 'id'})

module.exports = { Permission }